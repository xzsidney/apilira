import { z } from "zod";

export const attributeDefinitionSchema = z.object({
  name: z.string().min(1, "O nome do atributo é obrigatório"),
  type: z.string().min(1, "O tipo (VAMPIRE, MAGE, etc.) é obrigatório"),
  description: z.string().optional().nullable(),
});

export const characterAttributeSchema = z.object({
  attributeId: z.string().uuid("ID de atributo inválido"),
  value: z.number().int().min(1).max(5),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});

export const updateCharacterAttributeSchema = z.object({
  value: z.number().int().min(1).max(5).optional(),
  specialty: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
});
