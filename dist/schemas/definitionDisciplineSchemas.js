"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefinitionDisciplineSchema = exports.createDefinitionDisciplineSchema = exports.createDefinitionDisciplinePowerSchema = void 0;
const zod_1 = require("zod");
exports.createDefinitionDisciplinePowerSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, 'Nome do poder é obrigatório'),
    level: zod_1.z.number().int().min(1).max(5),
    description: zod_1.z.string().min(1, 'Descrição do poder é obrigatória'),
    costType: zod_1.z.string().min(1, 'Tipo de custo é obrigatório'),
    costAmount: zod_1.z.number().int().min(0),
    duration: zod_1.z.string().nullable().optional(),
    dicePool: zod_1.z.string().nullable().optional(),
    systemNotes: zod_1.z.string().nullable().optional()
});
exports.createDefinitionDisciplineSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome da Disciplina é obrigatório'),
        description: zod_1.z.string().min(1, 'Descrição é obrigatória'),
        gameStyle: zod_1.z.literal('VAMPIRE').optional().default('VAMPIRE'),
        powers: zod_1.z.array(exports.createDefinitionDisciplinePowerSchema).optional()
    })
});
exports.updateDefinitionDisciplineSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Nome não pode ser vazio').optional(),
        description: zod_1.z.string().min(1, 'Descrição não pode ser vazia').optional()
    })
});
