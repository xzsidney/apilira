"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterSchema = exports.updateHavenSchema = exports.addHavenSchema = exports.updateBackgroundSchema = exports.addBackgroundSchema = exports.updateStatusSchema = exports.addStatusSchema = exports.createCharacterSchema = void 0;
const zod_1 = require("zod");
const enums_1 = require("../types/enums");
const powerSchemas_1 = require("./powerSchemas");
const characterAttributeInputSchema = zod_1.z.object({
    attributeId: zod_1.z.string().uuid("ID de atributo inválido"),
    value: zod_1.z.number().int().min(1).max(5),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
const characterSkillInputSchema = zod_1.z.object({
    skillId: zod_1.z.string().uuid("ID de habilidade inválido"),
    value: zod_1.z.number().int().min(1).max(5),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
// Core detail inputs
const characterMeritFlawInputSchema = zod_1.z.object({
    meritFlawId: zod_1.z.string().uuid("ID inválido"),
    points: zod_1.z.number().int().min(1).default(1),
    description: zod_1.z.string().optional().nullable(),
});
const characterMeritFlawUpdateInputSchema = zod_1.z.object({
    meritFlawId: zod_1.z.string().uuid("ID inválido"),
    points: zod_1.z.number().int().min(1).optional(),
    description: zod_1.z.string().optional().nullable(),
});
const characterItemInputSchema = zod_1.z.object({
    itemId: zod_1.z.string().uuid("ID de item inválido"),
    quantity: zod_1.z.number().int().min(1).default(1),
    description: zod_1.z.string().optional().nullable(),
});
const characterStatusInputSchema = zod_1.z.object({
    statusId: zod_1.z.string().uuid("ID de status inválido"),
    value: zod_1.z.number().int().min(0).default(0),
});
const characterBackgroundInputSchema = zod_1.z.object({
    backgroundId: zod_1.z.string().uuid("ID de antecedente inválido"),
    level: zod_1.z.number().int().min(1).default(1),
});
const characterHavenInputSchema = zod_1.z.object({
    havenDefinitionId: zod_1.z.string().uuid("ID de refúgio inválido"),
    regionId: zod_1.z.string().uuid("ID de região inválido"),
});
// Vampire Creation Schema
const vampireCreationSchema = zod_1.z.object({
    gameStyle: zod_1.z.literal(enums_1.GameStyle.VAMPIRE),
    name: zod_1.z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
    isNpc: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional(),
    attributes: zod_1.z.array(characterAttributeInputSchema).default([]),
    skills: zod_1.z.array(characterSkillInputSchema).default([]),
    statuses: zod_1.z.array(characterStatusInputSchema).default([]),
    powers: zod_1.z.array(powerSchemas_1.characterPowerInputSchema).superRefine((powers, ctx) => {
        let sum = 0;
        for (const p of powers) {
            if (p.level > 2) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: "Disciplinas iniciais não podem ter nível maior que 2 na criação",
                });
            }
            sum += p.level;
        }
        if (sum > 3) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "A soma das disciplinas iniciais não pode exceder 3 pontos",
            });
        }
    }).default([]),
    meritsFlaws: zod_1.z.array(characterMeritFlawInputSchema).default([]),
    items: zod_1.z.array(characterItemInputSchema).default([]),
    backgrounds: zod_1.z.array(characterBackgroundInputSchema).default([]),
    havens: zod_1.z.array(characterHavenInputSchema).default([]),
});
// Werewolf Creation Schema
const werewolfCreationSchema = zod_1.z.object({
    gameStyle: zod_1.z.literal(enums_1.GameStyle.WEREWOLF),
    name: zod_1.z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
    isNpc: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional(),
    attributes: zod_1.z.array(characterAttributeInputSchema).default([]),
    skills: zod_1.z.array(characterSkillInputSchema).default([]),
    statuses: zod_1.z.array(characterStatusInputSchema).default([]),
    powers: zod_1.z.array(powerSchemas_1.characterPowerInputSchema).superRefine((powers, ctx) => {
        if (powers.length > 3) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "O personagem pode começar com no máximo 3 Dons/Rituais de nível 1",
            });
        }
        for (const p of powers) {
            if (p.level !== 1) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: "Dons iniciais de Lobisomem devem ser de nível 1",
                });
            }
        }
    }).default([]),
    meritsFlaws: zod_1.z.array(characterMeritFlawInputSchema).default([]),
    items: zod_1.z.array(characterItemInputSchema).default([]),
    backgrounds: zod_1.z.array(characterBackgroundInputSchema).default([]),
    havens: zod_1.z.array(characterHavenInputSchema).default([]),
});
// Mage Creation Schema
const mageCreationSchema = zod_1.z.object({
    gameStyle: zod_1.z.literal(enums_1.GameStyle.MAGE),
    name: zod_1.z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
    isNpc: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional(),
    attributes: zod_1.z.array(characterAttributeInputSchema).default([]),
    skills: zod_1.z.array(characterSkillInputSchema).default([]),
    statuses: zod_1.z.array(characterStatusInputSchema).default([]),
    powers: zod_1.z.array(powerSchemas_1.characterPowerInputSchema).superRefine((powers, ctx) => {
        let sum = 0;
        for (const p of powers) {
            if (p.level > 3) {
                ctx.addIssue({
                    code: zod_1.z.ZodIssueCode.custom,
                    message: "Esferas iniciais não podem exceder nível 3 na criação",
                });
            }
            sum += p.level;
        }
        if (sum > 6) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "A soma dos pontos de Esferas iniciais não pode exceder 6 pontos",
            });
        }
    }).default([]),
    meritsFlaws: zod_1.z.array(characterMeritFlawInputSchema).default([]),
    items: zod_1.z.array(characterItemInputSchema).default([]),
    backgrounds: zod_1.z.array(characterBackgroundInputSchema).default([]),
    havens: zod_1.z.array(characterHavenInputSchema).default([]),
});
// Hunter Creation Schema
const hunterCreationSchema = zod_1.z.object({
    gameStyle: zod_1.z.literal(enums_1.GameStyle.HUNTER),
    name: zod_1.z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
    isNpc: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional(),
    attributes: zod_1.z.array(characterAttributeInputSchema).default([]),
    skills: zod_1.z.array(characterSkillInputSchema).default([]),
    statuses: zod_1.z.array(characterStatusInputSchema).default([]),
    powers: zod_1.z.array(powerSchemas_1.characterPowerInputSchema).superRefine((powers, ctx) => {
        let sum = 0;
        for (const p of powers) {
            sum += p.level;
        }
        if (sum > 2) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: "A soma dos pontos de Trunfos (Edges) iniciais não pode exceder 2 pontos",
            });
        }
    }).default([]),
    meritsFlaws: zod_1.z.array(characterMeritFlawInputSchema).default([]),
    items: zod_1.z.array(characterItemInputSchema).default([]),
    backgrounds: zod_1.z.array(characterBackgroundInputSchema).default([]),
    havens: zod_1.z.array(characterHavenInputSchema).default([]),
});
// Discriminated union for character creation
exports.createCharacterSchema = zod_1.z.discriminatedUnion("gameStyle", [
    vampireCreationSchema,
    werewolfCreationSchema,
    mageCreationSchema,
    hunterCreationSchema,
]);
// ----------------------------------------------------
// UPDATE SCHEMAS (Maximum absolute values: 5 for stats)
// ----------------------------------------------------
const characterAttributeUpdateInputSchema = zod_1.z.object({
    attributeId: zod_1.z.string().uuid("ID de atributo inválido"),
    value: zod_1.z.number().int().min(1).max(5).optional(),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
const characterItemUpdateInputSchema = zod_1.z.object({
    itemId: zod_1.z.string().uuid("ID de item inválido"),
    quantity: zod_1.z.number().int().min(1).optional(),
    description: zod_1.z.string().optional().nullable(),
});
const characterSkillUpdateInputSchema = zod_1.z.object({
    skillId: zod_1.z.string().uuid("ID de habilidade inválido"),
    value: zod_1.z.number().int().min(1).max(5).optional(),
    specialty: zod_1.z.string().optional().nullable(),
    description: zod_1.z.string().optional().nullable(),
});
const characterStatusUpdateInputSchema = zod_1.z.object({
    statusId: zod_1.z.string().uuid("ID de status inválido"),
    value: zod_1.z.number().int().optional(),
    description: zod_1.z.string().optional().nullable(),
});
exports.addStatusSchema = characterStatusInputSchema;
exports.updateStatusSchema = zod_1.z.object({
    value: zod_1.z.number().int().min(0).max(10).optional(),
});
exports.addBackgroundSchema = characterBackgroundInputSchema;
exports.updateBackgroundSchema = zod_1.z.object({
    level: zod_1.z.number().int().min(1).max(5).optional(),
});
exports.addHavenSchema = characterHavenInputSchema;
exports.updateHavenSchema = zod_1.z.object({
    regionId: zod_1.z.string().uuid("ID de região inválido").optional(),
});
exports.updateCharacterSchema = zod_1.z.object({
    name: zod_1.z.string().min(2).max(255).optional(),
    experienceTotal: zod_1.z.number().int().min(0).optional(),
    experienceSpent: zod_1.z.number().int().min(0).optional(),
    isNpc: zod_1.z.boolean().optional(),
    isTemplate: zod_1.z.boolean().optional(),
    attributes: zod_1.z.array(characterAttributeUpdateInputSchema).optional(),
    skills: zod_1.z.array(characterSkillUpdateInputSchema).optional(),
    statuses: zod_1.z.array(characterStatusUpdateInputSchema).optional(),
    powers: zod_1.z.array(powerSchemas_1.characterPowerInputSchema).optional(),
    meritsFlaws: zod_1.z.array(characterMeritFlawUpdateInputSchema).optional(),
    items: zod_1.z.array(characterItemUpdateInputSchema).optional(),
});
