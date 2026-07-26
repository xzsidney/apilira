"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionArchetype = exports.updateDefinitionArchetype = exports.getDefinitionArchetypeById = exports.getAllDefinitionArchetypes = exports.createDefinitionArchetype = void 0;
const models_1 = require("../models");
const createDefinitionArchetype = async (req, res) => {
    try {
        const { name, description, gameStyle } = req.body;
        const archetype = await models_1.DefinitionArchetype.create({ name, description, gameStyle });
        res.status(201).json(archetype);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o arquétipo base' });
    }
};
exports.createDefinitionArchetype = createDefinitionArchetype;
const getAllDefinitionArchetypes = async (req, res) => {
    try {
        const archetypes = await models_1.DefinitionArchetype.findAll();
        res.json(archetypes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os arquétipos base' });
    }
};
exports.getAllDefinitionArchetypes = getAllDefinitionArchetypes;
const getDefinitionArchetypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const archetype = await models_1.DefinitionArchetype.findByPk(id);
        if (!archetype) {
            return res.status(404).json({ error: 'Arquétipo não encontrado' });
        }
        res.json(archetype);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o arquétipo base' });
    }
};
exports.getDefinitionArchetypeById = getDefinitionArchetypeById;
const updateDefinitionArchetype = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, gameStyle } = req.body;
        const archetype = await models_1.DefinitionArchetype.findByPk(id);
        if (!archetype) {
            return res.status(404).json({ error: 'Arquétipo não encontrado' });
        }
        await archetype.update({ name, description, gameStyle });
        res.json(archetype);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o arquétipo base' });
    }
};
exports.updateDefinitionArchetype = updateDefinitionArchetype;
const deleteDefinitionArchetype = async (req, res) => {
    try {
        const { id } = req.params;
        const archetype = await models_1.DefinitionArchetype.findByPk(id);
        if (!archetype) {
            return res.status(404).json({ error: 'Arquétipo não encontrado' });
        }
        await archetype.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o arquétipo base' });
    }
};
exports.deleteDefinitionArchetype = deleteDefinitionArchetype;
