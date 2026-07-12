import { z } from 'zod';

export const createDefinitionSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    type: z.enum(['TALENTOS', 'PERICIAS', 'CONHECIMENTOS'], {
      errorMap: () => ({ message: 'O tipo deve ser TALENTOS, PERICIAS ou CONHECIMENTOS' })
    }),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
  })
});

export const updateDefinitionSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    type: z.enum(['TALENTOS', 'PERICIAS', 'CONHECIMENTOS']).optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
  })
});
