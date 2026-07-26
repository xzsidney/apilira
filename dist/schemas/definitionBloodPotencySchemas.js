"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionBloodPotencySchema = exports.createDefinitionBloodPotencySchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionBloodPotencySchema = zod_1.z.object({
    body: zod_1.z.object({
        level: zod_1.z.number().int().min(0).max(10),
        bloodSurge: zod_1.z.string().min(1, 'Adicionamento de sangue é obrigatório'),
        mendAmount: zod_1.z.string().min(1, 'Cura é obrigatória'),
        disciplineBonus: zod_1.z.string().min(1, 'Bônus de disciplina é obrigatório'),
        baneSeverity: zod_1.z.number().int().min(0),
        feedingPenalty: zod_1.z.string().min(1, 'Penalidade de alimentação é obrigatória'),
        gameStyle: zod_1.z.literal('VAMPIRE').optional().default('VAMPIRE'),
    })
});
exports.updateDefinitionBloodPotencySchema = zod_1.z.object({
    body: zod_1.z.object({
        bloodSurge: zod_1.z.string().optional(),
        mendAmount: zod_1.z.string().optional(),
        disciplineBonus: zod_1.z.string().optional(),
        baneSeverity: zod_1.z.number().int().min(0).optional(),
        feedingPenalty: zod_1.z.string().optional(),
    })
});
