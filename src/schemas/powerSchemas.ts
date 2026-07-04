import { z } from "zod";
import { PowerType } from "@prisma/client";

export const powerLevelDefinitionInputSchema = z.object({
  level: z.number().int().min(1).max(10),
  name: z.string().min(1, "O nome do poder específico é obrigatório"),
  description: z.string().optional().nullable(),
  system: z.string().optional().nullable(),
});

export const powerDefinitionSchema = z.object({
  name: z.string().min(1, "O nome da disciplina/esfera é obrigatório"),
  gameStyle: z.string().min(1, "O sistema de jogo é obrigatório"),
  type: z.nativeEnum(PowerType),
  description: z.string().optional().nullable(),
  powerLevels: z.array(powerLevelDefinitionInputSchema).optional(),
});

export const characterPowerSelectionSchema = z.object({
  powerLevelDefinitionId: z.string().uuid("ID de nível de poder inválido"),
});

export const characterPowerInputSchema = z.object({
  powerDefinitionId: z.string().uuid("ID de disciplina/esfera inválido"),
  level: z.number().int().min(1),
  selections: z.array(characterPowerSelectionSchema).optional().default([]),
});
