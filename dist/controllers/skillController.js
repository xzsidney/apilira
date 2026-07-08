"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignCharacterSkill = exports.updateCharacterSkill = exports.assignCharacterSkill = exports.getCharacterSkills = void 0;
const skillSchemas_1 = require("../schemas/skillSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterSkills = async (req, res) => {
    try {
        const { characterId } = req.params;
        const skills = await models_1.CharacterSkill.findAll({
            where: { characterId },
            include: [{ model: models_1.SkillDefinition, as: 'skillDefinition' }],
        });
        res.json(skills);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar habilidades." });
    }
};
exports.getCharacterSkills = getCharacterSkills;
const assignCharacterSkill = async (req, res) => {
    try {
        const { characterId } = req.params;
        const data = skillSchemas_1.characterSkillSchema.parse(req.body);
        const character = await models_1.Character.findByPk(characterId);
        if (!character) {
            res.status(404).json({ error: "Personagem não encontrado." });
            return;
        }
        const skillDef = await models_1.SkillDefinition.findOne({ where: { id: data.skillId } });
        if (!skillDef) {
            res.status(404).json({ error: "Definição de habilidade não encontrada." });
            return;
        }
        // Upsert so if it exists, it updates the value
        const existing = await models_1.CharacterSkill.findOne({
            where: { characterId, skillId: data.skillId }
        });
        if (existing) {
            const updated = await models_1.CharacterSkill.update({
                value: data.value,
                specialty: data.specialty,
                description: data.description
            }, { where: { id: existing.id } });
            res.status(200).json(updated);
            return;
        }
        const charSkill = await models_1.CharacterSkill.create({
            characterId,
            skillId: data.skillId,
            value: data.value,
            specialty: data.specialty,
            description: data.description,
        });
        // Eager loading ignored by create, typically fetched after.;
        res.status(201).json(charSkill);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao associar habilidade." });
        }
    }
};
exports.assignCharacterSkill = assignCharacterSkill;
const updateCharacterSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const data = skillSchemas_1.updateCharacterSkillSchema.parse(req.body);
        const updated = await models_1.CharacterSkill.update(data, { where: { id } });
        res.json(updated);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar habilidade." });
        }
    }
};
exports.updateCharacterSkill = updateCharacterSkill;
const unassignCharacterSkill = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.CharacterSkill.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao desassociar habilidade." });
    }
};
exports.unassignCharacterSkill = unassignCharacterSkill;
