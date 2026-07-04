import { z } from 'zod';

export const havenDefinitionSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.number().min(0).optional(),
  securityLevel: z.number().min(1).optional(),
  minionCapacity: z.number().min(0).optional(),
  allyCapacity: z.number().min(0).optional(),
  requiredBackgroundId: z.string().uuid().optional().nullable(),
});

export const havenDefinitionUpdateSchema = havenDefinitionSchema.partial();
