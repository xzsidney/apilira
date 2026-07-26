"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionMeritFlaw = exports.updateDefinitionMeritFlaw = exports.getDefinitionMeritFlawById = exports.getAllDefinitionMeritFlaws = exports.createDefinitionMeritFlaw = void 0;
const models_1 = require("../models");
const createDefinitionMeritFlaw = async (req, res) => {
    try {
        const { name, description, type, category, cost, gameStyle } = req.body;
        const meritFlaw = await models_1.DefinitionMeritFlaw.create({ name, description, type, category, cost, gameStyle });
        res.status(201).json(meritFlaw);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a qualidade ou defeito base' });
    }
};
exports.createDefinitionMeritFlaw = createDefinitionMeritFlaw;
const getAllDefinitionMeritFlaws = async (req, res) => {
    try {
        const meritFlaws = await models_1.DefinitionMeritFlaw.findAll();
        res.json(meritFlaws);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as qualidades e defeitos base' });
    }
};
exports.getAllDefinitionMeritFlaws = getAllDefinitionMeritFlaws;
const getDefinitionMeritFlawById = async (req, res) => {
    try {
        const { id } = req.params;
        const meritFlaw = await models_1.DefinitionMeritFlaw.findByPk(id);
        if (!meritFlaw) {
            return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
        }
        res.json(meritFlaw);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar a qualidade ou defeito base' });
    }
};
exports.getDefinitionMeritFlawById = getDefinitionMeritFlawById;
const updateDefinitionMeritFlaw = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, type, category, cost, gameStyle } = req.body;
        const meritFlaw = await models_1.DefinitionMeritFlaw.findByPk(id);
        if (!meritFlaw) {
            return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
        }
        await meritFlaw.update({ name, description, type, category, cost, gameStyle });
        res.json(meritFlaw);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a qualidade ou defeito base' });
    }
};
exports.updateDefinitionMeritFlaw = updateDefinitionMeritFlaw;
const deleteDefinitionMeritFlaw = async (req, res) => {
    try {
        const { id } = req.params;
        const meritFlaw = await models_1.DefinitionMeritFlaw.findByPk(id);
        if (!meritFlaw) {
            return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
        }
        await meritFlaw.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a qualidade ou defeito base' });
    }
};
exports.deleteDefinitionMeritFlaw = deleteDefinitionMeritFlaw;
