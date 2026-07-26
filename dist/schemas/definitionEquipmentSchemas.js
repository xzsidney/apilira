"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionEquipmentSchema = exports.createDefinitionEquipmentSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionEquipmentSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        type: zod_1.z.enum(['ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS']),
        damage: zod_1.z.string().nullable().optional(),
        concealment: zod_1.z.string().nullable().optional(),
        range: zod_1.z.number().int().nullable().optional(),
        rateOfFire: zod_1.z.number().int().nullable().optional(),
        clip: zod_1.z.string().nullable().optional(),
        minimumStrength: zod_1.z.number().int().nullable().optional(),
        armorLevel: zod_1.z.number().int().nullable().optional(),
        armorPenalty: zod_1.z.number().int().nullable().optional(),
        cost: zod_1.z.string().nullable().optional(),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
    })
});
exports.updateDefinitionEquipmentSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        type: zod_1.z.enum(['ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS']).optional(),
        damage: zod_1.z.string().nullable().optional(),
        concealment: zod_1.z.string().nullable().optional(),
        range: zod_1.z.number().int().nullable().optional(),
        rateOfFire: zod_1.z.number().int().nullable().optional(),
        clip: zod_1.z.string().nullable().optional(),
        minimumStrength: zod_1.z.number().int().nullable().optional(),
        armorLevel: zod_1.z.number().int().nullable().optional(),
        armorPenalty: zod_1.z.number().int().nullable().optional(),
        cost: zod_1.z.string().nullable().optional(),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
    })
});
