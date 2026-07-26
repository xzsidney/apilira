"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionClanSchema = exports.createDefinitionClanSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionClanSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        sect: zod_1.z.string().nullable().optional(),
        weakness: zod_1.z.string().min(1, 'Fraqueza é obrigatória'),
        disciplines: zod_1.z.string().min(1, 'Disciplinas são obrigatórias'),
        gameStyle: zod_1.z.literal('VAMPIRE').optional().default('VAMPIRE')
    })
});
exports.updateDefinitionClanSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        sect: zod_1.z.string().nullable().optional(),
        weakness: zod_1.z.string().min(1, 'Fraqueza não pode ser vazia').optional(),
        disciplines: zod_1.z.string().min(1, 'Disciplinas não podem ser vazias').optional()
    })
});
