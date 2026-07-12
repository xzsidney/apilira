import { z } from 'zod';

export const createDefinitionPredatorSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    huntingPool: z.string().min(1, 'A parada de dados é obrigatória'),
    modifiers: z.string().min(1, 'Os modificadores são obrigatórios'),
    gameStyle: z.literal('VAMPIRE').optional().default('VAMPIRE')
  })
});

export const updateDefinitionPredatorSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    huntingPool: z.string().min(1, 'A parada de dados não pode ser vazia').optional(),
    modifiers: z.string().min(1, 'Os modificadores não podem ser vazios').optional()
  })
});
