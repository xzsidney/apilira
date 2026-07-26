"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionBackground = exports.updateDefinitionBackground = exports.getDefinitionBackgroundById = exports.getAllDefinitionBackgrounds = exports.createDefinitionBackground = void 0;
const models_1 = require("../models");
const createDefinitionBackground = async (req, res) => {
    try {
        const { name, description, gameStyle } = req.body;
        const background = await models_1.DefinitionBackground.create({ name, description, gameStyle });
        res.status(201).json(background);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o antecedente base' });
    }
};
exports.createDefinitionBackground = createDefinitionBackground;
const getAllDefinitionBackgrounds = async (req, res) => {
    try {
        const backgrounds = await models_1.DefinitionBackground.findAll();
        res.json(backgrounds);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os antecedentes base' });
    }
};
exports.getAllDefinitionBackgrounds = getAllDefinitionBackgrounds;
const getDefinitionBackgroundById = async (req, res) => {
    try {
        const { id } = req.params;
        const background = await models_1.DefinitionBackground.findByPk(id);
        if (!background) {
            return res.status(404).json({ error: 'Antecedente não encontrado' });
        }
        res.json(background);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o antecedente base' });
    }
};
exports.getDefinitionBackgroundById = getDefinitionBackgroundById;
const updateDefinitionBackground = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, gameStyle } = req.body;
        const background = await models_1.DefinitionBackground.findByPk(id);
        if (!background) {
            return res.status(404).json({ error: 'Antecedente não encontrado' });
        }
        await background.update({ name, description, gameStyle });
        res.json(background);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o antecedente base' });
    }
};
exports.updateDefinitionBackground = updateDefinitionBackground;
const deleteDefinitionBackground = async (req, res) => {
    try {
        const { id } = req.params;
        const background = await models_1.DefinitionBackground.findByPk(id);
        if (!background) {
            return res.status(404).json({ error: 'Antecedente não encontrado' });
        }
        await background.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o antecedente base' });
    }
};
exports.deleteDefinitionBackground = deleteDefinitionBackground;
