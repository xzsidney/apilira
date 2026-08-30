import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255).optional(),
  username: z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255).optional(),
  email: z.string().email("Formato de email inválido").max(255),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").max(255),
  role: z.enum(["JOGADOR", "MESTRE", "ADMIN", "LIRA"]).optional().default("JOGADOR"),
}).refine(data => data.name || data.username, {
  message: "Nome ou nome de usuário é obrigatório",
  path: ["name"],
});

export const loginSchema = z.object({
  email: z.string().email("Formato de email inválido"),
  password: z.string().min(1, "A senha é obrigatória"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
