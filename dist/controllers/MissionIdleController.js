"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMission = exports.startMission = exports.getActiveMission = exports.cancelMission = exports.listAvailableMissions = void 0;
const models_1 = require("../models");
const CharacterService_1 = require("../services/CharacterService");
const NightCycleService_1 = require("../services/NightCycleService");
const listAvailableMissions = async (req, res) => {
    try {
        const { category } = req.query;
        const whereClause = {};
        if (category) {
            whereClause.category = category;
        }
        const missions = await models_1.DefinitionMissionIdle.findAll({
            where: whereClause,
            include: [
                {
                    model: models_1.DefinitionMissionIdleAction,
                    as: 'Actions',
                    attributes: ['id', 'stepOrder', 'name', 'difficulty', 'attributeReq', 'skillReq', 'description']
                }
            ]
        });
        return res.status(200).json(missions);
    }
    catch (error) {
        console.error('Error fetching idle missions:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listAvailableMissions = listAvailableMissions;
const cancelMission = async (req, res) => {
    try {
        const { activeMissionId } = req.body;
        if (!activeMissionId)
            return res.status(400).json({ error: 'Active mission ID required' });
        const activeMission = await models_1.CharacterActiveMission.findByPk(activeMissionId);
        if (!activeMission)
            return res.status(404).json({ error: 'Active mission not found' });
        if (activeMission.status !== 'IN_PROGRESS')
            return res.status(400).json({ error: 'Only in-progress missions can be cancelled' });
        activeMission.status = 'CANCELLED';
        await activeMission.save();
        return res.status(200).json({ success: true, message: 'Mission cancelled successfully' });
    }
    catch (error) {
        console.error('Error cancelling mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.cancelMission = cancelMission;
const getActiveMission = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId) {
            return res.status(400).json({ error: 'Character ID is required' });
        }
        const activeMission = await models_1.CharacterActiveMission.findOne({
            where: {
                characterId,
                status: 'IN_PROGRESS'
            },
            include: [
                { model: models_1.DefinitionMissionIdle, as: 'DefinitionMissionIdle' }
            ]
        });
        if (!activeMission)
            return res.status(200).json(null);
        const character = await models_1.CharacterVampire.findByPk(characterId);
        const isSunHazard = character ? (character.nightMinutesSpent || 0) >= 600 : false;
        // Filter report logs based on time (hide future steps)
        const now = new Date();
        const startedAt = new Date(activeMission.startedAt);
        const expiresAt = new Date(activeMission.expiresAt);
        // Parse the report JSON
        let fullReport = null;
        if (activeMission.reportJson) {
            try {
                fullReport = JSON.parse(activeMission.reportJson);
            }
            catch (e) {
                console.error('Failed to parse reportJson');
            }
        }
        const responseMission = activeMission.toJSON();
        responseMission.isPausedBySunHazard = isSunHazard;
        if (fullReport && fullReport.steps) {
            const totalSteps = fullReport.steps.length;
            const timelineSteps = [];
            let completedCount = 0;
            if (isSunHazard) {
                // SOB AMEAÇA SOLAR: CONGELA 100% DOS PASSOS NA HORA
                timelineSteps.push({
                    order: 1,
                    actionName: fullReport.steps[0].actionName,
                    pool: fullReport.steps[0].pool,
                    status: 'FROZEN_SUN',
                    narrative: '⛔ Operação paralisada pelos raios solares! O vampiro precisou cessar a ação para não ser incinerado pelo sol.'
                });
                for (let i = 1; i < totalSteps; i++) {
                    timelineSteps.push({
                        order: i + 1,
                        actionName: fullReport.steps[i].actionName,
                        pool: fullReport.steps[i].pool,
                        status: 'LOCKED',
                        narrative: '🔒 Bloqueada. O amanhecer impede o avanço de qualquer atividade em campo aberto.'
                    });
                }
                responseMission.currentReport = {
                    title: fullReport.title,
                    steps: timelineSteps,
                    isSuccess: null,
                    finalChanges: []
                };
                responseMission.currentStage = 0;
                responseMission.totalStages = totalSteps;
                responseMission.readyToResolve = false;
            }
            else {
                // FLUXO NORMAL NOTURNO
                const isExpired = now >= expiresAt;
                const totalDurationMs = Math.max(1000, expiresAt.getTime() - startedAt.getTime());
                const stepDurationMs = totalDurationMs / Math.max(1, totalSteps);
                for (let i = 0; i < totalSteps; i++) {
                    const rawStep = fullReport.steps[i];
                    const stepEndTime = new Date(startedAt.getTime() + (i + 1) * stepDurationMs);
                    const stepStartTime = new Date(startedAt.getTime() + i * stepDurationMs);
                    if (now >= stepEndTime || isExpired) {
                        completedCount++;
                        timelineSteps.push({
                            order: i + 1,
                            actionName: rawStep.actionName,
                            pool: rawStep.pool,
                            status: 'COMPLETED',
                            passed: rawStep.passed,
                            rolls: rawStep.rolls,
                            successes: rawStep.successes,
                            narrative: rawStep.narrative
                        });
                    }
                    else if (now >= stepStartTime) {
                        timelineSteps.push({
                            order: i + 1,
                            actionName: rawStep.actionName,
                            pool: rawStep.pool,
                            status: 'IN_PROGRESS',
                            narrative: 'O vampiro está atuando nas sombras desta etapa... Avaliando instintos e perícias.'
                        });
                    }
                    else {
                        timelineSteps.push({
                            order: i + 1,
                            actionName: rawStep.actionName,
                            pool: rawStep.pool,
                            status: 'LOCKED',
                            narrative: 'Aguardando conclusão da etapa anterior para iniciar.'
                        });
                    }
                }
                responseMission.currentReport = {
                    title: fullReport.title,
                    steps: timelineSteps,
                    isSuccess: isExpired ? fullReport.isSuccess : null,
                    finalChanges: isExpired ? fullReport.finalChanges : []
                };
                responseMission.currentStage = isExpired ? totalSteps : completedCount;
                responseMission.totalStages = totalSteps;
                if (isExpired) {
                    responseMission.readyToResolve = true;
                }
            }
        }
        return res.status(200).json(responseMission);
    }
    catch (error) {
        console.error('Error fetching active mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getActiveMission = getActiveMission;
const startMission = async (req, res) => {
    try {
        const { characterId, definitionMissionIdleId, forcedActionId } = req.body;
        if (!characterId || !definitionMissionIdleId) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        const existingActive = await models_1.CharacterActiveMission.findOne({
            where: {
                characterId,
                status: 'IN_PROGRESS'
            }
        });
        if (existingActive) {
            return res.status(400).json({ error: 'Character already has an active mission' });
        }
        const character = await models_1.CharacterVampire.findByPk(characterId, {
            include: [
                { model: models_1.CharacterVampireAttribute, include: [{ model: models_1.DefinitionAttribute }] },
                { model: models_1.CharacterVampireSkill, include: [{ model: models_1.DefinitionSkill }] }
            ]
        });
        if (!character)
            return res.status(404).json({ error: 'Character not found' });
        // Bloqueia novas operações se o sol já raiou
        if ((character.nightMinutesSpent || 0) >= 600) {
            return res.status(400).json({
                error: 'O Sol raiou em Nocturna (06:00)! É impossível realizar operações durante o dia. Retorne ao seu refúgio e avance para a próxima noite.'
            });
        }
        const getAttrVal = (name) => {
            const found = character.CharacterVampireAttributes?.find((a) => a.DefinitionAttribute?.name === name);
            return found ? found.value : 1;
        };
        const getSkillVal = (name) => {
            const found = character.CharacterVampireSkills?.find((a) => a.DefinitionSkill?.name === name);
            return found ? found.value : 0;
        };
        const missionDef = await models_1.DefinitionMissionIdle.findByPk(definitionMissionIdleId, {
            include: [{ model: models_1.DefinitionMissionIdleAction, as: 'Actions' }]
        });
        if (!missionDef) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        if (missionDef.maxCompletions !== null && missionDef.maxCompletions > 0) {
            const completions = await CharacterService_1.CharacterService.getCompletionCount(characterId, 'IDLE_MISSION', definitionMissionIdleId);
            if (completions >= missionDef.maxCompletions) {
                return res.status(403).json({ error: 'Maximum completions reached for this mission' });
            }
        }
        let actions = missionDef.Actions || [];
        actions.sort((a, b) => a.stepOrder - b.stepOrder);
        // If forcedActionId is provided (e.g. Hunting Predation choice), use ONLY that action.
        if (forcedActionId) {
            const specificAction = actions.find((a) => a.id === forcedActionId);
            if (specificAction) {
                actions = [specificAction];
            }
        }
        const totalActions = actions.length || 1;
        let stepDurationMinutes = missionDef.durationMinutes / totalActions;
        if (stepDurationMinutes <= 0)
            stepDurationMinutes = 1;
        // Calcula trânsito e tempo de jogo da missão
        const transit = await NightCycleService_1.NightCycleService.calculateTransit(character.currentLocationId || null, missionDef.locationId || null);
        const missionInGameMinutes = NightCycleService_1.NightCycleService.getMissionInGameMinutes(missionDef.baseDifficulty || 5, missionDef.durationMinutes);
        // Avança o relógio da noite do personagem
        const nightAdvance = await NightCycleService_1.NightCycleService.advanceNightTime(character.id, transit.transitMinutesInGame, missionInGameMinutes, missionDef.locationId || undefined);
        const report = {
            title: missionDef.title,
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
            // Dice pool calculation
            const attrVal = action.attributeReq ? getAttrVal(action.attributeReq) : 1;
            const skillVal = action.skillReq ? getSkillVal(action.skillReq) : 0;
            const numDice = attrVal + skillVal;
            const difficulty = action.difficulty || 6;
            let successes = 0;
            const diceRolls = [];
            for (let d = 0; d < numDice; d++) {
                const roll = Math.floor(Math.random() * 10) + 1;
                diceRolls.push(roll);
                if (roll >= difficulty)
                    successes++;
                if (roll === 10)
                    successes++; // V5 simple critical bonus
            }
            const stepLog = {
                stepOrder: i + 1,
                actionName: action.name,
                pool: `${action.attributeReq} + ${action.skillReq} (${numDice} dados)`,
                rolls: diceRolls,
                successes,
                passed: successes > 0,
                narrative: successes > 0 ? action.successText : action.failureText
            };
            report.steps.push(stepLog);
            if (successes === 0) {
                missionFailed = true;
                failedAtStep = i + 1;
                report.isSuccess = false;
                break; // Stop simulating if failed
            }
        }
        // Set expiration based on failure or success
        const startedAt = new Date();
        const expiresAt = new Date(startedAt);
        if (missionFailed) {
            expiresAt.setMinutes(expiresAt.getMinutes() + (failedAtStep * stepDurationMinutes));
        }
        else {
            expiresAt.setMinutes(expiresAt.getMinutes() + missionDef.durationMinutes);
        }
        const newActiveMission = await models_1.CharacterActiveMission.create({
            characterId,
            definitionMissionIdleId,
            startedAt,
            expiresAt,
            status: 'IN_PROGRESS',
            stepDurationMinutes,
            reportJson: JSON.stringify(report)
        });
        return res.status(201).json(newActiveMission);
    }
    catch (error) {
        console.error('Error starting mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.startMission = startMission;
const resolveMission = async (req, res) => {
    try {
        const { activeMissionId } = req.body;
        if (!activeMissionId)
            return res.status(400).json({ error: 'Active mission ID required' });
        const activeMission = await models_1.CharacterActiveMission.findByPk(activeMissionId, {
            include: [
                { model: models_1.DefinitionMissionIdle, as: 'DefinitionMissionIdle' },
                { model: models_1.CharacterVampire, as: 'CharacterVampire' }
            ]
        });
        if (!activeMission)
            return res.status(404).json({ error: 'Active mission not found' });
        if (activeMission.status !== 'IN_PROGRESS')
            return res.status(400).json({ error: 'Mission is already resolved' });
        const character = activeMission.CharacterVampire;
        if (character && (character.nightMinutesSpent || 0) >= 600) {
            return res.status(400).json({
                error: 'O Sol raiou em Nocturna (06:00)! Você está sob perigo imediato de queimação solar. É impossível finalizar operações na rua durante o dia — busque um abrigo imediatamente!'
            });
        }
        if (new Date() < new Date(activeMission.expiresAt))
            return res.status(400).json({ error: 'Mission time has not expired yet' });
        const missionDef = activeMission.DefinitionMissionIdle;
        const report = activeMission.reportJson ? JSON.parse(activeMission.reportJson) : { isSuccess: true, finalChanges: [] };
        if (!report.finalChanges)
            report.finalChanges = [];
        const parseJson = (val) => {
            if (!val)
                return {};
            if (typeof val === 'object')
                return val;
            try {
                return JSON.parse(val);
            }
            catch (e) {
                return {};
            }
        };
        const rewards = parseJson(missionDef.rewardsJson);
        const penalties = parseJson(missionDef.penaltiesJson);
        if (report.isSuccess) {
            const impact = {};
            if (rewards.hunger)
                impact.hunger = Number(rewards.hunger);
            if (rewards.exp)
                impact.exp = Number(rewards.exp);
            if (rewards.healthDamageSuperficial)
                impact.healthDamageSuperficial = Number(rewards.healthDamageSuperficial);
            if (rewards.willpowerDamageSuperficial)
                impact.willpowerDamageSuperficial = Number(rewards.willpowerDamageSuperficial);
            if (rewards.humanity)
                impact.humanity = Number(rewards.humanity);
            if (rewards.money)
                impact.money = Number(rewards.money);
            if (rewards.equipmentDropId)
                impact.equipmentDropId = rewards.equipmentDropId;
            if (rewards.attributeBonus?.name && rewards.attributeBonus?.value)
                impact.attributeBonus = rewards.attributeBonus;
            if (rewards.skillBonus?.name && rewards.skillBonus?.value)
                impact.skillBonus = rewards.skillBonus;
            await CharacterService_1.CharacterService.applyImpact(character.id, impact);
            await character.reload();
            if (rewards.exp)
                report.finalChanges.push(`✨ Ganhou +${rewards.exp} XP.`);
            if (rewards.hunger)
                report.finalChanges.push(`🩸 Fome saciada em ${Math.abs(rewards.hunger)} ponto(s) (Atual: ${character.hunger}/5).`);
            if (rewards.money)
                report.finalChanges.push(`💵 Obteve R$ ${rewards.money} em recursos e espólio financeiro.`);
            if (rewards.equipmentDropId) {
                const dropItem = await models_1.DefinitionEquipment.findByPk(rewards.equipmentDropId);
                if (dropItem) {
                    report.finalChanges.push(`🗡️ Item de Arsenal obtido: ${dropItem.name} (${dropItem.type})!`);
                }
            }
            if (rewards.willpowerDamageSuperficial)
                report.finalChanges.push(`🧠 Força de Vontade recuperada.`);
            if (rewards.humanity)
                report.finalChanges.push(`🕊️ Humanidade alterada (Atual: ${character.humanity}/10).`);
            if (rewards.attributeBonus?.name)
                report.finalChanges.push(`💪 +${rewards.attributeBonus.value} em ${rewards.attributeBonus.name}!`);
            if (rewards.skillBonus?.name)
                report.finalChanges.push(`🎯 +${rewards.skillBonus.value} em ${rewards.skillBonus.name}!`);
            // Se for missão de RECONHECIMENTO e teve sucesso, promove o distrito para DISCOVERED
            if (missionDef.category === 'RECON' && missionDef.locationId) {
                let known = await models_1.CharacterKnownLocation.findOne({
                    where: { characterId: character.id, locationId: missionDef.locationId }
                });
                if (known) {
                    known.status = 'DISCOVERED';
                    await known.save();
                }
                else {
                    await models_1.CharacterKnownLocation.create({
                        characterId: character.id,
                        locationId: missionDef.locationId,
                        status: 'DISCOVERED'
                    });
                }
                report.finalChanges.push(`🗺️ O distrito foi totalmente mapeado! Dados estratégicos e incursões desbloqueadas.`);
            }
            activeMission.status = 'COMPLETED';
            await CharacterService_1.CharacterService.logActivity(character.id, 'IDLE_MISSION', missionDef.id, { success: true });
        }
        else {
            const impact = {};
            if (penalties.hunger)
                impact.hunger = Number(penalties.hunger);
            if (penalties.healthDamageSuperficial)
                impact.healthDamageSuperficial = Number(penalties.healthDamageSuperficial);
            if (penalties.healthDamageAggravated)
                impact.healthDamageAggravated = Number(penalties.healthDamageAggravated);
            if (penalties.willpowerDamageSuperficial)
                impact.willpowerDamageSuperficial = Number(penalties.willpowerDamageSuperficial);
            if (penalties.willpowerDamageAggravated)
                impact.willpowerDamageAggravated = Number(penalties.willpowerDamageAggravated);
            if (penalties.humanity)
                impact.humanity = Number(penalties.humanity);
            if (penalties.stains)
                impact.stains = Number(penalties.stains);
            if (penalties.money)
                impact.money = -Math.abs(Number(penalties.money));
            if (penalties.lostEquipmentId)
                impact.lostEquipmentId = penalties.lostEquipmentId;
            await CharacterService_1.CharacterService.applyImpact(character.id, impact);
            await character.reload();
            if (penalties.hunger)
                report.finalChanges.push(`🩸 A agitação da Besta aumentou a Fome em +${penalties.hunger} (Atual: ${character.hunger}/5).`);
            if (penalties.money)
                report.finalChanges.push(`💸 Teve R$ ${penalties.money} confiscados ou perdidos no recuo.`);
            if (penalties.lostEquipmentId) {
                const lostItem = await models_1.DefinitionEquipment.findByPk(penalties.lostEquipmentId);
                if (lostItem) {
                    report.finalChanges.push(`⚠️ Perdeu o item do inventário: ${lostItem.name} (${lostItem.type})!`);
                }
            }
            if (penalties.healthDamageSuperficial)
                report.finalChanges.push(`💔 Sofreu ${penalties.healthDamageSuperficial} de dano superficial à Vitalidade.`);
            if (penalties.healthDamageAggravated)
                report.finalChanges.push(`☠️ Sofreu ${penalties.healthDamageAggravated} de DANO AGRAVADO à Vitalidade!`);
            if (penalties.willpowerDamageSuperficial)
                report.finalChanges.push(`🧠 Sofreu ${penalties.willpowerDamageSuperficial} de dano superficial à Força de Vontade.`);
            if (penalties.willpowerDamageAggravated)
                report.finalChanges.push(`💥 Sofreu ${penalties.willpowerDamageAggravated} de dano agravado à Força de Vontade.`);
            if (penalties.stains)
                report.finalChanges.push(`🥀 Recebeu +${penalties.stains} Mancha(s) na Humanidade.`);
            if (missionDef.category === 'RECON') {
                report.finalChanges.push(`⚠️ A infiltração nas sombras falhou. O distrito permanece oculto na névoa.`);
            }
            activeMission.status = 'FAILED';
            await CharacterService_1.CharacterService.logActivity(character.id, 'IDLE_MISSION', missionDef.id, { success: false });
        }
        activeMission.reportJson = JSON.stringify(report);
        await activeMission.save();
        return res.status(200).json({
            success: true,
            report,
            character
        });
    }
    catch (error) {
        console.error('Error resolving mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.resolveMission = resolveMission;
