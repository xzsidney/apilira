import { z } from 'zod';

export const createDefinitionResonanceSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    disciplines: z.string().min(1, 'Disciplinas associadas são obrigatórias'),
    gameStyle: z.literal('VAMPIRE').optional().default('VAMPIRE')
  })
});

export const updateDefinitionResonanceSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    disciplines: z.string().min(1, 'Disciplinas associadas não podem ser vazias').optional()
  })
});
