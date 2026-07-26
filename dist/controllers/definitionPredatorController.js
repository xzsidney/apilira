"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionPredator = exports.updateDefinitionPredator = exports.getDefinitionPredatorById = exports.getAllDefinitionPredators = exports.createDefinitionPredator = void 0;
const models_1 = require("../models");
const createDefinitionPredator = async (req, res) => {
    try {
        const { name, description, huntingPool, modifiers, gameStyle } = req.body;
        const predator = await models_1.DefinitionPredator.create({ name, description, huntingPool, modifiers, gameStyle });
        res.status(201).json(predator);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o Tipo de Predador' });
    }
};
exports.createDefinitionPredator = createDefinitionPredator;
const getAllDefinitionPredators = async (req, res) => {
    try {
        const predators = await models_1.DefinitionPredator.findAll();
        res.json(predators);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os Tipos de Predador' });
    }
};
exports.getAllDefinitionPredators = getAllDefinitionPredators;
const getDefinitionPredatorById = async (req, res) => {
    try {
        const { id } = req.params;
        const predator = await models_1.DefinitionPredator.findByPk(id);
        if (!predator) {
            return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
        }
        res.json(predator);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o Tipo de Predador' });
    }
};
exports.getDefinitionPredatorById = getDefinitionPredatorById;
const updateDefinitionPredator = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, huntingPool, modifiers } = req.body;
        const predator = await models_1.DefinitionPredator.findByPk(id);
        if (!predator) {
            return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
        }
        await predator.update({ name, description, huntingPool, modifiers });
        res.json(predator);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o Tipo de Predador' });
    }
};
exports.updateDefinitionPredator = updateDefinitionPredator;
const deleteDefinitionPredator = async (req, res) => {
    try {
        const { id } = req.params;
        const predator = await models_1.DefinitionPredator.findByPk(id);
        if (!predator) {
            return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
        }
        await predator.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o Tipo de Predador' });
    }
};
exports.deleteDefinitionPredator = deleteDefinitionPredator;
