"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionBloodPotency = exports.updateDefinitionBloodPotency = exports.getDefinitionBloodPotencyById = exports.getAllDefinitionBloodPotencies = exports.createDefinitionBloodPotency = void 0;
const models_1 = require("../models");
const createDefinitionBloodPotency = async (req, res) => {
    try {
        const { level, bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty, gameStyle } = req.body;
        // Verifica se já existe esse nível
        const existing = await models_1.DefinitionBloodPotency.findOne({ where: { level } });
        if (existing) {
            return res.status(400).json({ error: 'Nível de Potência de Sangue já existe' });
        }
        const bloodPotency = await models_1.DefinitionBloodPotency.create({
            level, bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty, gameStyle
        });
        res.status(201).json(bloodPotency);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a Potência de Sangue' });
    }
};
exports.createDefinitionBloodPotency = createDefinitionBloodPotency;
const getAllDefinitionBloodPotencies = async (req, res) => {
    try {
        const potencies = await models_1.DefinitionBloodPotency.findAll({
            order: [['level', 'ASC']]
        });
        res.json(potencies);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as Potências de Sangue' });
    }
};
exports.getAllDefinitionBloodPotencies = getAllDefinitionBloodPotencies;
const getDefinitionBloodPotencyById = async (req, res) => {
    try {
        const { id } = req.params;
        const potency = await models_1.DefinitionBloodPotency.findByPk(id);
        if (!potency) {
            return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
        }
        res.json(potency);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar a Potência de Sangue' });
    }
};
exports.getDefinitionBloodPotencyById = getDefinitionBloodPotencyById;
const updateDefinitionBloodPotency = async (req, res) => {
    try {
        const { id } = req.params;
        const { bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty } = req.body;
        const potency = await models_1.DefinitionBloodPotency.findByPk(id);
        if (!potency) {
            return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
        }
        await potency.update({ bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty });
        res.json(potency);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a Potência de Sangue' });
    }
};
exports.updateDefinitionBloodPotency = updateDefinitionBloodPotency;
const deleteDefinitionBloodPotency = async (req, res) => {
    try {
        const { id } = req.params;
        const potency = await models_1.DefinitionBloodPotency.findByPk(id);
        if (!potency) {
            return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
        }
        await potency.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a Potência de Sangue' });
    }
};
exports.deleteDefinitionBloodPotency = deleteDefinitionBloodPotency;
