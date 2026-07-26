"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionAttribute = exports.updateDefinitionAttribute = exports.getDefinitionAttributeById = exports.getAllDefinitionAttributes = exports.createDefinitionAttribute = void 0;
const models_1 = require("../models");
const createDefinitionAttribute = async (req, res) => {
    try {
        const { name, description, type, gameStyle } = req.body;
        const attribute = await models_1.DefinitionAttribute.create({ name, description, type, gameStyle });
        res.status(201).json(attribute);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o atributo base' });
    }
};
exports.createDefinitionAttribute = createDefinitionAttribute;
const getAllDefinitionAttributes = async (req, res) => {
    try {
        const attributes = await models_1.DefinitionAttribute.findAll();
        res.json(attributes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os atributos base' });
    }
};
exports.getAllDefinitionAttributes = getAllDefinitionAttributes;
const getDefinitionAttributeById = async (req, res) => {
    try {
        const { id } = req.params;
        const attribute = await models_1.DefinitionAttribute.findByPk(id);
        if (!attribute) {
            return res.status(404).json({ error: 'Atributo não encontrado' });
        }
        res.json(attribute);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o atributo base' });
    }
};
exports.getDefinitionAttributeById = getDefinitionAttributeById;
const updateDefinitionAttribute = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, type, gameStyle } = req.body;
        const attribute = await models_1.DefinitionAttribute.findByPk(id);
        if (!attribute) {
            return res.status(404).json({ error: 'Atributo não encontrado' });
        }
        await attribute.update({ name, description, type, gameStyle });
        res.json(attribute);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o atributo base' });
    }
};
exports.updateDefinitionAttribute = updateDefinitionAttribute;
const deleteDefinitionAttribute = async (req, res) => {
    try {
        const { id } = req.params;
        const attribute = await models_1.DefinitionAttribute.findByPk(id);
        if (!attribute) {
            return res.status(404).json({ error: 'Atributo não encontrado' });
        }
        await attribute.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o atributo base' });
    }
};
exports.deleteDefinitionAttribute = deleteDefinitionAttribute;
