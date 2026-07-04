import { z } from "zod";

export const regionSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  level: z.number().int().min(1).max(6),
  description: z.string().optional(),
  narrativeClimate: z.string().optional(),
  factionDomain: z.string().optional(),
  difficultyDomain: z.number().int().optional(),
  dangerLevel: z.number().int().min(1).optional(),
  parentRegionId: z.string().uuid().optional().nullable(),
  
  // Associativas (envio por ID)
  criminalities: z.array(z.object({
    criminalityId: z.string().uuid(),
    testDifficulty: z.number().int()
  })).optional(),
  
  mediaVisibilities: z.array(z.object({
    mediaVisibilityId: z.string().uuid(),
    testDifficulty: z.number().int()
  })).optional(),
  
  publicSecurities: z.array(z.object({
    publicSecurityId: z.string().uuid(),
    testDifficulty: z.number().int()
  })).optional(),
  
  wealths: z.array(z.object({
    wealthId: z.string().uuid(),
    testDifficulty: z.number().int()
  })).optional(),

  demographics: z.array(z.object({
    demographicProfileId: z.string().uuid(),
    quantity: z.number().int()
  })).optional()
});
