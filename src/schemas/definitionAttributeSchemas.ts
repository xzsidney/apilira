import { z } from 'zod';

export const createDefinitionAttributeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    type: z.enum(['FISICO', 'SOCIAL', 'MENTAL'], {
      errorMap: () => ({ message: 'O tipo deve ser FISICO, SOCIAL ou MENTAL' })
    }),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
  })
});

export const updateDefinitionAttributeSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    type: z.enum(['FISICO', 'SOCIAL', 'MENTAL']).optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
  })
});
