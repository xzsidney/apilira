import { z } from 'zod';

export const createDefinitionMeritFlawSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    type: z.enum(['QUALIDADE', 'DEFEITO']),
    category: z.enum(['FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL']),
    cost: z.number().int('O custo deve ser um número inteiro'),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
  })
});

export const updateDefinitionMeritFlawSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    type: z.enum(['QUALIDADE', 'DEFEITO']).optional(),
    category: z.enum(['FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL']).optional(),
    cost: z.number().int('O custo deve ser um número inteiro').optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
  })
});
