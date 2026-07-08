"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterPowerInputSchema = exports.characterPowerSelectionSchema = exports.powerDefinitionSchema = exports.powerLevelDefinitionInputSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../types/enums");
exports.powerLevelDefinitionInputSchema = zod_1.z.object({
    level: zod_1.z.number().int().min(1).max(10),
    name: zod_1.z.string().min(1, "O nome do poder específico é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
    system: zod_1.z.string().optional().nullable(),
});
exports.powerDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome da disciplina/esfera é obrigatório"),
    gameStyle: zod_1.z.string().min(1, "O sistema de jogo é obrigatório"),
    type: zod_1.z.nativeEnum(enums_1.PowerType),
    description: zod_1.z.string().optional().nullable(),
    powerLevels: zod_1.z.array(exports.powerLevelDefinitionInputSchema).optional(),
});
exports.characterPowerSelectionSchema = zod_1.z.object({
    powerLevelDefinitionId: zod_1.z.string().uuid("ID de nível de poder inválido"),
});
exports.characterPowerInputSchema = zod_1.z.object({
    powerDefinitionId: zod_1.z.string().uuid("ID de disciplina/esfera inválido"),
    level: zod_1.z.number().int().min(1),
    selections: zod_1.z.array(exports.characterPowerSelectionSchema).optional().default([]),
});
