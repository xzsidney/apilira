import { Request, Response } from 'express';
import { 
  DefinitionLocation, 
  CharacterKnownLocation, 
  DefinitionMissionIdle, 
  DefinitionMissionIdleAction, 
  CharacterVampire,
  CharacterActiveMission,
  CharacterVampireAttribute,
  CharacterVampireSkill,
  DefinitionAttribute,
  DefinitionSkill
} from '../models/index';
import { Op } from 'sequelize';
import { NightCycleService } from '../services/NightCycleService';

export const getRadarLocations = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.query;

    // Se o characterId foi enviado, aplicamos a Névoa de Guerra por personagem
    if (characterId) {
      const character = await CharacterVampire.findByPk(String(characterId));
      if (!character) {
        return res.status(404).json({ error: 'Personagem não encontrado' });
      }

      // Busca todos os bairros/distritos (level: 3)
      const allDistricts = await DefinitionLocation.findAll({ where: { level: 3 } });

      // Checa se o personagem já tem registros de locais conhecidos
      let knownRecords = await CharacterKnownLocation.findAll({
        where: { characterId: String(characterId) }
      });

      // Mapa de status por locationId
      const statusMap = new Map<string, string>();
      knownRecords.forEach(r => statusMap.set(r.locationId, r.status));

      // Se o personagem não tiver pelo menos 8 distritos explorados, inicializa os distritos
      const knownDistrictsCount = knownRecords.filter(r => allDistricts.some(d => d.id === r.locationId)).length;
      if (knownDistrictsCount === 0 && allDistricts.length > 0) {
        const initialDiscoveries: any[] = [];
        // Primeiros 10 distritos -> DISCOVERED (Explorado)
        for (let i = 0; i < Math.min(10, allDistricts.length); i++) {
          initialDiscoveries.push({
            characterId: String(characterId),
            locationId: allDistricts[i].id,
            status: 'DISCOVERED'
          });
          statusMap.set(allDistricts[i].id, 'DISCOVERED');
        }
        if (initialDiscoveries.length > 0) {
          await CharacterKnownLocation.bulkCreate(initialDiscoveries, { ignoreDuplicates: true });
        }
      }

      // Busca todas as missões cadastradas
      const allMissions = await DefinitionMissionIdle.findAll({
        include: [{ model: DefinitionMissionIdleAction, as: 'Actions' }]
      });

      // Busca as zonas (level 2) com seus bairros (children)
      const zones = await DefinitionLocation.findAll({
        where: { level: 2 },
        include: [
          {
            model: DefinitionLocation,
            as: 'children',
            required: false
          }
        ]
      });

      const responseZones: any[] = [];

      for (const zone of zones) {
        const zoneJson: any = zone.toJSON();
        const rawChildren: any[] = zoneJson.children || [];
        const visibleChildren: any[] = [];

        for (const child of rawChildren) {
          // Status: DISCOVERED se estiver marcado, senão RUMOR (para nunca sumir a bolinha)
          const status = statusMap.get(child.id) || 'RUMOR';

          // Nível 2: BOATO / RUMOR (Aparece com interrogação e dados mascarados)
          if (status === 'RUMOR') {
            visibleChildren.push({
              id: child.id,
              name: child.name,
              level: child.level,
              parentId: child.parentId,
              knownStatus: 'RUMOR',
              attributes: {
                dominio_faccao: 'Desconhecido (Boato)',
                riqueza: '???',
                criminalidade: '???',
                presenca_policial: '???',
                descricao: 'Boato captado pelas sombras da cidade. Clique em Explorar Distrito para enviar seus lacaios e mapear o território.'
              },
              missions: []
            });
            continue;
          }

          // Nível 3: EXPLORADO (DISCOVERED / DOMINATED)
          const locationMissions = allMissions.filter(m => (m as any).locationId === child.id);

          visibleChildren.push({
            ...child,
            knownStatus: 'DISCOVERED',
            missions: locationMissions
          });
        }

        zoneJson.children = visibleChildren;
        responseZones.push(zoneJson);
      }

      return res.status(200).json(responseZones);
    }

    // Se for requisição sem characterId (ex: visualização do Mestre/GM no compêndio), retorna tudo liberado
    const locations = await DefinitionLocation.findAll({
      where: { level: 2 },
      include: [
        {
          model: DefinitionLocation,
          as: 'children',
          required: false
        }
      ]
    });

    const enriched = locations.map(z => {
      const zJson: any = z.toJSON();
      if (zJson.children) {
        zJson.children = zJson.children.map((c: any) => ({ ...c, knownStatus: 'DISCOVERED' }));
      }
      return zJson;
    });

    return res.status(200).json(enriched);
  } catch (error: any) {
    console.error('Error fetching radar locations:', error);
    return res.status(500).json({ error: 'Erro ao buscar localizações do radar.' });
  }
};

export const exploreLocation = async (req: Request, res: Response) => {
  try {
    const { locationId } = req.params;
    const { characterId } = req.body;

    if (!locationId || !characterId) {
      return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
    }

    const location = await DefinitionLocation.findByPk(locationId);
    if (!location) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }

    let known = await CharacterKnownLocation.findOne({
      where: { characterId, locationId }
    });

    if (known) {
      known.status = 'DISCOVERED';
      await known.save();
    } else {
      known = await CharacterKnownLocation.create({
        characterId,
        locationId,
        status: 'DISCOVERED'
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: `Distrito '${location.name}' agora está totalmente mapeado!`,
      known 
    });
  } catch (error) {
    console.error('Erro ao explorar local:', error);
    return res.status(500).json({ error: 'Erro interno ao explorar local' });
  }
};

export const discoverLocation = async (req: Request, res: Response) => {
  try {
    const { locationId } = req.params;
    const { characterId, status } = req.body;

    if (!locationId || !characterId) {
      return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
    }

    const newStatus = status === 'DISCOVERED' ? 'DISCOVERED' : 'RUMOR';

    let known = await CharacterKnownLocation.findOne({
      where: { characterId, locationId }
    });

    if (known) {
      if (newStatus === 'DISCOVERED' && known.status === 'RUMOR') {
        known.status = 'DISCOVERED';
        await known.save();
      }
    } else {
      known = await CharacterKnownLocation.create({
        characterId,
        locationId,
        status: newStatus
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: `Nova pista sobre local registrada!`,
      known 
    });
  } catch (error) {
    console.error('Erro ao registrar pista de local:', error);
    return res.status(500).json({ error: 'Erro interno ao registrar pista' });
  }
};

export const startReconMission = async (req: Request, res: Response) => {
  try {
    const { locationId } = req.params;
    const { characterId } = req.body;

    if (!locationId || !characterId) {
      return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
    }

    const character = await CharacterVampire.findByPk(characterId, {
      include: [
        { model: CharacterVampireAttribute, include: [{ model: DefinitionAttribute }] },
        { model: CharacterVampireSkill, include: [{ model: DefinitionSkill }] }
      ]
    });
    if (!character) return res.status(404).json({ error: 'Personagem não encontrado' });

    // Bloqueia se já for dia
    if ((character.nightMinutesSpent || 0) >= 600) {
      return res.status(400).json({ 
        error: 'O Sol raiou em Nocturna (06:00)! É impossível realizar expedições de reconhecimento durante o dia. Retorne ao seu refúgio e avance para a próxima noite.' 
      });
    }

    // Verifica se já tem missão ativa
    const existingActive = await CharacterActiveMission.findOne({
      where: { characterId, status: 'IN_PROGRESS' }
    });
    if (existingActive) {
      return res.status(400).json({ error: 'O vampiro já está em uma operação em andamento.' });
    }

    const location = await DefinitionLocation.findByPk(locationId);
    if (!location) return res.status(404).json({ error: 'Distrito não encontrado' });

    // Busca ou cria a missão de RECON para este distrito
    let reconMission = await DefinitionMissionIdle.findOne({
      where: { locationId: location.id, category: 'RECON' },
      include: [{ model: DefinitionMissionIdleAction, as: 'Actions' }]
    });

    if (!reconMission) {
      reconMission = await DefinitionMissionIdle.create({
        title: `Reconhecimento Urbano: ${location.name}`,
        description: `Expedição tática de infiltração, vigilância e mapeamento nas sombras do distrito de ${location.name}.`,
        category: 'RECON',
        durationMinutes: 5,
        baseDifficulty: 8,
        locationId: location.id,
        rewardsJson: JSON.stringify({ exp: 5 }),
        penaltiesJson: JSON.stringify({ hunger: 1 })
      } as any);

      // Cria as 3 ações sequenciais do V5
      await DefinitionMissionIdleAction.bulkCreate([
        {
          definitionMissionIdleId: reconMission.id,
          stepOrder: 1,
          name: 'Infiltração & Rotas de Fuga',
          attributeReq: 'Percepção',
          skillReq: 'Sobrevivência',
          difficulty: 7,
          successText: 'Você identificou becos escuros e rotas seguras longe de holofotes e patrulhas civis.',
          failureText: 'Patrulhas e transeuntes forçaram você a se esconder em um beco sem saída, perdendo preciosas horas de escuridão.'
        },
        {
          definitionMissionIdleId: reconMission.id,
          stepOrder: 2,
          name: 'Mapeamento de Facções & Poder',
          attributeReq: 'Raciocínio',
          skillReq: 'Investigação',
          difficulty: 8,
          successText: 'Você interceptou transmissões e descobriu a presença de membros e a facção que controla o setor.',
          failureText: 'As pistas se misturaram em um labirinto de desinformação orquestrado pela Camarilla.'
        },
        {
          definitionMissionIdleId: reconMission.id,
          stepOrder: 3,
          name: 'Vigilância das Sombras & Retirada',
          attributeReq: 'Destreza',
          skillReq: 'Furtividade',
          difficulty: 7,
          successText: 'Você registrou os pontos críticos e recuou para as sombras sem deixar qualquer rastro.',
          failureText: 'Câmeras de segurança e cães de guarda detectaram sua presença, forçando um recuo desajeitado e exaustivo.'
        }
      ]);

      reconMission = await DefinitionMissionIdle.findByPk(reconMission.id, {
        include: [{ model: DefinitionMissionIdleAction, as: 'Actions' }]
      });
    }

    let actions = (reconMission as any).Actions || [];
    actions.sort((a: any, b: any) => a.stepOrder - b.stepOrder);

    const getAttrVal = (name: string) => {
      const found = (character as any).CharacterVampireAttributes?.find((a: any) => a.DefinitionAttribute?.name === name);
      return found ? found.value : 1;
    };
    const getSkillVal = (name: string) => {
      const found = (character as any).CharacterVampireSkills?.find((a: any) => a.DefinitionSkill?.name === name);
      return found ? found.value : 0;
    };

    const totalActions = actions.length || 1;
    const stepDurationMinutes = 5 / totalActions;

    // Trânsito + 300 minutos noturnos (5 horas de noite de jogo)
    const transit = await NightCycleService.calculateTransit(character.currentLocationId || null, location.id);
    const missionInGameMinutes = 300; // 5 horas de jogo

    const nightAdvance = await NightCycleService.advanceNightTime(
      character.id,
      transit.transitMinutesInGame,
      missionInGameMinutes,
      location.id
    );

    if (!reconMission) {
      return res.status(500).json({ error: 'Erro ao criar missão de reconhecimento' });
    }

    const report: any = {
      title: (reconMission as any).title,
      isSuccess: true,
      transitMinutes: transit.transitMinutesInGame,
      missionInGameMinutes,
      departureLocation: transit.fromLocationName,
      targetLocation: transit.toLocationName,
      isSunHazardTriggered: nightAdvance.isSunHazardTriggered,
      steps: [],
      finalChanges: []
    };

    let missionFailed = false;
    let failedAtStep = 0;

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      const attrVal = action.attributeReq ? getAttrVal(action.attributeReq) : 1;
      const skillVal = action.skillReq ? getSkillVal(action.skillReq) : 0;
      const numDice = attrVal + skillVal;
      const difficulty = action.difficulty || 8;
      let successes = 0;
      const diceRolls = [];

      for (let d = 0; d < numDice; d++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        diceRolls.push(roll);
        if (roll >= difficulty) successes++;
        if (roll === 10) successes++;
      }

      const passed = successes > 0;
      report.steps.push({
        stepOrder: i + 1,
        actionName: action.name,
        pool: `${action.attributeReq} + ${action.skillReq} (${numDice} dados)`,
        rolls: diceRolls,
        successes,
        passed,
        narrative: passed ? action.successText : action.failureText
      });

      if (!passed) {
        missionFailed = true;
        failedAtStep = i + 1;
        report.isSuccess = false;
        break;
      }
    }

    const startedAt = new Date();
    const expiresAt = new Date(startedAt);
    if (missionFailed) {
      expiresAt.setMinutes(expiresAt.getMinutes() + (failedAtStep * stepDurationMinutes));
    } else {
      expiresAt.setMinutes(expiresAt.getMinutes() + 5);
    }

    const newActiveMission = await CharacterActiveMission.create({
      characterId,
      definitionMissionIdleId: reconMission.id,
      startedAt,
      expiresAt,
      status: 'IN_PROGRESS',
      stepDurationMinutes,
      reportJson: JSON.stringify(report)
    } as any);

    return res.status(201).json({
      success: true,
      message: `Missão de Reconhecimento iniciada para ${location.name}!`,
      activeMission: newActiveMission
    });

  } catch (error) {
    console.error('Erro ao iniciar missão de reconhecimento:', error);
    return res.status(500).json({ error: 'Erro interno ao iniciar reconhecimento' });
  }
};
