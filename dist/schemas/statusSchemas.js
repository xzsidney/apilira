"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterStatusUpdateSchema = exports.characterStatusSchema = exports.statusDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.statusDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    gameStyle: zod_1.z.string().min(1, "O sistema é obrigatório"),
    maxValue: zod_1.z.number().int().min(1),
    defaultInitialValue: zod_1.z.number().int().min(0).default(0),
    description: zod_1.z.string().optional().nullable(),
});
exports.characterStatusSchema = zod_1.z.object({
    statusId: zod_1.z.string().uuid("ID inválido"),
    value: zod_1.z.number().int().min(0).default(0),
});
exports.characterStatusUpdateSchema = zod_1.z.object({
    value: zod_1.z.number().int().min(0),
});
