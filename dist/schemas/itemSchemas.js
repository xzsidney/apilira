"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterItemSchema = exports.characterItemSchema = exports.itemDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.itemDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome do item é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
    value: zod_1.z.number().min(0, "O valor deve ser maior ou igual a 0").default(0),
    requirements: zod_1.z.string().optional().nullable(),
});
exports.characterItemSchema = zod_1.z.object({
    itemId: zod_1.z.string().uuid("ID de item inválido"),
    quantity: zod_1.z.number().int().min(1).default(1),
    description: zod_1.z.string().optional().nullable(),
});
exports.updateCharacterItemSchema = zod_1.z.object({
    quantity: zod_1.z.number().int().min(1).optional(),
    description: zod_1.z.string().optional().nullable(),
});
