import { z } from "zod";

export const statusDefinitionSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  gameStyle: z.string().min(1, "O sistema é obrigatório"),
  maxValue: z.number().int().min(1),
  defaultInitialValue: z.number().int().min(0).default(0),
  description: z.string().optional().nullable(),
});

export const characterStatusSchema = z.object({
  statusId: z.string().uuid("ID inválido"),
  value: z.number().int().min(0).default(0),
});

export const characterStatusUpdateSchema = z.object({
  value: z.number().int().min(0),
});
