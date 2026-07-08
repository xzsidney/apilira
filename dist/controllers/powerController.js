"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignCharacterPower = exports.updateCharacterPower = exports.assignCharacterPower = exports.getCharacterPowers = void 0;
const powerSchemas_1 = require("../schemas/powerSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterPowers = async (req, res) => {
    try {
        const { characterId } = req.params;
        const records = await models_1.CharacterPower.findAll({
            where: { characterId },
            include: [
                { model: models_1.PowerDefinition, as: 'powerDefinition' },
                { model: models_1.PowerLevelDefinition, as: 'powerLevelDefinition' },
                { model: models_1.CharacterPowerSelection, as: 'selections' }
            ]
        });
        res.json(records);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar registros." });
    }
};
exports.getCharacterPowers = getCharacterPowers;
const assignCharacterPower = async (req, res) => {
    try {
        const { characterId } = req.params;
        const data = powerSchemas_1.characterPowerInputSchema.parse(req.body);
        const existing = await models_1.CharacterPower.findOne({
            where: { characterId, powerDefinitionId: data.powerDefinitionId }
        });
        if (existing) {
            res.status(400).json({ error: "Personagem já possui este poder." });
            return;
        }
        const t = await models_1.sequelize.transaction();
        try {
            const newRecord = await models_1.CharacterPower.create({
                characterId,
                powerDefinitionId: data.powerDefinitionId,
                level: data.level,
            }, { transaction: t });
            if (data.selections && data.selections.length > 0) {
                await models_1.CharacterPowerSelection.bulkCreate(data.selections.map(s => ({
                    characterPowerId: newRecord.id,
                    powerLevelDefinitionId: s.powerLevelDefinitionId
                })), { transaction: t });
            }
            await t.commit();
            const record = await models_1.CharacterPower.findByPk(newRecord.id, {
                include: { all: true, nested: true }
            });
            res.status(201).json(record);
        }
        catch (e) {
            await t.rollback();
            throw e;
        }
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
exports.assignCharacterPower = assignCharacterPower;
const updateCharacterPower = async (req, res) => {
    try {
        const { id } = req.params;
        const data = powerSchemas_1.characterPowerInputSchema.partial().parse(req.body);
        const t = await models_1.sequelize.transaction();
        try {
            if (data.selections) {
                await models_1.CharacterPowerSelection.destroy({ where: { characterPowerId: id }, transaction: t });
                if (data.selections.length > 0) {
                    await models_1.CharacterPowerSelection.bulkCreate(data.selections.map(s => ({
                        characterPowerId: id,
                        powerLevelDefinitionId: s.powerLevelDefinitionId
                    })), { transaction: t });
                }
            }
            await models_1.CharacterPower.update({ level: data.level }, { where: { id }, transaction: t });
            await t.commit();
            const updated = await models_1.CharacterPower.findByPk(id, {
                include: { all: true, nested: true }
            });
            res.json(updated);
        }
        catch (e) {
            await t.rollback();
            throw e;
        }
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
exports.updateCharacterPower = updateCharacterPower;
const unassignCharacterPower = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.CharacterPower.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao remover." });
    }
};
exports.unassignCharacterPower = unassignCharacterPower;
