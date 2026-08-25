"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAction = exports.updateAction = exports.createAction = exports.deleteMission = exports.updateMission = exports.createMission = exports.getMissionDetail = exports.listMissions = void 0;
const sequelize_1 = require("sequelize");
const models_1 = require("../models");
// ==================== MISSÕES / INCURSÕES ====================
const listMissions = async (req, res) => {
    try {
        const userId = req.userId;
        const whereCondition = userId ? { [sequelize_1.Op.or]: [{ userId }, { userId: null }] } : {};
        const missions = await models_1.DefinitionMissionIdle.findAll({
            where: whereCondition,
            include: [
                {
                    model: models_1.DefinitionMissionIdleAction,
                    as: "Actions"
                }
            ],
            order: [["createdAt", "DESC"]]
        });
        return res.status(200).json(missions);
    }
    catch (error) {
        console.error("Erro ao listar missões do GM:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.listMissions = listMissions;
const getMissionDetail = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const whereCondition = userId ? { id, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } : { id };
        const mission = await models_1.DefinitionMissionIdle.findOne({
            where: whereCondition,
            include: [
                {
                    model: models_1.DefinitionMissionIdleAction,
                    as: "Actions"
                }
            ],
            order: [[{ model: models_1.DefinitionMissionIdleAction, as: "Actions" }, "stepOrder", "ASC"]]
        });
        if (!mission) {
            return res.status(404).json({ error: "Missão não encontrada" });
        }
        return res.status(200).json(mission);
    }
    catch (error) {
        console.error("Erro ao buscar detalhes da missão:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.getMissionDetail = getMissionDetail;
const createMission = async (req, res) => {
    try {
        const { title, description, durationMinutes, baseDifficulty, category, allowedRequirements, rewardsJson, penaltiesJson, maxCompletions } = req.body;
        const userId = req.userId;
        if (!title || !description || durationMinutes === undefined) {
            return res.status(400).json({ error: "Título, descrição e duração em minutos são obrigatórios" });
        }
        const mission = await models_1.DefinitionMissionIdle.create({
            title,
            description,
            durationMinutes: parseInt(durationMinutes, 10) || 5,
            baseDifficulty: baseDifficulty ? parseInt(baseDifficulty, 10) : 6,
            category: category || "OPERATION",
            allowedRequirements: allowedRequirements || {},
            rewardsJson: rewardsJson || {},
            penaltiesJson: penaltiesJson || {},
            maxCompletions: maxCompletions !== undefined && maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null,
            userId
        });
        return res.status(201).json(mission);
    }
    catch (error) {
        console.error("Erro ao criar missão:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.createMission = createMission;
const updateMission = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, durationMinutes, baseDifficulty, category, allowedRequirements, rewardsJson, penaltiesJson, maxCompletions } = req.body;
        const userId = req.userId;
        const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";
        const mission = isLeadMaster
            ? await models_1.DefinitionMissionIdle.findByPk(id)
            : await models_1.DefinitionMissionIdle.findOne({ where: { id, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } });
        if (!mission) {
            return res.status(404).json({ error: "Missão não encontrada" });
        }
        mission.title = title ?? mission.title;
        mission.description = description ?? mission.description;
        mission.durationMinutes = durationMinutes !== undefined ? parseInt(durationMinutes, 10) : mission.durationMinutes;
        mission.baseDifficulty = baseDifficulty !== undefined ? parseInt(baseDifficulty, 10) : mission.baseDifficulty;
        mission.category = category ?? mission.category;
        mission.allowedRequirements = allowedRequirements !== undefined ? allowedRequirements : mission.allowedRequirements;
        mission.rewardsJson = rewardsJson !== undefined ? rewardsJson : mission.rewardsJson;
        mission.penaltiesJson = penaltiesJson !== undefined ? penaltiesJson : mission.penaltiesJson;
        mission.maxCompletions = maxCompletions !== undefined ? (maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null) : mission.maxCompletions;
        await mission.save();
        return res.status(200).json(mission);
    }
    catch (error) {
        console.error("Erro ao atualizar missão:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.updateMission = updateMission;
const deleteMission = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";
        const mission = isLeadMaster
            ? await models_1.DefinitionMissionIdle.findByPk(id)
            : await models_1.DefinitionMissionIdle.findOne({ where: { id, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } });
        if (!mission) {
            return res.status(404).json({ error: "Missão não encontrada" });
        }
        // Remove as ações ligadas a esta missão
        await models_1.DefinitionMissionIdleAction.destroy({ where: { missionId: id } });
        await mission.destroy();
        return res.status(200).json({ message: "Missão excluída com sucesso" });
    }
    catch (error) {
        console.error("Erro ao excluir missão:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.deleteMission = deleteMission;
// ==================== AÇÕES / ETAPAS DA MISSÃO ====================
const createAction = async (req, res) => {
    try {
        const { missionId } = req.params;
        const { stepOrder, name, description, difficulty, attributeReq, skillReq, successText, failureText } = req.body;
        const userId = req.userId;
        const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";
        if (!name || !description || !successText || !failureText) {
            return res.status(400).json({ error: "Nome, descrição e textos de desfecho são obrigatórios" });
        }
        const mission = isLeadMaster
            ? await models_1.DefinitionMissionIdle.findByPk(missionId)
            : await models_1.DefinitionMissionIdle.findOne({ where: { id: missionId, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } });
        if (!mission) {
            return res.status(404).json({ error: "Missão não encontrada ou não pertence a este narrador" });
        }
        // Se stepOrder não foi fornecido, calcula o próximo número
        let order = stepOrder;
        if (order === undefined) {
            const count = await models_1.DefinitionMissionIdleAction.count({ where: { missionId } });
            order = count + 1;
        }
        const action = await models_1.DefinitionMissionIdleAction.create({
            missionId,
            stepOrder: parseInt(order, 10),
            name,
            description,
            difficulty: difficulty ? parseInt(difficulty, 10) : 6,
            attributeReq: attributeReq || null,
            skillReq: skillReq || null,
            successText,
            failureText
        });
        return res.status(201).json(action);
    }
    catch (error) {
        console.error("Erro ao criar etapa da missão:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.createAction = createAction;
const updateAction = async (req, res) => {
    try {
        const { actionId } = req.params;
        const { stepOrder, name, description, difficulty, attributeReq, skillReq, successText, failureText } = req.body;
        const userId = req.userId;
        const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";
        const action = await models_1.DefinitionMissionIdleAction.findByPk(actionId);
        if (!action) {
            return res.status(404).json({ error: "Etapa não encontrada" });
        }
        const mission = isLeadMaster
            ? await models_1.DefinitionMissionIdle.findByPk(action.missionId)
            : await models_1.DefinitionMissionIdle.findOne({ where: { id: action.missionId, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } });
        if (!mission) {
            return res.status(403).json({ error: "Permissão negada para editar esta etapa" });
        }
        action.stepOrder = stepOrder !== undefined ? parseInt(stepOrder, 10) : action.stepOrder;
        action.name = name ?? action.name;
        action.description = description ?? action.description;
        action.difficulty = difficulty !== undefined ? parseInt(difficulty, 10) : action.difficulty;
        action.attributeReq = attributeReq !== undefined ? (attributeReq || null) : action.attributeReq;
        action.skillReq = skillReq !== undefined ? (skillReq || null) : action.skillReq;
        action.successText = successText ?? action.successText;
        action.failureText = failureText ?? action.failureText;
        await action.save();
        return res.status(200).json(action);
    }
    catch (error) {
        console.error("Erro ao atualizar etapa:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.updateAction = updateAction;
const deleteAction = async (req, res) => {
    try {
        const { actionId } = req.params;
        const userId = req.userId;
        const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";
        const action = await models_1.DefinitionMissionIdleAction.findByPk(actionId);
        if (!action) {
            return res.status(404).json({ error: "Etapa não encontrada" });
        }
        const mission = isLeadMaster
            ? await models_1.DefinitionMissionIdle.findByPk(action.missionId)
            : await models_1.DefinitionMissionIdle.findOne({ where: { id: action.missionId, [sequelize_1.Op.or]: [{ userId }, { userId: null }] } });
        if (!mission) {
            return res.status(403).json({ error: "Permissão negada para excluir esta etapa" });
        }
        await action.destroy();
        return res.status(200).json({ message: "Etapa excluída com sucesso" });
    }
    catch (error) {
        console.error("Erro ao excluir etapa:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.deleteAction = deleteAction;
