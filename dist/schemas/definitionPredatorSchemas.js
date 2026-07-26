"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionPredatorSchema = exports.createDefinitionPredatorSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionPredatorSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        huntingPool: zod_1.z.string().min(1, 'A parada de dados é obrigatória'),
        modifiers: zod_1.z.string().min(1, 'Os modificadores são obrigatórios'),
        gameStyle: zod_1.z.literal('VAMPIRE').optional().default('VAMPIRE')
    })
});
exports.updateDefinitionPredatorSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        huntingPool: zod_1.z.string().min(1, 'A parada de dados não pode ser vazia').optional(),
        modifiers: zod_1.z.string().min(1, 'Os modificadores não podem ser vazios').optional()
    })
});
