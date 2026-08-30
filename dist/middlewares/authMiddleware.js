"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: "Token de autenticação não fornecido" });
    }
    const parts = authHeader.split(" ");
    if (parts.length !== 2) {
        return res.status(401).json({ error: "Erro no formato do token" });
    }
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: "Token malformatado" });
    }
    const secret = process.env.JWT_SECRET || "lirarpg_super_secret_key_2026_971b8d43";
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.userId = decoded.id;
        req.userRole = decoded.role;
        req.user = { id: decoded.id, role: decoded.role };
        return next();
    }
    catch (err) {
        return res.status(401).json({ error: "Token inválido ou expirado" });
    }
};
exports.authMiddleware = authMiddleware;
const requireRole = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req.userRole || !allowedRoles.includes(req.userRole)) {
            return res.status(403).json({
                error: "Acesso negado: você não possui permissão para acessar este recurso.",
                requiredRoles: allowedRoles,
                currentRole: req.userRole || null
            });
        }
        return next();
    };
};
exports.requireRole = requireRole;
