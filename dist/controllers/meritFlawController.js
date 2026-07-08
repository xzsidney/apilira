"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignCharacterMeritFlaw = exports.updateCharacterMeritFlaw = exports.assignCharacterMeritFlaw = exports.getCharacterMeritFlaws = void 0;
const meritFlawSchemas_1 = require("../schemas/meritFlawSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterMeritFlaws = async (req, res) => {
    try {
        const { characterId } = req.params;
        const records = await models_1.CharacterMeritFlaw.findAll({
            where: { characterId },
            include: [{ model: models_1.MeritFlawDefinition, as: 'meritFlawDefinition' }],
        });
        res.json(records);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar registros." });
    }
};
exports.getCharacterMeritFlaws = getCharacterMeritFlaws;
const assignCharacterMeritFlaw = async (req, res) => {
    try {
        const { characterId } = req.params;
        const data = meritFlawSchemas_1.characterMeritFlawSchema.parse(req.body);
        const character = await models_1.Character.findByPk(characterId);
        if (!character) {
            res.status(404).json({ error: "Personagem não encontrado." });
            return;
        }
        const def = await models_1.MeritFlawDefinition.findOne({ where: { id: data.meritFlawId } });
        if (!def) {
            res.status(404).json({ error: "Definição não encontrada." });
            return;
        }
        const existing = await models_1.CharacterMeritFlaw.findOne({
            where: { characterId, meritFlawId: data.meritFlawId }
        });
        if (existing) {
            const updated = await models_1.CharacterMeritFlaw.update({
                points: data.points,
                description: data.description
            }, { where: { id: existing.id } });
            res.status(200).json(updated);
            return;
        }
        const record = await models_1.CharacterMeritFlaw.create({
            characterId,
            meritFlawId: data.meritFlawId,
            points: data.points,
            description: data.description,
        });
        // Eager loading ignored by create, typically fetched after.;
        res.status(201).json(record);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao associar." });
        }
    }
};
exports.assignCharacterMeritFlaw = assignCharacterMeritFlaw;
const updateCharacterMeritFlaw = async (req, res) => {
    try {
        const { id } = req.params;
        const data = meritFlawSchemas_1.updateCharacterMeritFlawSchema.parse(req.body);
        const updated = await models_1.CharacterMeritFlaw.update(data, { where: { id } });
        res.json(updated);
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
exports.updateCharacterMeritFlaw = updateCharacterMeritFlaw;
const unassignCharacterMeritFlaw = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.CharacterMeritFlaw.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao desassociar." });
    }
};
exports.unassignCharacterMeritFlaw = unassignCharacterMeritFlaw;
