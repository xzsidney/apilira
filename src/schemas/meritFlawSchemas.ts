import { z } from "zod";

export const meritFlawDefinitionSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  type: z.enum(["MERIT", "FLAW"]),
  gameStyle: z.string().min(1, "O sistema (VAMPIRE, MAGE, etc) ou UNIVERSAL é obrigatório"),
  description: z.string().optional().nullable(),
});

export const characterMeritFlawSchema = z.object({
  meritFlawId: z.string().uuid("ID inválido"),
  points: z.number().int().min(1).default(1),
  description: z.string().optional().nullable(),
});

export const updateCharacterMeritFlawSchema = z.object({
  points: z.number().int().min(1).optional(),
  description: z.string().optional().nullable(),
});
