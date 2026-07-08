"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttributeDefinition = exports.updateAttributeDefinition = exports.createAttributeDefinition = exports.getAttributeDefinitions = void 0;
const attributeSchemas_1 = require("../schemas/attributeSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getAttributeDefinitions = async (req, res) => {
    try {
        const { type } = req.query;
        const where = type ? { type: String(type) } : {};
        const definitions = await models_1.AttributeDefinition.findAll({ where });
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições de atributos." });
    }
};
exports.getAttributeDefinitions = getAttributeDefinitions;
const createAttributeDefinition = async (req, res) => {
    try {
        const data = attributeSchemas_1.attributeDefinitionSchema.parse(req.body);
        // Check if already exists
        const existing = await models_1.AttributeDefinition.findOne({
            where: { name: data.name, type: data.type }
        });
        if (existing) {
            res.status(400).json({ error: "Atributo com este nome e tipo já existe." });
            return;
        }
        const newDef = await models_1.AttributeDefinition.create(data);
        res.status(201).json(newDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar definição de atributo." });
        }
    }
};
exports.createAttributeDefinition = createAttributeDefinition;
const updateAttributeDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = attributeSchemas_1.attributeDefinitionSchema.partial().parse(req.body);
        await models_1.AttributeDefinition.update(data, { where: { id } });
        const updatedDef = await models_1.AttributeDefinition.findByPk(id);
        res.json(updatedDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar definição de atributo." });
        }
    }
};
exports.updateAttributeDefinition = updateAttributeDefinition;
const deleteAttributeDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.AttributeDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar definição de atributo." });
    }
};
exports.deleteAttributeDefinition = deleteAttributeDefinition;
