import { Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../config/db";
import { registerSchema, loginSchema } from "../schemas/authSchemas";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";

const generateToken = (userId: string, role: string): string => {
  const secret = process.env.JWT_SECRET || "lirarpg_super_secret_key_2026_971b8d43";
  return jwt.sign({ id: userId, role }, secret, { expiresIn: "30d" });
};

export const register = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const validated = registerSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({ errors: validated.error.errors });
    }

    const { name, email, password, role } = validated.data;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email já está cadastrado" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role as any,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    const token = generateToken(user.id, user.role);

    return res.status(201).json({ user, token });
  } catch (error) {
    console.error("Erro no registro:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const login = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const validated = loginSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({ errors: validated.error.errors });
    }

    const { email, password } = validated.data;

    // Find user
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Credenciais inválidas" });
    }

    const token = generateToken(user.id, user.role);

    return res.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error("Erro no login:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const profile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const user = await prisma.user.findUnique({
      where: { id: req.userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    return res.json({ user });
  } catch (error) {
    console.error("Erro no perfil:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};
