"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignCharacterAttribute = exports.updateCharacterAttribute = exports.assignCharacterAttribute = exports.getCharacterAttributes = void 0;
const attributeSchemas_1 = require("../schemas/attributeSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterAttributes = async (req, res) => {
    try {
        const { characterId } = req.params;
        const attributes = await models_1.CharacterAttribute.findAll({
            where: { characterId },
            include: [{ model: models_1.AttributeDefinition, as: 'attribute' }],
        });
        res.json(attributes);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar atributos do personagem." });
    }
};
exports.getCharacterAttributes = getCharacterAttributes;
const assignCharacterAttribute = async (req, res) => {
    try {
        const { characterId } = req.params;
        const data = attributeSchemas_1.characterAttributeSchema.parse(req.body);
        // Verify character exists
        const character = await models_1.Character.findByPk(characterId);
        if (!character) {
            res.status(404).json({ error: "Personagem não encontrado." });
            return;
        }
        // Verify attribute definition exists
        const attrDef = await models_1.AttributeDefinition.findOne({ where: { id: data.attributeId } });
        if (!attrDef) {
            res.status(404).json({ error: "Definição de atributo não encontrada." });
            return;
        }
        // Check for existing link
        const existing = await models_1.CharacterAttribute.findOne({
            where: { characterId, attributeId: data.attributeId }
        });
        if (existing) {
            res.status(400).json({ error: "Este atributo já está associado ao personagem." });
            return;
        }
        const charAttr = await models_1.CharacterAttribute.create({
            characterId,
            attributeId: data.attributeId,
            value: data.value,
            specialty: data.specialty,
            description: data.description,
        });
        // Eager loading ignored by create, typically fetched after.;
        res.status(201).json(charAttr);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao associar atributo ao personagem." });
        }
    }
};
exports.assignCharacterAttribute = assignCharacterAttribute;
const updateCharacterAttribute = async (req, res) => {
    try {
        const { id } = req.params; // ID of the CharacterAttribute record
        const data = attributeSchemas_1.updateCharacterAttributeSchema.parse(req.body);
        const updated = await models_1.CharacterAttribute.update(data, { where: { id } });
        res.json(updated);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar atributo do personagem." });
        }
    }
};
exports.updateCharacterAttribute = updateCharacterAttribute;
const unassignCharacterAttribute = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.CharacterAttribute.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao desassociar atributo." });
    }
};
exports.unassignCharacterAttribute = unassignCharacterAttribute;
