"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regionSchema = void 0;
const zod_1 = require("zod");
exports.regionSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "O nome é obrigatório"),
    level: zod_1.z.number().int().min(1).max(6),
    description: zod_1.z.string().optional(),
    narrativeClimate: zod_1.z.string().optional(),
    factionDomain: zod_1.z.string().optional(),
    difficultyDomain: zod_1.z.number().int().optional(),
    dangerLevel: zod_1.z.number().int().min(1).optional(),
    parentRegionId: zod_1.z.string().uuid().optional().nullable(),
    // Associativas (envio por ID)
    criminalities: zod_1.z.array(zod_1.z.object({
        criminalityId: zod_1.z.string().uuid(),
        testDifficulty: zod_1.z.number().int()
    })).optional(),
    mediaVisibilities: zod_1.z.array(zod_1.z.object({
        mediaVisibilityId: zod_1.z.string().uuid(),
        testDifficulty: zod_1.z.number().int()
    })).optional(),
    publicSecurities: zod_1.z.array(zod_1.z.object({
        publicSecurityId: zod_1.z.string().uuid(),
        testDifficulty: zod_1.z.number().int()
    })).optional(),
    wealths: zod_1.z.array(zod_1.z.object({
        wealthId: zod_1.z.string().uuid(),
        testDifficulty: zod_1.z.number().int()
    })).optional(),
    demographics: zod_1.z.array(zod_1.z.object({
        demographicProfileId: zod_1.z.string().uuid(),
        quantity: zod_1.z.number().int()
    })).optional()
});
