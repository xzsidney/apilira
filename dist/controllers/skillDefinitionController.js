"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSkillDefinition = exports.updateSkillDefinition = exports.createSkillDefinition = exports.getSkillDefinitions = void 0;
const skillSchemas_1 = require("../schemas/skillSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getSkillDefinitions = async (req, res) => {
    try {
        const { type } = req.query;
        // Allow fetching UNIVERSAL skills plus specific type (e.g. VAMPIRE)
        let whereClause = {};
        if (type) {
            whereClause = {
                type: { in: [String(type), "UNIVERSAL"] }
            };
        }
        const definitions = await models_1.SkillDefinition.findAll({ where: whereClause });
        res.json(definitions);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar definições de habilidades." });
    }
};
exports.getSkillDefinitions = getSkillDefinitions;
const createSkillDefinition = async (req, res) => {
    try {
        const data = skillSchemas_1.skillDefinitionSchema.parse(req.body);
        const existing = await models_1.SkillDefinition.findOne({
            where: { name: data.name, type: data.type }
        });
        if (existing) {
            res.status(400).json({ error: "Habilidade com este nome e tipo já existe." });
            return;
        }
        const newDef = await models_1.SkillDefinition.create(data);
        res.status(201).json(newDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao criar definição de habilidade." });
        }
    }
};
exports.createSkillDefinition = createSkillDefinition;
const updateSkillDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const data = skillSchemas_1.skillDefinitionSchema.partial().parse(req.body);
        await models_1.SkillDefinition.update(data, { where: { id } });
        const updatedDef = await models_1.SkillDefinition.findByPk(id);
        res.json(updatedDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar definição de habilidade." });
        }
    }
};
exports.updateSkillDefinition = updateSkillDefinition;
const deleteSkillDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.SkillDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao deletar definição de habilidade." });
    }
};
exports.deleteSkillDefinition = deleteSkillDefinition;
