import { z } from "zod";

export const skillDefinitionSchema = z.object({
  name: z.string().min(1, "O nome da habilidade é obrigatório"),
  type: z.string().min(1, "O tipo de habilidade é obrigatório"),
  description: z.string().optional().nullable(),
});

export const characterSkillSchema = z.object({
  skillId: z.string().uuid("ID de habilidade inválido"),
  value: z.number().int().min(1).max(5).default(1),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export const updateCharacterSkillSchema = z.object({
  value: z.number().int().min(1).max(5).optional(),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});
