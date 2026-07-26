"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionSkillSchema = exports.createDefinitionSkillSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        type: zod_1.z.enum(['TALENTOS', 'PERICIAS', 'CONHECIMENTOS'], {
            errorMap: () => ({ message: 'O tipo deve ser TALENTOS, PERICIAS ou CONHECIMENTOS' })
        }),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
    })
});
exports.updateDefinitionSkillSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional(),
        type: zod_1.z.enum(['TALENTOS', 'PERICIAS', 'CONHECIMENTOS']).optional(),
        gameStyle: zod_1.z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
    })
});
