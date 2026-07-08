"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterMeritFlawSchema = exports.characterMeritFlawSchema = exports.meritFlawDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.meritFlawDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    type: zod_1.z.enum(["MERIT", "FLAW"]),
    gameStyle: zod_1.z.string().min(1, "O sistema (VAMPIRE, MAGE, etc) ou UNIVERSAL é obrigatório"),
    description: zod_1.z.string().optional().nullable(),
});
exports.characterMeritFlawSchema = zod_1.z.object({
    meritFlawId: zod_1.z.string().uuid("ID inválido"),
    points: zod_1.z.number().int().min(1).default(1),
    description: zod_1.z.string().optional().nullable(),
});
exports.updateCharacterMeritFlawSchema = zod_1.z.object({
    points: zod_1.z.number().int().min(1).optional(),
    description: zod_1.z.string().optional().nullable(),
});
