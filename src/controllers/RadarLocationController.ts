import { Request, Response } from 'express';
import { DefinitionLocation, CharacterKnownLocation, DefinitionMissionIdle, DefinitionMissionIdleAction, CharacterVampire } from '../models/index';
import { Op } from 'sequelize';

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

      // Se for a primeira vez (neófito sem mapa), inicializa o mapa inicial com descoberta progressiva
      if (knownRecords.length === 0 && allDistricts.length > 0) {
        const initialDiscoveries: any[] = [];
        // Primeiros 4 distritos -> DISCOVERED (Explorado)
        for (let i = 0; i < Math.min(4, allDistricts.length); i++) {
          initialDiscoveries.push({
            characterId: String(characterId),
            locationId: allDistricts[i].id,
            status: 'DISCOVERED'
          });
        }
        // Próximos 4 distritos -> RUMOR (Boato)
        for (let i = 4; i < Math.min(8, allDistricts.length); i++) {
          initialDiscoveries.push({
            characterId: String(characterId),
            locationId: allDistricts[i].id,
            status: 'RUMOR'
          });
        }

        if (initialDiscoveries.length > 0) {
          await CharacterKnownLocation.bulkCreate(initialDiscoveries);
          knownRecords = await CharacterKnownLocation.findAll({
            where: { characterId: String(characterId) }
          });
        }
      }

      // Mapa de status por locationId
      const statusMap = new Map<string, string>();
      knownRecords.forEach(r => statusMap.set(r.locationId, r.status));

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
          const status = statusMap.get(child.id);

          // Nível 1: OCULTO (Não está em knownRecords -> invisível no radar)
          if (!status) {
            continue;
          }

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
                descricao: 'Boato captado pelas sombras. Visite ou envie uma expedição para mapear e reconhecer este território.'
              },
              missions: []
            });
            continue;
          }

          // Nível 3: EXPLORADO (DISCOVERED / DOMINATED)
          // Vincula as missões disponíveis neste local ou gerais
          const locationMissions = allMissions.filter(m => (m as any).locationId === child.id || !(m as any).locationId);

          visibleChildren.push({
            ...child,
            knownStatus: 'DISCOVERED',
            missions: locationMissions
          });
        }

        // Retorna a zona se ela tiver pelo menos 1 bairro visível ou conhecido
        if (visibleChildren.length > 0 || statusMap.has(zone.id)) {
          zoneJson.children = visibleChildren;
          responseZones.push(zoneJson);
        }
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
