"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStatusDefinition = exports.updateStatusDefinition = exports.createStatusDefinition = exports.getStatusDefinitions = void 0;
const models_1 = require("../models");
const statusSchemas_1 = require("../schemas/statusSchemas");
const zod_1 = require("zod");
const sequelize_1 = require("sequelize");
const getStatusDefinitions = async (req, res) => {
    try {
        const { type } = req.query;
        let whereClause = {};
        if (type) {
            whereClause = {
                gameStyle: { [sequelize_1.Op.in]: [String(type), "UNIVERSAL"] }
            };
        }
        const definitions = await models_1.StatusDefinition.findAll({ where: whereClause });
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições." });
    }
};
exports.getStatusDefinitions = getStatusDefinitions;
const createStatusDefinition = async (req, res) => {
    try {
        const data = statusSchemas_1.statusDefinitionSchema.parse(req.body);
        const existing = await models_1.StatusDefinition.findOne({
            where: { name: data.name, gameStyle: data.gameStyle }
        });
        if (existing) {
            res.status(400).json({ error: "Registro com este nome e sistema já existe." });
            return;
        }
        const newDef = await models_1.StatusDefinition.create(data);
        res.status(201).json(newDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar." });
        }
    }
};
exports.createStatusDefinition = createStatusDefinition;
const updateStatusDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = statusSchemas_1.statusDefinitionSchema.partial().parse(req.body);
        await models_1.StatusDefinition.update(data, {
            where: { id },
        });
        const updatedDef = await models_1.StatusDefinition.findByPk(id);
        res.json(updatedDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar." });
        }
    }
};
exports.updateStatusDefinition = updateStatusDefinition;
const deleteStatusDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.StatusDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar." });
    }
};
exports.deleteStatusDefinition = deleteStatusDefinition;
