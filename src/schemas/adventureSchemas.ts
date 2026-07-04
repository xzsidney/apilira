import { z } from 'zod';

export const createAdventureSchema = z.object({
  name: z.string().min(1, 'Nome da aventura é obrigatório'),
  gameStyle: z.string().min(1, 'Estilo de jogo é obrigatório'),
  objective: z.string().optional(),
});

export const createSceneSchema = z.object({
  sceneIdentifier: z.string().min(1, 'O Identificador da Cena é obrigatório'),
  title: z.string().min(1, 'O título da Cena é obrigatório'),
  description: z.string().min(1, 'A descrição da Cena é obrigatória'),
  imageUrl: z.string().optional().nullable(),
  audioUrl: z.string().optional().nullable(),
  apiConsequences: z.record(z.any()).optional().nullable(),
});

export const createActionSchema = z.object({
  actionIdentifier: z.string().min(1, 'Identificador da ação obrigatório'),
  focus: z.string().min(1, 'Foco (Mental, Físico, Social) é obrigatório'),
  text: z.string().min(1, 'Texto da ação é obrigatório'),
  testStr: z.string().min(1, 'Teste exigido é obrigatório'),
  difficulty: z.number().int().min(0).default(0),
});

export const linkSceneToActionSchema = z.object({
  successSceneId: z.string().uuid().optional().nullable(),
  failureSceneId: z.string().uuid().optional().nullable(),
  order: z.number().int().default(0),
});
