"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterAttributeSchema = exports.characterAttributeSchema = exports.attributeDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.attributeDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome do atributo é obrigatório"),
    type: zod_1.z.string().min(1, "O tipo (VAMPIRE, MAGE, etc.) é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
});
exports.characterAttributeSchema = zod_1.z.object({
    attributeId: zod_1.z.string().uuid("ID de atributo inválido"),
    value: zod_1.z.number().int().min(1).max(5),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
exports.updateCharacterAttributeSchema = zod_1.z.object({
    value: zod_1.z.number().int().min(1).max(5).optional(),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
