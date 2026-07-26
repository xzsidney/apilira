"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionClan = exports.updateDefinitionClan = exports.getDefinitionClanById = exports.getAllDefinitionClans = exports.createDefinitionClan = void 0;
const models_1 = require("../models");
const createDefinitionClan = async (req, res) => {
    try {
        const { name, description, sect, weakness, disciplines, gameStyle } = req.body;
        const clan = await models_1.DefinitionClan.create({ name, description, sect, weakness, disciplines, gameStyle });
        res.status(201).json(clan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o clã' });
    }
};
exports.createDefinitionClan = createDefinitionClan;
const getAllDefinitionClans = async (req, res) => {
    try {
        const clans = await models_1.DefinitionClan.findAll();
        res.json(clans);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os clãs' });
    }
};
exports.getAllDefinitionClans = getAllDefinitionClans;
const getDefinitionClanById = async (req, res) => {
    try {
        const { id } = req.params;
        const clan = await models_1.DefinitionClan.findByPk(id);
        if (!clan) {
            return res.status(404).json({ error: 'Clã não encontrado' });
        }
        res.json(clan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o clã' });
    }
};
exports.getDefinitionClanById = getDefinitionClanById;
const updateDefinitionClan = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, sect, weakness, disciplines } = req.body;
        const clan = await models_1.DefinitionClan.findByPk(id);
        if (!clan) {
            return res.status(404).json({ error: 'Clã não encontrado' });
        }
        await clan.update({ name, description, sect, weakness, disciplines });
        res.json(clan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o clã' });
    }
};
exports.updateDefinitionClan = updateDefinitionClan;
const deleteDefinitionClan = async (req, res) => {
    try {
        const { id } = req.params;
        const clan = await models_1.DefinitionClan.findByPk(id);
        if (!clan) {
            return res.status(404).json({ error: 'Clã não encontrado' });
        }
        await clan.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o clã' });
    }
};
exports.deleteDefinitionClan = deleteDefinitionClan;
