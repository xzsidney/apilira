import { z } from 'zod';

export const createDefinitionBloodPotencySchema = z.object({
  body: z.object({
    level: z.number().int().min(0).max(10),
    bloodSurge: z.string().min(1, 'Adicionamento de sangue é obrigatório'),
    mendAmount: z.string().min(1, 'Cura é obrigatória'),
    disciplineBonus: z.string().min(1, 'Bônus de disciplina é obrigatório'),
    baneSeverity: z.number().int().min(0),
    feedingPenalty: z.string().min(1, 'Penalidade de alimentação é obrigatória'),
    gameStyle: z.literal('VAMPIRE').optional().default('VAMPIRE'),
  })
});

export const updateDefinitionBloodPotencySchema = z.object({
  body: z.object({
    bloodSurge: z.string().optional(),
    mendAmount: z.string().optional(),
    disciplineBonus: z.string().optional(),
    baneSeverity: z.number().int().min(0).optional(),
    feedingPenalty: z.string().optional(),
  })
});
