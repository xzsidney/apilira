"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItemDefinition = exports.updateItemDefinition = exports.createItemDefinition = exports.getItemDefinitions = void 0;
const itemSchemas_1 = require("../schemas/itemSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getItemDefinitions = async (req, res) => {
    try {
        const definitions = await models_1.ItemDefinition.findAll();
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições de itens." });
    }
};
exports.getItemDefinitions = getItemDefinitions;
const createItemDefinition = async (req, res) => {
    try {
        const data = itemSchemas_1.itemDefinitionSchema.parse(req.body);
        // Check if already exists
        const existing = await models_1.ItemDefinition.findOne({
            where: { name: data.name }
        });
        if (existing) {
            res.status(400).json({ error: "Item com este nome já existe." });
            return;
        }
        const newDef = await models_1.ItemDefinition.create(data);
        res.status(201).json(newDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar definição de item." });
        }
    }
};
exports.createItemDefinition = createItemDefinition;
const updateItemDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = itemSchemas_1.itemDefinitionSchema.partial().parse(req.body);
        await models_1.ItemDefinition.update(data, { where: { id } });
        const updatedDef = await models_1.ItemDefinition.findByPk(id);
        res.json(updatedDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar definição de item." });
        }
    }
};
exports.updateItemDefinition = updateItemDefinition;
const deleteItemDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.ItemDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar definição de item." });
    }
};
exports.deleteItemDefinition = deleteItemDefinition;
