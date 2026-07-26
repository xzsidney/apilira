"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionMeritFlawSchema = exports.createDefinitionMeritFlawSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionMeritFlawSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        type: zod_1.z.enum(['QUALIDADE', 'DEFEITO']),
        category: zod_1.z.enum(['FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL']),
        cost: zod_1.z.number().int('O custo deve ser um número inteiro'),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
    })
});
exports.updateDefinitionMeritFlawSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        type: zod_1.z.enum(['QUALIDADE', 'DEFEITO']).optional(),
        category: zod_1.z.enum(['FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL']).optional(),
        cost: zod_1.z.number().int('O custo deve ser um número inteiro').optional(),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
    })
});
