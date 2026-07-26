"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionResonanceSchema = exports.createDefinitionResonanceSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionResonanceSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        disciplines: zod_1.z.string().min(1, 'Disciplinas associadas são obrigatórias'),
        gameStyle: zod_1.z.literal('VAMPIRE').optional().default('VAMPIRE')
    })
});
exports.updateDefinitionResonanceSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        disciplines: zod_1.z.string().min(1, 'Disciplinas associadas não podem ser vazias').optional()
    })
});
