import { z } from 'zod';

export const createDefinitionClanSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    sect: z.string().nullable().optional(),
    weakness: z.string().min(1, 'Fraqueza é obrigatória'),
    disciplines: z.string().min(1, 'Disciplinas são obrigatórias'),
    gameStyle: z.literal('VAMPIRE').optional().default('VAMPIRE')
  })
});

export const updateDefinitionClanSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    sect: z.string().nullable().optional(),
    weakness: z.string().min(1, 'Fraqueza não pode ser vazia').optional(),
    disciplines: z.string().min(1, 'Disciplinas não podem ser vazias').optional()
  })
});
