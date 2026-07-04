import { z } from "zod";

export const itemDefinitionSchema = z.object({
  name: z.string().min(1, "O nome do item é obrigatório"),
  description: z.string().optional().nullable(),
  value: z.number().min(0, "O valor deve ser maior ou igual a 0").default(0),
  requirements: z.string().optional().nullable(),
});

export const characterItemSchema = z.object({
  itemId: z.string().uuid("ID de item inválido"),
  quantity: z.number().int().min(1).default(1),
  description: z.string().optional().nullable(),
});

export const updateCharacterItemSchema = z.object({
  quantity: z.number().int().min(1).optional(),
  description: z.string().optional().nullable(),
});
