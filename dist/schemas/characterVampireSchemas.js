"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCharacterVampireSchema = exports.createCharacterVampireSchema = void 0;
const zod_1 = require("zod");
const attributeSchema = zod_1.z.object({
    definitionAttributeId: zod_1.z.string().uuid(),
    value: zod_1.z.number().int().min(1).max(5)
});
const skillSchema = zod_1.z.object({
    definitionSkillId: zod_1.z.string().uuid(),
    value: zod_1.z.number().int().min(0).max(5),
    specialty: zod_1.z.string().nullable().optional()
});
const disciplineSchema = zod_1.z.object({
    definitionDisciplineId: zod_1.z.string().uuid(),
    value: zod_1.z.number().int().min(1).max(5)
});
const powerSchema = zod_1.z.object({
    definitionDisciplinePowerId: zod_1.z.string().uuid()
});
const meritFlawSchema = zod_1.z.object({
    definitionMeritFlawId: zod_1.z.string().uuid(),
    details: zod_1.z.string().nullable().optional()
});
const backgroundSchema = zod_1.z.object({
    definitionBackgroundId: zod_1.z.string().uuid(),
    value: zod_1.z.number().int().min(1).max(5),
    details: zod_1.z.string().nullable().optional()
});
const equipmentSchema = zod_1.z.object({
    definitionEquipmentId: zod_1.z.string().uuid(),
    quantity: zod_1.z.number().int().min(1),
    equipped: zod_1.z.boolean()
});
exports.createCharacterVampireSchema = zod_1.z.object({
    body: zod_1.z.object({
        userId: zod_1.z.string().uuid('ID de usuário inválido'),
        clanId: zod_1.z.string().uuid().nullable().optional(),
        predatorId: zod_1.z.string().uuid().nullable().optional(),
        resonanceId: zod_1.z.string().uuid().nullable().optional(),
        bloodPotencyId: zod_1.z.string().uuid().nullable().optional(),
        name: zod_1.z.string().min(1, 'Nome é obrigatório'),
        concept: zod_1.z.string().nullable().optional(),
        chronicle: zod_1.z.string().nullable().optional(),
        ambition: zod_1.z.string().nullable().optional(),
        sire: zod_1.z.string().nullable().optional(),
        desire: zod_1.z.string().nullable().optional(),
        generation: zod_1.z.number().int().min(4).max(16).default(12),
        hunger: zod_1.z.number().int().min(0).max(5).default(1),
        humanity: zod_1.z.number().int().min(0).max(10).default(7),
        stains: zod_1.z.number().int().min(0).max(10).default(0),
        healthMax: zod_1.z.number().int().min(1).default(3),
        healthDamageSuperficial: zod_1.z.number().int().min(0).default(0),
        healthDamageAggravated: zod_1.z.number().int().min(0).default(0),
        willpowerMax: zod_1.z.number().int().min(1).default(3),
        willpowerDamageSuperficial: zod_1.z.number().int().min(0).default(0),
        willpowerDamageAggravated: zod_1.z.number().int().min(0).default(0),
        chronicleTenets: zod_1.z.string().nullable().optional(),
        touchstones: zod_1.z.any().optional(), // Pode ser Array
        convictions: zod_1.z.any().optional(),
        trueAge: zod_1.z.number().int().nullable().optional(),
        apparentAge: zod_1.z.number().int().nullable().optional(),
        dateOfBirth: zod_1.z.string().nullable().optional(),
        dateOfDeath: zod_1.z.string().nullable().optional(),
        appearance: zod_1.z.string().nullable().optional(),
        distinguishingFeatures: zod_1.z.string().nullable().optional(),
        history: zod_1.z.string().nullable().optional(),
        experienceTotal: zod_1.z.number().int().min(0).default(0),
        experienceSpent: zod_1.z.number().int().min(0).default(0),
        // Arrays para as tabelas associativas
        attributes: zod_1.z.array(attributeSchema).optional(),
        skills: zod_1.z.array(skillSchema).optional(),
        disciplines: zod_1.z.array(disciplineSchema).optional(),
        powers: zod_1.z.array(powerSchema).optional(),
        meritsFlaws: zod_1.z.array(meritFlawSchema).optional(),
        backgrounds: zod_1.z.array(backgroundSchema).optional(),
        equipments: zod_1.z.array(equipmentSchema).optional()
    })
});
// A atualização pode ser parcial
exports.updateCharacterVampireSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).optional(),
        // Para simplificar, o Update básico foca nos dados da raiz.
        // Para atualizar Arrays (comprar poderes), pode-se fazer um endpoint específico 
        // ou mandar o array completo e recriar. Aqui permitiremos parcial geral.
        hunger: zod_1.z.number().int().min(0).max(5).optional(),
        humanity: zod_1.z.number().int().min(0).max(10).optional(),
        stains: zod_1.z.number().int().min(0).max(10).optional(),
        healthDamageSuperficial: zod_1.z.number().int().min(0).optional(),
        healthDamageAggravated: zod_1.z.number().int().min(0).optional(),
        willpowerDamageSuperficial: zod_1.z.number().int().min(0).optional(),
        willpowerDamageAggravated: zod_1.z.number().int().min(0).optional(),
        experienceTotal: zod_1.z.number().int().min(0).optional(),
        experienceSpent: zod_1.z.number().int().min(0).optional(),
        attributes: zod_1.z.array(attributeSchema).optional(),
        skills: zod_1.z.array(skillSchema).optional(),
        disciplines: zod_1.z.array(disciplineSchema).optional(),
        powers: zod_1.z.array(powerSchema).optional(),
        meritsFlaws: zod_1.z.array(meritFlawSchema).optional(),
        backgrounds: zod_1.z.array(backgroundSchema).optional(),
        equipments: zod_1.z.array(equipmentSchema).optional()
    })
});
