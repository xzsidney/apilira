"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMeritFlawDefinition = exports.updateMeritFlawDefinition = exports.createMeritFlawDefinition = exports.getMeritFlawDefinitions = void 0;
const meritFlawSchemas_1 = require("../schemas/meritFlawSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getMeritFlawDefinitions = async (req, res) => {
    try {
        const { type } = req.query; // optional gameStyle filter like "VAMPIRE", "WEREWOLF"
        let whereClause = {};
        if (type) {
            whereClause = {
                gameStyle: { in: [String(type), "UNIVERSAL"] }
            };
        }
        const definitions = await models_1.MeritFlawDefinition.findAll({ where: whereClause });
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições." });
    }
};
exports.getMeritFlawDefinitions = getMeritFlawDefinitions;
const createMeritFlawDefinition = async (req, res) => {
    try {
        const data = meritFlawSchemas_1.meritFlawDefinitionSchema.parse(req.body);
        const existing = await models_1.MeritFlawDefinition.findOne({
            where: { name: data.name, gameStyle: data.gameStyle, type: data.type }
        });
        if (existing) {
            res.status(400).json({ error: "Registro com este nome, tipo e sistema já existe." });
            return;
        }
        const newDef = await models_1.MeritFlawDefinition.create(data);
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
exports.createMeritFlawDefinition = createMeritFlawDefinition;
const updateMeritFlawDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = meritFlawSchemas_1.meritFlawDefinitionSchema.partial().parse(req.body);
        await models_1.MeritFlawDefinition.update(data, { where: { id } });
        const updatedDef = await models_1.MeritFlawDefinition.findByPk(id);
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
exports.updateMeritFlawDefinition = updateMeritFlawDefinition;
const deleteMeritFlawDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.MeritFlawDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar." });
    }
};
exports.deleteMeritFlawDefinition = deleteMeritFlawDefinition;
