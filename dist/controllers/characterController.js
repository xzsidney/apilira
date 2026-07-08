"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCharacter = exports.updateCharacter = exports.getCharacter = exports.listCharacters = exports.createCharacter = void 0;
const characterSchemas_1 = require("../schemas/characterSchemas");
const enums_1 = require("../types/enums");
const models_1 = require("../models");
const characterIncludes = [
    { model: models_1.CharacterAttribute, as: 'attributes', include: ['attributeDefinition'] },
    { model: models_1.CharacterSkill, as: 'skills', include: ['skillDefinition'] },
    { model: models_1.CharacterStatus, as: 'statuses', include: ['statusDefinition'] },
    { model: models_1.CharacterPower, as: 'powers', include: [
            'powerDefinition',
            { model: models_1.CharacterPowerSelection, as: 'selections', include: ['powerLevelDefinition'] }
        ]
    },
    { model: models_1.CharacterMeritFlaw, as: 'meritsFlaws', include: ['meritFlawDefinition'] },
    { model: models_1.CharacterItem, as: 'items', include: ['itemDefinition'] },
    { model: models_1.CharacterBackground, as: 'backgrounds', include: ['backgroundDefinition'] },
    { model: models_1.CharacterHaven, as: 'havens', include: ['havenDefinition'] }
];
// Helper to map GameStyle to its PowerType
const getPowerType = (style) => {
    switch (style) {
        case enums_1.GameStyle.VAMPIRE:
            return enums_1.PowerType.DISCIPLINE;
        case enums_1.GameStyle.WEREWOLF:
            return enums_1.PowerType.GIFT;
        case enums_1.GameStyle.MAGE:
            return enums_1.PowerType.SPHERE;
        case enums_1.GameStyle.HUNTER:
            return enums_1.PowerType.EDGE;
        default:
            return enums_1.PowerType.DISCIPLINE;
    }
};
const createCharacter = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const validated = characterSchemas_1.createCharacterSchema.safeParse(req.body);
        if (!validated.success) {
            return res.status(400).json({ errors: validated.error.errors });
        }
        const { name, gameStyle, isNpc, isTemplate, attributes, skills, statuses, powers, meritsFlaws, items, backgrounds, havens } = validated.data;
        const t = await models_1.sequelize.transaction();
        try {
            const character = await models_1.Character.create({
                name,
                gameStyle,
                isNpc: isNpc ?? false,
                isTemplate: isTemplate ?? false,
                userId: req.userId,
            }, { transaction: t });
            const charId = character.id;
            if (attributes && attributes.length > 0) {
                await models_1.CharacterAttribute.bulkCreate(attributes.map(a => ({
                    characterId: charId,
                    attributeId: a.attributeId,
                    value: a.value || 1,
                    specialty: a.specialty,
                    description: a.description
                })), { transaction: t });
            }
            if (skills && skills.length > 0) {
                await models_1.CharacterSkill.bulkCreate(skills.map(s => ({
                    characterId: charId,
                    skillId: s.skillId,
                    value: s.value,
                    specialty: s.specialty,
                    description: s.description
                })), { transaction: t });
            }
            if (statuses && statuses.length > 0) {
                await models_1.CharacterStatus.bulkCreate(statuses.map(s => ({
                    characterId: charId,
                    statusId: s.statusId,
                    value: s.value
                })), { transaction: t });
            }
            if (powers && powers.length > 0) {
                for (const p of powers) {
                    const cp = await models_1.CharacterPower.create({
                        characterId: charId,
                        powerDefinitionId: p.powerDefinitionId,
                        level: p.level
                    }, { transaction: t });
                    if (p.selections && p.selections.length > 0) {
                        await models_1.CharacterPowerSelection.bulkCreate(p.selections.map(s => ({
                            characterPowerId: cp.id,
                            powerLevelDefinitionId: s.powerLevelDefinitionId
                        })), { transaction: t });
                    }
                }
            }
            if (meritsFlaws && meritsFlaws.length > 0) {
                await models_1.CharacterMeritFlaw.bulkCreate(meritsFlaws.map(m => ({
                    characterId: charId,
                    meritFlawId: m.meritFlawId,
                    points: m.points,
                    description: m.description
                })), { transaction: t });
            }
            if (items && items.length > 0) {
                await models_1.CharacterItem.bulkCreate(items.map(i => ({
                    characterId: charId,
                    itemId: i.itemId,
                    quantity: i.quantity,
                    description: i.description
                })), { transaction: t });
            }
            await t.commit();
            const createdChar = await models_1.Character.findByPk(charId, { include: characterIncludes });
            return res.status(201).json(createdChar);
        }
        catch (err) {
            await t.rollback();
            throw err;
        }
    }
    catch (error) {
        console.error("Erro ao criar personagem:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao criar o personagem" });
    }
};
exports.createCharacter = createCharacter;
const listCharacters = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const characters = await models_1.Character.findAll({ include: characterIncludes });
        return res.json(characters);
    }
    catch (error) {
        console.error("Erro ao listar personagens:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao listar personagens" });
    }
};
exports.listCharacters = listCharacters;
const getCharacter = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const { id } = req.params;
        const character = await models_1.Character.findByPk(id, { include: characterIncludes });
        if (!character) {
            return res.status(404).json({ error: "Personagem não encontrado" });
        }
        return res.json(character);
    }
    catch (error) {
        console.error("Erro ao obter personagem:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao buscar personagem" });
    }
};
exports.getCharacter = getCharacter;
const updateCharacter = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const { id } = req.params;
        const validated = characterSchemas_1.updateCharacterSchema.safeParse(req.body);
        if (!validated.success) {
            return res.status(400).json({ errors: validated.error.errors });
        }
        const character = await models_1.Character.findByPk(id);
        if (!character) {
            return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
        }
        const { name, experienceTotal, experienceSpent, isNpc, isTemplate, attributes, skills, statuses, powers, meritsFlaws, items } = validated.data;
        const t = await models_1.sequelize.transaction();
        try {
            await models_1.Character.update({
                name,
                experienceTotal,
                experienceSpent,
                isNpc,
                isTemplate,
            }, { where: { id }, transaction: t });
            if (skills !== undefined) {
                await models_1.CharacterSkill.destroy({ where: { characterId: id }, transaction: t });
                if (skills.length > 0) {
                    await models_1.CharacterSkill.bulkCreate(skills.map(s => ({
                        characterId: id,
                        skillId: s.skillId,
                        value: s.value,
                        specialty: s.specialty,
                        description: s.description
                    })), { transaction: t });
                }
            }
            if (attributes !== undefined) {
                await models_1.CharacterAttribute.destroy({ where: { characterId: id }, transaction: t });
                if (attributes.length > 0) {
                    await models_1.CharacterAttribute.bulkCreate(attributes.map(a => ({
                        characterId: id,
                        attributeId: a.attributeId,
                        value: a.value || 1,
                        specialty: a.specialty,
                        description: a.description
                    })), { transaction: t });
                }
            }
            if (meritsFlaws !== undefined) {
                await models_1.CharacterMeritFlaw.destroy({ where: { characterId: id }, transaction: t });
                if (meritsFlaws.length > 0) {
                    await models_1.CharacterMeritFlaw.bulkCreate(meritsFlaws.map(m => ({
                        characterId: id,
                        meritFlawId: m.meritFlawId,
                        points: m.points,
                        description: m.description
                    })), { transaction: t });
                }
            }
            if (statuses !== undefined) {
                await models_1.CharacterStatus.destroy({ where: { characterId: id }, transaction: t });
                if (statuses.length > 0) {
                    await models_1.CharacterStatus.bulkCreate(statuses.map(s => ({
                        characterId: id,
                        statusId: s.statusId,
                        value: s.value
                    })), { transaction: t });
                }
            }
            if (items !== undefined) {
                await models_1.CharacterItem.destroy({ where: { characterId: id }, transaction: t });
                if (items.length > 0) {
                    await models_1.CharacterItem.bulkCreate(items.map(i => ({
                        characterId: id,
                        itemId: i.itemId,
                        quantity: i.quantity,
                        description: i.description
                    })), { transaction: t });
                }
            }
            if (powers !== undefined) {
                const existingPowers = await models_1.CharacterPower.findAll({ where: { characterId: id }, transaction: t });
                for (const ep of existingPowers) {
                    await models_1.CharacterPowerSelection.destroy({ where: { characterPowerId: ep.id }, transaction: t });
                }
                await models_1.CharacterPower.destroy({ where: { characterId: id }, transaction: t });
                for (const p of powers) {
                    const cp = await models_1.CharacterPower.create({
                        characterId: id,
                        powerDefinitionId: p.powerDefinitionId,
                        level: p.level
                    }, { transaction: t });
                    if (p.selections && p.selections.length > 0) {
                        await models_1.CharacterPowerSelection.bulkCreate(p.selections.map(s => ({
                            characterPowerId: cp.id,
                            powerLevelDefinitionId: s.powerLevelDefinitionId
                        })), { transaction: t });
                    }
                }
            }
            await t.commit();
            const updatedCharacter = await models_1.Character.findByPk(id, { include: characterIncludes });
            return res.json(updatedCharacter);
        }
        catch (err) {
            await t.rollback();
            throw err;
        }
    }
    catch (error) {
        console.error("Erro ao atualizar personagem:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao atualizar personagem" });
    }
};
exports.updateCharacter = updateCharacter;
const deleteCharacter = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const { id } = req.params;
        const character = await models_1.Character.findByPk(id);
        if (!character) {
            return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
        }
        await models_1.Character.destroy({ where: { id } });
        return res.json({ message: "Personagem deletado com sucesso" });
    }
    catch (error) {
        console.error("Erro ao deletar personagem:", error);
        return res.status(500).json({ error: "Erro interno no servidor ao deletar personagem" });
    }
};
exports.deleteCharacter = deleteCharacter;
