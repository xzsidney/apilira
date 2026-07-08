"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.havenDefinitionUpdateSchema = exports.havenDefinitionSchema = void 0;
const zod_1 = require("zod");
exports.havenDefinitionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    description: zod_1.z.string().optional(),
    price: zod_1.z.number().min(0).optional(),
    securityLevel: zod_1.z.number().min(1).optional(),
    minionCapacity: zod_1.z.number().min(0).optional(),
    allyCapacity: zod_1.z.number().min(0).optional(),
    requiredBackgroundId: zod_1.z.string().uuid().optional().nullable(),
});
exports.havenDefinitionUpdateSchema = exports.havenDefinitionSchema.partial();
