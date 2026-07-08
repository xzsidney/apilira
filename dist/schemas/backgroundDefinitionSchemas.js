"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backgroundDefinitionUpdateSchema = exports.backgroundDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.backgroundDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    gameStyle: zod_1.z.string().min(1, "Game style is required"),
    description: zod_1.z.string().optional(),
});
exports.backgroundDefinitionUpdateSchema = exports.backgroundDefinitionSchema.partial();
