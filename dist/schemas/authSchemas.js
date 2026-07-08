"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
exports.registerSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, "Nome deve ter pelo menos 2 caracteres").max(255),
    email: zod_1.z.string().email("Formato de email inválido").max(255),
    password: zod_1.z.string().min(6, "A senha deve ter pelo menos 6 caracteres").max(255),
    role: zod_1.z.enum(["JOGADOR", "MESTRE", "ADMIN"]).optional().default("JOGADOR"),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Formato de email inválido"),
    password: zod_1.z.string().min(1, "A senha é obrigatória"),
});
