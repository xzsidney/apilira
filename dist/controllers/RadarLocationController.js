"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startReconMission = exports.discoverLocation = exports.exploreLocation = exports.getRadarLocations = void 0;
const index_1 = require("../models/index");
const NightCycleService_1 = require("../services/NightCycleService");
const getRadarLocations = async (req, res) => {
    try {
        const { characterId } = req.query;
        // Se o characterId foi enviado, aplicamos a Névoa de Guerra por personagem
        if (characterId) {
            const character = await index_1.CharacterVampire.findByPk(String(characterId));
            if (!character) {
                return res.status(404).json({ error: 'Personagem não encontrado' });
            }
            // Busca todos os bairros/distritos (level: 3)
            const allDistricts = await index_1.DefinitionLocation.findAll({ where: { level: 3 } });
            // Checa se o personagem já tem registros de locais conhecidos
            let knownRecords = await index_1.CharacterKnownLocation.findAll({
                where: { characterId: String(characterId) }
            });
            // Mapa de status por locationId
            const statusMap = new Map();
            knownRecords.forEach(r => statusMap.set(r.locationId, r.status));
            // Se o personagem não tiver pelo menos 8 distritos explorados, inicializa os distritos
            const knownDistrictsCount = knownRecords.filter(r => allDistricts.some(d => d.id === r.locationId)).length;
            if (knownDistrictsCount === 0 && allDistricts.length > 0) {
                const initialDiscoveries = [];
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
                    await index_1.CharacterKnownLocation.bulkCreate(initialDiscoveries, { ignoreDuplicates: true });
                }
            }
            // Busca todas as missões cadastradas
            const allMissions = await index_1.DefinitionMissionIdle.findAll({
                include: [{ model: index_1.DefinitionMissionIdleAction, as: 'Actions' }]
            });
            // Busca as zonas (level 2) com seus bairros (children)
            const zones = await index_1.DefinitionLocation.findAll({
                where: { level: 2 },
                include: [
                    {
                        model: index_1.DefinitionLocation,
                        as: 'children',
                        required: false
                    }
                ]
            });
            const responseZones = [];
            for (const zone of zones) {
                const zoneJson = zone.toJSON();
                const rawChildren = zoneJson.children || [];
                const visibleChildren = [];
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
                    const locationMissions = allMissions.filter(m => m.locationId === child.id);
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
        const locations = await index_1.DefinitionLocation.findAll({
            where: { level: 2 },
            include: [
                {
                    model: index_1.DefinitionLocation,
                    as: 'children',
                    required: false
                }
            ]
        });
        const enriched = locations.map(z => {
            const zJson = z.toJSON();
            if (zJson.children) {
                zJson.children = zJson.children.map((c) => ({ ...c, knownStatus: 'DISCOVERED' }));
            }
            return zJson;
        });
        return res.status(200).json(enriched);
    }
    catch (error) {
        console.error('Error fetching radar locations:', error);
        return res.status(500).json({ error: 'Erro ao buscar localizações do radar.' });
    }
};
exports.getRadarLocations = getRadarLocations;
const exploreLocation = async (req, res) => {
    try {
        const { locationId } = req.params;
        const { characterId } = req.body;
        if (!locationId || !characterId) {
            return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
        }
        const location = await index_1.DefinitionLocation.findByPk(locationId);
        if (!location) {
            return res.status(404).json({ error: 'Localização não encontrada' });
        }
        let known = await index_1.CharacterKnownLocation.findOne({
            where: { characterId, locationId }
        });
        if (known) {
            known.status = 'DISCOVERED';
            await known.save();
        }
        else {
            known = await index_1.CharacterKnownLocation.create({
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
    }
    catch (error) {
        console.error('Erro ao explorar local:', error);
        return res.status(500).json({ error: 'Erro interno ao explorar local' });
    }
};
exports.exploreLocation = exploreLocation;
const discoverLocation = async (req, res) => {
    try {
        const { locationId } = req.params;
        const { characterId, status } = req.body;
        if (!locationId || !characterId) {
            return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
        }
        const newStatus = status === 'DISCOVERED' ? 'DISCOVERED' : 'RUMOR';
        let known = await index_1.CharacterKnownLocation.findOne({
            where: { characterId, locationId }
        });
        if (known) {
            if (newStatus === 'DISCOVERED' && known.status === 'RUMOR') {
                known.status = 'DISCOVERED';
                await known.save();
            }
        }
        else {
            known = await index_1.CharacterKnownLocation.create({
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
    }
    catch (error) {
        console.error('Erro ao registrar pista de local:', error);
        return res.status(500).json({ error: 'Erro interno ao registrar pista' });
    }
};
exports.discoverLocation = discoverLocation;
const startReconMission = async (req, res) => {
    try {
        const { locationId } = req.params;
        const { characterId } = req.body;
        if (!locationId || !characterId) {
            return res.status(400).json({ error: 'locationId e characterId são obrigatórios' });
        }
        const character = await index_1.CharacterVampire.findByPk(characterId, {
            include: [
                { model: index_1.CharacterVampireAttribute, include: [{ model: index_1.DefinitionAttribute }] },
                { model: index_1.CharacterVampireSkill, include: [{ model: index_1.DefinitionSkill }] }
            ]
        });
        if (!character)
            return res.status(404).json({ error: 'Personagem não encontrado' });
        // Bloqueia se já for dia
        if ((character.nightMinutesSpent || 0) >= 600) {
            return res.status(400).json({
                error: 'O Sol raiou em Nocturna (06:00)! É impossível realizar expedições de reconhecimento durante o dia. Retorne ao seu refúgio e avance para a próxima noite.'
            });
        }
        // Verifica se já tem missão ativa
        const existingActive = await index_1.CharacterActiveMission.findOne({
            where: { characterId, status: 'IN_PROGRESS' }
        });
        if (existingActive) {
            return res.status(400).json({ error: 'O vampiro já está em uma operação em andamento.' });
        }
        const location = await index_1.DefinitionLocation.findByPk(locationId);
        if (!location)
            return res.status(404).json({ error: 'Distrito não encontrado' });
        // Busca ou cria a missão de RECON para este distrito
        let reconMission = await index_1.DefinitionMissionIdle.findOne({
            where: { locationId: location.id, category: 'RECON' },
            include: [{ model: index_1.DefinitionMissionIdleAction, as: 'Actions' }]
        });
        if (!reconMission) {
            reconMission = await index_1.DefinitionMissionIdle.create({
                title: `Reconhecimento Urbano: ${location.name}`,
                description: `Expedição tática de infiltração, vigilância e mapeamento nas sombras do distrito de ${location.name}.`,
                category: 'RECON',
                durationMinutes: 5,
                baseDifficulty: 8,
                locationId: location.id,
                rewardsJson: JSON.stringify({ exp: 5 }),
                penaltiesJson: JSON.stringify({ hunger: 1 })
            });
            // Cria as 3 ações sequenciais do V5
            await index_1.DefinitionMissionIdleAction.bulkCreate([
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
            reconMission = await index_1.DefinitionMissionIdle.findByPk(reconMission.id, {
                include: [{ model: index_1.DefinitionMissionIdleAction, as: 'Actions' }]
            });
        }
        let actions = reconMission.Actions || [];
        actions.sort((a, b) => a.stepOrder - b.stepOrder);
        const getAttrVal = (name) => {
            const found = character.CharacterVampireAttributes?.find((a) => a.DefinitionAttribute?.name === name);
            return found ? found.value : 1;
        };
        const getSkillVal = (name) => {
            const found = character.CharacterVampireSkills?.find((a) => a.DefinitionSkill?.name === name);
            return found ? found.value : 0;
        };
        const totalActions = actions.length || 1;
        const stepDurationMinutes = 5 / totalActions;
        // Trânsito + 300 minutos noturnos (5 horas de noite de jogo)
        const transit = await NightCycleService_1.NightCycleService.calculateTransit(character.currentLocationId || null, location.id);
        const missionInGameMinutes = 300; // 5 horas de jogo
        const nightAdvance = await NightCycleService_1.NightCycleService.advanceNightTime(character.id, transit.transitMinutesInGame, missionInGameMinutes, location.id);
        if (!reconMission) {
            return res.status(500).json({ error: 'Erro ao criar missão de reconhecimento' });
        }
        const report = {
            title: reconMission.title,
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
                if (roll >= difficulty)
                    successes++;
                if (roll === 10)
                    successes++;
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
        }
        else {
            expiresAt.setMinutes(expiresAt.getMinutes() + 5);
        }
        const newActiveMission = await index_1.CharacterActiveMission.create({
            characterId,
            definitionMissionIdleId: reconMission.id,
            startedAt,
            expiresAt,
            status: 'IN_PROGRESS',
            stepDurationMinutes,
            reportJson: JSON.stringify(report)
        });
        return res.status(201).json({
            success: true,
            message: `Missão de Reconhecimento iniciada para ${location.name}!`,
            activeMission: newActiveMission
        });
    }
    catch (error) {
        console.error('Erro ao iniciar missão de reconhecimento:', error);
        return res.status(500).json({ error: 'Erro interno ao iniciar reconhecimento' });
    }
};
exports.startReconMission = startReconMission;
