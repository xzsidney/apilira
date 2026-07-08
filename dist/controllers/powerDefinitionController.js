"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePowerDefinition = exports.updatePowerDefinition = exports.createPowerDefinition = exports.getPowerDefinitions = void 0;
const powerSchemas_1 = require("../schemas/powerSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getPowerDefinitions = async (req, res) => {
    try {
        const { type } = req.query;
        let whereClause = {};
        if (type) {
            whereClause = {
                gameStyle: { in: [String(type), "UNIVERSAL"] }
            };
        }
        const definitions = await models_1.PowerDefinition.findAll({
            where: whereClause,
            include: [{ model: models_1.PowerLevelDefinition, as: 'powerLevels' }]
        });
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições." });
    }
};
exports.getPowerDefinitions = getPowerDefinitions;
const createPowerDefinition = async (req, res) => {
    try {
        const data = powerSchemas_1.powerDefinitionSchema.parse(req.body);
        const existing = await models_1.PowerDefinition.findOne({
            where: { name: data.name, gameStyle: data.gameStyle }
        });
        if (existing) {
            res.status(400).json({ error: "Registro com este nome e sistema já existe." });
            return;
        }
        const { powerLevels, ...defData } = data;
        const newDef = await models_1.PowerDefinition.create({
            data: {
                ...defData,
                powerLevels: {
                    create: powerLevels || []
                }
            },
            include: [{ model: models_1.PowerLevelDefinition, as: 'powerLevels' }]
        });
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
exports.createPowerDefinition = createPowerDefinition;
const updatePowerDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = powerSchemas_1.powerDefinitionSchema.partial().parse(req.body);
        const { powerLevels, ...defData } = data;
        // To properly update, we'll just update the top level fields. Updating nested array is complex and beyond simple CRUD here, but could be added.
        const updatedDef = await models_1.PowerDefinition.update(data, { where: { id } });
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
exports.updatePowerDefinition = updatePowerDefinition;
const deletePowerDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.PowerDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar." });
    }
};
exports.deletePowerDefinition = deletePowerDefinition;
