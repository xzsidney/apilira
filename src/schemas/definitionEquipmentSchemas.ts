import { z } from 'zod';

export const createDefinitionEquipmentSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    type: z.enum(['ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS']),
    damage: z.string().nullable().optional(),
    concealment: z.string().nullable().optional(),
    range: z.number().int().nullable().optional(),
    rateOfFire: z.number().int().nullable().optional(),
    clip: z.string().nullable().optional(),
    minimumStrength: z.number().int().nullable().optional(),
    armorLevel: z.number().int().nullable().optional(),
    armorPenalty: z.number().int().nullable().optional(),
    cost: z.string().nullable().optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional().default('TODOS')
  })
});

export const updateDefinitionEquipmentSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Nome não pode ser vazio').optional(),
    description: z.string().min(1, 'Descrição não pode ser vazia').optional(),
    type: z.enum(['ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS']).optional(),
    damage: z.string().nullable().optional(),
    concealment: z.string().nullable().optional(),
    range: z.number().int().nullable().optional(),
    rateOfFire: z.number().int().nullable().optional(),
    clip: z.string().nullable().optional(),
    minimumStrength: z.number().int().nullable().optional(),
    armorLevel: z.number().int().nullable().optional(),
    armorPenalty: z.number().int().nullable().optional(),
    cost: z.string().nullable().optional(),
    gameStyle: z.enum(['TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER']).optional()
  })
});
