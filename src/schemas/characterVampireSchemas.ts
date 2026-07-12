import { z } from 'zod';

const attributeSchema = z.object({
  definitionAttributeId: z.string().uuid(),
  value: z.number().int().min(1).max(5)
});

const skillSchema = z.object({
  definitionSkillId: z.string().uuid(),
  value: z.number().int().min(0).max(5),
  specialty: z.string().nullable().optional()
});

const disciplineSchema = z.object({
  definitionDisciplineId: z.string().uuid(),
  value: z.number().int().min(1).max(5)
});

const powerSchema = z.object({
  definitionDisciplinePowerId: z.string().uuid()
});

const meritFlawSchema = z.object({
  definitionMeritFlawId: z.string().uuid(),
  details: z.string().nullable().optional()
});

const backgroundSchema = z.object({
  definitionBackgroundId: z.string().uuid(),
  value: z.number().int().min(1).max(5),
  details: z.string().nullable().optional()
});

const equipmentSchema = z.object({
  definitionEquipmentId: z.string().uuid(),
  quantity: z.number().int().min(1),
  equipped: z.boolean()
});

export const createCharacterVampireSchema = z.object({
  body: z.object({
    userId: z.string().uuid('ID de usuário inválido'),
    clanId: z.string().uuid().nullable().optional(),
    predatorId: z.string().uuid().nullable().optional(),
    resonanceId: z.string().uuid().nullable().optional(),
    bloodPotencyId: z.string().uuid().nullable().optional(),
    
    name: z.string().min(1, 'Nome é obrigatório'),
    concept: z.string().nullable().optional(),
    chronicle: z.string().nullable().optional(),
    ambition: z.string().nullable().optional(),
    sire: z.string().nullable().optional(),
    desire: z.string().nullable().optional(),
    
    generation: z.number().int().min(4).max(16).default(12),
    hunger: z.number().int().min(0).max(5).default(1),
    humanity: z.number().int().min(0).max(10).default(7),
    stains: z.number().int().min(0).max(10).default(0),

    healthMax: z.number().int().min(1).default(3),
    healthDamageSuperficial: z.number().int().min(0).default(0),
    healthDamageAggravated: z.number().int().min(0).default(0),
    
    willpowerMax: z.number().int().min(1).default(3),
    willpowerDamageSuperficial: z.number().int().min(0).default(0),
    willpowerDamageAggravated: z.number().int().min(0).default(0),

    chronicleTenets: z.string().nullable().optional(),
    touchstones: z.any().optional(), // Pode ser Array
    convictions: z.any().optional(),

    trueAge: z.number().int().nullable().optional(),
    apparentAge: z.number().int().nullable().optional(),
    dateOfBirth: z.string().nullable().optional(),
    dateOfDeath: z.string().nullable().optional(),
    appearance: z.string().nullable().optional(),
    distinguishingFeatures: z.string().nullable().optional(),
    history: z.string().nullable().optional(),

    experienceTotal: z.number().int().min(0).default(0),
    experienceSpent: z.number().int().min(0).default(0),

    // Arrays para as tabelas associativas
    attributes: z.array(attributeSchema).optional(),
    skills: z.array(skillSchema).optional(),
    disciplines: z.array(disciplineSchema).optional(),
    powers: z.array(powerSchema).optional(),
    meritsFlaws: z.array(meritFlawSchema).optional(),
    backgrounds: z.array(backgroundSchema).optional(),
    equipments: z.array(equipmentSchema).optional()
  })
});

// A atualização pode ser parcial
export const updateCharacterVampireSchema = z.object({
  body: z.object({
    name: z.string().min(1).optional(),
    // Para simplificar, o Update básico foca nos dados da raiz.
    // Para atualizar Arrays (comprar poderes), pode-se fazer um endpoint específico 
    // ou mandar o array completo e recriar. Aqui permitiremos parcial geral.
    hunger: z.number().int().min(0).max(5).optional(),
    humanity: z.number().int().min(0).max(10).optional(),
    stains: z.number().int().min(0).max(10).optional(),
    
    healthDamageSuperficial: z.number().int().min(0).optional(),
    healthDamageAggravated: z.number().int().min(0).optional(),
    willpowerDamageSuperficial: z.number().int().min(0).optional(),
    willpowerDamageAggravated: z.number().int().min(0).optional(),
    
    experienceTotal: z.number().int().min(0).optional(),
    experienceSpent: z.number().int().min(0).optional(),

    attributes: z.array(attributeSchema).optional(),
    skills: z.array(skillSchema).optional(),
    disciplines: z.array(disciplineSchema).optional(),
    powers: z.array(powerSchema).optional(),
    meritsFlaws: z.array(meritFlawSchema).optional(),
    backgrounds: z.array(backgroundSchema).optional(),
    equipments: z.array(equipmentSchema).optional()
  })
});
