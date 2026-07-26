"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionResonance = exports.updateDefinitionResonance = exports.getDefinitionResonanceById = exports.getAllDefinitionResonances = exports.createDefinitionResonance = void 0;
const models_1 = require("../models");
const createDefinitionResonance = async (req, res) => {
    try {
        const { name, description, disciplines, gameStyle } = req.body;
        const resonance = await models_1.DefinitionResonance.create({ name, description, disciplines, gameStyle });
        res.status(201).json(resonance);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar a Ressonância' });
    }
};
exports.createDefinitionResonance = createDefinitionResonance;
const getAllDefinitionResonances = async (req, res) => {
    try {
        const resonances = await models_1.DefinitionResonance.findAll();
        res.json(resonances);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar as Ressonâncias' });
    }
};
exports.getAllDefinitionResonances = getAllDefinitionResonances;
const getDefinitionResonanceById = async (req, res) => {
    try {
        const { id } = req.params;
        const resonance = await models_1.DefinitionResonance.findByPk(id);
        if (!resonance) {
            return res.status(404).json({ error: 'Ressonância não encontrada' });
        }
        res.json(resonance);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar a Ressonância' });
    }
};
exports.getDefinitionResonanceById = getDefinitionResonanceById;
const updateDefinitionResonance = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, disciplines } = req.body;
        const resonance = await models_1.DefinitionResonance.findByPk(id);
        if (!resonance) {
            return res.status(404).json({ error: 'Ressonância não encontrada' });
        }
        await resonance.update({ name, description, disciplines });
        res.json(resonance);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar a Ressonância' });
    }
};
exports.updateDefinitionResonance = updateDefinitionResonance;
const deleteDefinitionResonance = async (req, res) => {
    try {
        const { id } = req.params;
        const resonance = await models_1.DefinitionResonance.findByPk(id);
        if (!resonance) {
            return res.status(404).json({ error: 'Ressonância não encontrada' });
        }
        await resonance.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir a Ressonância' });
    }
};
exports.deleteDefinitionResonance = deleteDefinitionResonance;
