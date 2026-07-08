"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authSchemas_1 = require("../schemas/authSchemas");
const models_1 = require("../models");
const generateToken = (userId, role) => {
    const secret = process.env.JWT_SECRET || "lirarpg_super_secret_key_2026_971b8d43";
    return jsonwebtoken_1.default.sign({ id: userId, role }, secret, { expiresIn: "30d" });
};
const register = async (req, res) => {
    try {
        const validated = authSchemas_1.registerSchema.safeParse(req.body);
        if (!validated.success) {
            return res.status(400).json({ errors: validated.error.errors });
        }
        const { name, email, password, role } = validated.data;
        // Check if user already exists
        const existingUser = await models_1.User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: "Email já está cadastrado" });
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Create user
        const user = await models_1.User.create({
            name,
            email,
            password: hashedPassword,
            role: role,
        });
        const token = generateToken(user.id, user.role);
        return res.status(201).json({ user, token });
    }
    catch (error) {
        console.error("Erro no registro:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const validated = authSchemas_1.loginSchema.safeParse(req.body);
        if (!validated.success) {
            return res.status(400).json({ errors: validated.error.errors });
        }
        const { email, password } = validated.data;
        // Find user
        const user = await models_1.User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).json({ error: "Credenciais inválidas" });
        }
        // Verify password
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
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
    }
    catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.login = login;
const profile = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({ error: "Não autorizado" });
        }
        const user = await models_1.User.findByPk(req.userId, {
            attributes: ['id', 'name', 'email', 'createdAt']
        });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        return res.json({ user });
    }
    catch (error) {
        console.error("Erro no perfil:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
};
exports.profile = profile;
