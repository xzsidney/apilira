"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterSkillSchema = exports.characterSkillSchema = exports.skillDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.skillDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome da habilidade é obrigatório"),
    type: zod_1.z.string().min(1, "O tipo de habilidade é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
});
exports.characterSkillSchema = zod_1.z.object({
    skillId: zod_1.z.string().uuid("ID de habilidade inválido"),
    value: zod_1.z.number().int().min(1).max(5).default(1),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
exports.updateCharacterSkillSchema = zod_1.z.object({
    value: zod_1.z.number().int().min(1).max(5).optional(),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
