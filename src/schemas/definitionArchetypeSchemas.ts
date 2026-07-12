import { z } from 'zod';

export const createDefinitionArchetypeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
  })
});

export const updateDefinitionArchetypeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
  })
});
