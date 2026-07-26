"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionBackgroundSchema = exports.createDefinitionBackgroundSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionBackgroundSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
    })
});
exports.updateDefinitionBackgroundSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
    })
});
