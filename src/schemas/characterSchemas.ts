import { z } from "zod";
import { GameStyle } from "../types/enums";
import { characterPowerInputSchema } from "./powerSchemas";

const characterAttributeInputSchema = z.object({
  attributeId: z.string().uuid("ID de atributo inválido"),
  value: z.number().int().min(1).max(5),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const characterSkillInputSchema = z.object({
  skillId: z.string().uuid("ID de habilidade inválido"),
  value: z.number().int().min(1).max(5),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

// Core detail inputs
const characterMeritFlawInputSchema = z.object({
  meritFlawId: z.string().uuid("ID inválido"),
  points: z.number().int().min(1).default(1),
  description: z.string().optional().nullable(),
});

const characterMeritFlawUpdateInputSchema = z.object({
  meritFlawId: z.string().uuid("ID inválido"),
  points: z.number().int().min(1).optional(),
  description: z.string().optional().nullable(),
});

const characterItemInputSchema = z.object({
  itemId: z.string().uuid("ID de item inválido"),
  quantity: z.number().int().min(1).default(1),
  description: z.string().optional().nullable(),
});

const characterStatusInputSchema = z.object({
  statusId: z.string().uuid("ID de status inválido"),
  value: z.number().int().min(0).default(0),
});

const characterBackgroundInputSchema = z.object({
  backgroundId: z.string().uuid("ID de antecedente inválido"),
  level: z.number().int().min(1).default(1),
});

const characterHavenInputSchema = z.object({
  havenDefinitionId: z.string().uuid("ID de refúgio inválido"),
  regionId: z.string().uuid("ID de região inválido"),
});

// Vampire Creation Schema
const vampireCreationSchema = z.object({
  gameStyle: z.literal(GameStyle.VAMPIRE),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
  vampireClaId: z.string().uuid("ID de clã inválido").optional().nullable(),
  vampirePredatorId: z.string().optional().nullable(),
  isNpc: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  concept: z.string().optional().nullable(),
  nature: z.string().optional().nullable(),
  demeanor: z.string().optional().nullable(),
  chronicle: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  roleplayHints: z.string().optional().nullable(),
  health: z.number().int().min(0).default(7),
  maxHealth: z.number().int().min(1).default(7),
  willpower: z.number().int().min(0).default(1),
  maxWillpower: z.number().int().min(1).default(1),
  energy: z.number().int().min(0).default(1),
  maxEnergy: z.number().int().min(1).default(1),
  attributes: z.array(characterAttributeInputSchema).default([]),
  skills: z.array(characterSkillInputSchema).default([]),
  statuses: z.array(characterStatusInputSchema).default([]),
  powers: z.array(characterPowerInputSchema).superRefine((powers, ctx) => {
    let sum = 0;
    for (const p of powers) {
      if (p.level > 2) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Disciplinas iniciais não podem ter nível maior que 2 na criação",
        });
      }
      sum += p.level;
    }
    if (sum > 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A soma das disciplinas iniciais não pode exceder 3 pontos",
      });
    }
  }).default([]),
  meritsFlaws: z.array(characterMeritFlawInputSchema).default([]),
  items: z.array(characterItemInputSchema).default([]),
  backgrounds: z.array(characterBackgroundInputSchema).default([]),
  havens: z.array(characterHavenInputSchema).default([]),
});

// Werewolf Creation Schema
const werewolfCreationSchema = z.object({
  gameStyle: z.literal(GameStyle.WEREWOLF),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
  werewolfTribeId: z.string().uuid("ID de tribo inválido").optional().nullable(),
  isNpc: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  concept: z.string().optional().nullable(),
  nature: z.string().optional().nullable(),
  demeanor: z.string().optional().nullable(),
  chronicle: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  roleplayHints: z.string().optional().nullable(),
  health: z.number().int().min(0).default(7),
  maxHealth: z.number().int().min(1).default(7),
  willpower: z.number().int().min(0).default(1),
  maxWillpower: z.number().int().min(1).default(1),
  energy: z.number().int().min(0).default(1),
  maxEnergy: z.number().int().min(1).default(1),
  attributes: z.array(characterAttributeInputSchema).default([]),
  skills: z.array(characterSkillInputSchema).default([]),
  statuses: z.array(characterStatusInputSchema).default([]),
  powers: z.array(characterPowerInputSchema).superRefine((powers, ctx) => {
    if (powers.length > 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "O personagem pode começar com no máximo 3 Dons/Rituais de nível 1",
      });
    }
    for (const p of powers) {
      if (p.level !== 1) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Dons iniciais de Lobisomem devem ser de nível 1",
        });
      }
    }
  }).default([]),
  meritsFlaws: z.array(characterMeritFlawInputSchema).default([]),
  items: z.array(characterItemInputSchema).default([]),
  backgrounds: z.array(characterBackgroundInputSchema).default([]),
  havens: z.array(characterHavenInputSchema).default([]),
});

// Mage Creation Schema
const mageCreationSchema = z.object({
  gameStyle: z.literal(GameStyle.MAGE),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
  mageTraditionId: z.string().uuid("ID de tradição inválido").optional().nullable(),
  isNpc: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  concept: z.string().optional().nullable(),
  nature: z.string().optional().nullable(),
  demeanor: z.string().optional().nullable(),
  chronicle: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  roleplayHints: z.string().optional().nullable(),
  health: z.number().int().min(0).default(7),
  maxHealth: z.number().int().min(1).default(7),
  willpower: z.number().int().min(0).default(1),
  maxWillpower: z.number().int().min(1).default(1),
  energy: z.number().int().min(0).default(1),
  maxEnergy: z.number().int().min(1).default(1),
  attributes: z.array(characterAttributeInputSchema).default([]),
  skills: z.array(characterSkillInputSchema).default([]),
  statuses: z.array(characterStatusInputSchema).default([]),
  powers: z.array(characterPowerInputSchema).superRefine((powers, ctx) => {
    let sum = 0;
    for (const p of powers) {
      if (p.level > 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Esferas iniciais não podem exceder nível 3 na criação",
        });
      }
      sum += p.level;
    }
    if (sum > 6) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A soma dos pontos de Esferas iniciais não pode exceder 6 pontos",
      });
    }
  }).default([]),
  meritsFlaws: z.array(characterMeritFlawInputSchema).default([]),
  items: z.array(characterItemInputSchema).default([]),
  backgrounds: z.array(characterBackgroundInputSchema).default([]),
  havens: z.array(characterHavenInputSchema).default([]),
});

// Hunter Creation Schema
const hunterCreationSchema = z.object({
  gameStyle: z.literal(GameStyle.HUNTER),
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
  hunterCreedId: z.string().uuid("ID de credo inválido").optional().nullable(),
  isNpc: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  concept: z.string().optional().nullable(),
  nature: z.string().optional().nullable(),
  demeanor: z.string().optional().nullable(),
  chronicle: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  roleplayHints: z.string().optional().nullable(),
  health: z.number().int().min(0).default(7),
  maxHealth: z.number().int().min(1).default(7),
  willpower: z.number().int().min(0).default(1),
  maxWillpower: z.number().int().min(1).default(1),
  energy: z.number().int().min(0).default(1),
  maxEnergy: z.number().int().min(1).default(1),
  attributes: z.array(characterAttributeInputSchema).default([]),
  skills: z.array(characterSkillInputSchema).default([]),
  statuses: z.array(characterStatusInputSchema).default([]),
  powers: z.array(characterPowerInputSchema).superRefine((powers, ctx) => {
    let sum = 0;
    for (const p of powers) {
      sum += p.level;
    }
    if (sum > 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "A soma dos pontos de Trunfos (Edges) iniciais não pode exceder 2 pontos",
      });
    }
  }).default([]),
  meritsFlaws: z.array(characterMeritFlawInputSchema).default([]),
  items: z.array(characterItemInputSchema).default([]),
  backgrounds: z.array(characterBackgroundInputSchema).default([]),
  havens: z.array(characterHavenInputSchema).default([]),
});

// Discriminated union for character creation
export const createCharacterSchema = z.discriminatedUnion("gameStyle", [
  vampireCreationSchema,
  werewolfCreationSchema,
  mageCreationSchema,
  hunterCreationSchema,
]);

// ----------------------------------------------------
// UPDATE SCHEMAS (Maximum absolute values: 5 for stats)
// ----------------------------------------------------

const characterAttributeUpdateInputSchema = z.object({
  attributeId: z.string().uuid("ID de atributo inválido"),
  value: z.number().int().min(1).max(5).optional(),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const characterItemUpdateInputSchema = z.object({
  itemId: z.string().uuid("ID de item inválido"),
  quantity: z.number().int().min(1).optional(),
  description: z.string().optional().nullable(),
});

const characterSkillUpdateInputSchema = z.object({
  skillId: z.string().uuid("ID de habilidade inválido"),
  value: z.number().int().min(1).max(5).optional(),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

const characterStatusUpdateInputSchema = z.object({
  statusId: z.string().uuid("ID de status inválido"),
  vampireClaId: z.string().uuid().optional(),
  vampirePredatorId: z.string().optional(),
  werewolfTribeId: z.string().uuid().optional().nullable(),
  value: z.number().int().optional(),
  description: z.string().optional().nullable(),
});

export const addStatusSchema = characterStatusInputSchema;
export const updateStatusSchema = z.object({
  value: z.number().int().min(0).max(10).optional(),
});

export const addBackgroundSchema = characterBackgroundInputSchema;
export const updateBackgroundSchema = z.object({
  level: z.number().int().min(1).max(5).optional(),
});

export const addHavenSchema = characterHavenInputSchema;
export const updateHavenSchema = z.object({
  regionId: z.string().uuid("ID de região inválido").optional(),
});

export const updateCharacterSchema = z.object({
  name: z.string().min(2).max(255).optional(),
  vampireClaId: z.string().uuid("ID de clã inválido").optional().nullable(),
  werewolfTribeId: z.string().uuid("ID de tribo inválido").optional().nullable(),
  mageTraditionId: z.string().uuid("ID de tradição inválido").optional().nullable(),
  hunterCreedId: z.string().uuid("ID de credo inválido").optional().nullable(),
  experienceTotal: z.number().int().min(0).optional(),
  experienceSpent: z.number().int().min(0).optional(),
  isNpc: z.boolean().optional(),
  isTemplate: z.boolean().optional(),
  concept: z.string().optional().nullable(),
  nature: z.string().optional().nullable(),
  demeanor: z.string().optional().nullable(),
  chronicle: z.string().optional().nullable(),
  history: z.string().optional().nullable(),
  roleplayHints: z.string().optional().nullable(),
  health: z.number().int().min(0).optional(),
  maxHealth: z.number().int().min(1).optional(),
  willpower: z.number().int().min(0).optional(),
  maxWillpower: z.number().int().min(1).optional(),
  energy: z.number().int().min(0).optional(),
  maxEnergy: z.number().int().min(1).optional(),
  attributes: z.array(characterAttributeUpdateInputSchema).optional(),
  skills: z.array(characterSkillUpdateInputSchema).optional(),
  statuses: z.array(characterStatusUpdateInputSchema).optional(),
  powers: z.array(characterPowerInputSchema).optional(),
  meritsFlaws: z.array(characterMeritFlawUpdateInputSchema).optional(),
  items: z.array(characterItemUpdateInputSchema).optional(),
});

export type CreateCharacterInput = z.infer<typeof createCharacterSchema>;
export type UpdateCharacterInput = z.infer<typeof updateCharacterSchema>;
