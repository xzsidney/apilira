import { z } from 'zod';

export const createDefinitionDisciplinePowerSchema = z.object({
  name: z.string().min(1, 'Nome do poder é obrigatório'),
  level: z.number().int().min(1).max(5),
  description: z.string().min(1, 'Descrição do poder é obrigatória'),
  costType: z.string().min(1, 'Tipo de custo é obrigatório'),
  costAmount: z.number().int().min(0),
  duration: z.string().nullable().optional(),
  dicePool: z.string().nullable().optional(),
  systemNotes: z.string().nullable().optional()
});

export const createDefinitionDisciplineSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome da Disciplina é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    gameStyle: z.literal('VAMPIRE').optional().default('VAMPIRE'),
    powers: z.array(createDefinitionDisciplinePowerSchema).optional()
  })
});

export const updateDefinitionDisciplineSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional()
  })
});
