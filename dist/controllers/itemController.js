"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignCharacterItem = exports.updateCharacterItem = exports.assignCharacterItem = exports.getCharacterItems = void 0;
const itemSchemas_1 = require("../schemas/itemSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterItems = async (req, res) => {
    try {
        const { characterId } = req.params;
        const items = await models_1.CharacterItem.findAll({
            where: { characterId },
            include: [{ model: models_1.ItemDefinition, as: 'itemDefinition' }],
        });
        res.json(items);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar itens do personagem." });
    }
};
exports.getCharacterItems = getCharacterItems;
const assignCharacterItem = async (req, res) => {
    try {
        const { characterId } = req.params;
        const data = itemSchemas_1.characterItemSchema.parse(req.body);
        const character = await models_1.Character.findByPk(characterId);
        if (!character) {
            res.status(404).json({ error: "Personagem não encontrado." });
            return;
        }
        const itemDef = await models_1.ItemDefinition.findByPk(data.itemId);
        if (!itemDef) {
            res.status(404).json({ error: "Definição de item não encontrada." });
            return;
        }
        // Check if the character already has this item
        const existing = await models_1.CharacterItem.findOne({
            where: { characterId, itemId: data.itemId }
        });
        if (existing) {
            // Just increment quantity if they re-add the same item
            await models_1.CharacterItem.update({ quantity: existing.quantity + data.quantity }, { where: { id: existing.id } });
            const updated = await models_1.CharacterItem.findByPk(existing.id, {
                include: [{ model: models_1.ItemDefinition, as: 'itemDefinition' }]
            });
            res.status(200).json(updated);
            return;
        }
        const charItem = await models_1.CharacterItem.create({
            characterId,
            itemId: data.itemId,
            quantity: data.quantity,
            description: data.description,
        });
        // Sequelize create doesn't support eager loading, so we fetch it again
        const charItemWithDef = await models_1.CharacterItem.findByPk(charItem.id, {
            include: [{ model: models_1.ItemDefinition, as: 'itemDefinition' }]
        });
        res.status(201).json(charItemWithDef);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao associar item ao personagem." });
        }
    }
};
exports.assignCharacterItem = assignCharacterItem;
const updateCharacterItem = async (req, res) => {
    try {
        const { id } = req.params;
        const data = itemSchemas_1.updateCharacterItemSchema.parse(req.body);
        await models_1.CharacterItem.update(data, { where: { id } });
        const updated = await models_1.CharacterItem.findByPk(id, {
            include: [{ model: models_1.ItemDefinition, as: 'itemDefinition' }]
        });
        res.json(updated);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ errors: error.errors });
        }
        else {
            console.error(error);
            res.status(500).json({ error: "Erro ao atualizar item do personagem." });
        }
    }
};
exports.updateCharacterItem = updateCharacterItem;
const unassignCharacterItem = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.CharacterItem.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao desassociar item." });
    }
};
exports.unassignCharacterItem = unassignCharacterItem;
