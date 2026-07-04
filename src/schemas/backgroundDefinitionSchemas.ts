import { z } from 'zod';

export const backgroundDefinitionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  gameStyle: z.string().min(1, "Game style is required"),
  description: z.string().optional(),
});

export const backgroundDefinitionUpdateSchema = backgroundDefinitionSchema.partial();
