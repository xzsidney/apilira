"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterStatus = exports.getCharacterStatuses = void 0;
const statusSchemas_1 = require("../schemas/statusSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const getCharacterStatuses = async (req, res) => {
    try {
        const { characterId } = req.params;
        const records = await models_1.CharacterStatus.findAll({
            where: { characterId },
            include: [{ model: models_1.StatusDefinition, as: 'status' }],
        });
        res.json(records);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar registros." });
    }
};
exports.getCharacterStatuses = getCharacterStatuses;
const updateCharacterStatus = async (req, res) => {
    try {
        const { id } = req.params; // this is the ID of CharacterStatus
        const data = statusSchemas_1.characterStatusUpdateSchema.parse(req.body);
        const updated = await models_1.CharacterStatus.update(data, { where: { id } });
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
exports.updateCharacterStatus = updateCharacterStatus;
