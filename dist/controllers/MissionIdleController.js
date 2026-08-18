"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveMission = exports.startMission = exports.getActiveMission = exports.listAvailableMissions = void 0;
const models_1 = require("../models");
const listAvailableMissions = async (req, res) => {
    try {
        const missions = await models_1.DefinitionMissionIdle.findAll();
        return res.status(200).json(missions);
    }
    catch (error) {
        console.error('Error fetching idle missions:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listAvailableMissions = listAvailableMissions;
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
        return res.status(200).json(activeMission);
    }
    catch (error) {
        console.error('Error fetching active mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getActiveMission = getActiveMission;
const startMission = async (req, res) => {
    try {
        const { characterId, missionId, selectedAttribute, selectedSkill } = req.body;
        if (!characterId || !missionId || !selectedAttribute || !selectedSkill) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        // Check if character already has an active mission
        const existingActive = await models_1.CharacterActiveMission.findOne({
            where: {
                characterId,
                status: 'IN_PROGRESS'
            }
        });
        if (existingActive) {
            return res.status(400).json({ error: 'Character already has an active mission' });
        }
        // Get mission duration
        const missionDef = await models_1.DefinitionMissionIdle.findByPk(missionId);
        if (!missionDef) {
            return res.status(404).json({ error: 'Mission not found' });
        }
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + missionDef.durationMinutes);
        const newActiveMission = await models_1.CharacterActiveMission.create({
            characterId,
            missionId,
            selectedAttribute,
            selectedSkill,
            expiresAt,
            status: 'IN_PROGRESS'
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
        if (!activeMissionId) {
            return res.status(400).json({ error: 'Active mission ID required' });
        }
        const activeMission = await models_1.CharacterActiveMission.findByPk(activeMissionId, {
            include: [
                { model: models_1.DefinitionMissionIdle, as: 'DefinitionMissionIdle' },
                { model: models_1.CharacterVampire, as: 'CharacterVampire' }
            ]
        });
        if (!activeMission) {
            return res.status(404).json({ error: 'Active mission not found' });
        }
        if (activeMission.status !== 'IN_PROGRESS') {
            return res.status(400).json({ error: 'Mission is already resolved' });
        }
        if (new Date() < new Date(activeMission.expiresAt)) {
            return res.status(400).json({ error: 'Mission time has not expired yet' });
        }
        const character = activeMission.CharacterVampire;
        const missionDef = activeMission.DefinitionMissionIdle;
        // VERY BASIC RESOLUTION LOGIC FOR NOW:
        // 100% success rate for testing purposes.
        // In the future: cross-reference character stats with baseDifficulty.
        // Apply Rewards
        const rewards = missionDef.rewardsJson || {};
        let updates = [];
        if (rewards.fome_mod) {
            character.hunger = Math.max(0, character.hunger + rewards.fome_mod);
            updates.push(`Fome reduzida para ${character.hunger}.`);
        }
        if (rewards.xp) {
            character.experienceTotal += rewards.xp;
            updates.push(`Ganhou ${rewards.xp} XP.`);
        }
        // Check if we unlock location
        if (rewards.unlock_location_id) {
            // Logic to insert into CharacterKnownLocation goes here
            // updates.push('Novo bairro descoberto!');
        }
        await character.save();
        activeMission.status = 'COMPLETED';
        await activeMission.save();
        return res.status(200).json({
            success: true,
            message: 'Missão concluída com sucesso!',
            logs: updates,
            character
        });
    }
    catch (error) {
        console.error('Error resolving mission:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.resolveMission = resolveMission;
