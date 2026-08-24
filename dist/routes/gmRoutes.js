"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const models_1 = require("../models");
const router = (0, express_1.Router)();
// Todas as rotas deste módulo exigem autenticação e a role MESTRE
router.use(authMiddleware_1.authMiddleware, (0, authMiddleware_1.requireRole)("MESTRE"));
/**
 * @swagger
 * /api/gm/status:
 *   get:
 *     summary: Verifica status e permissão do Mestre
 *     tags: [GM]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Acesso autorizado ao Painel do Mestre
 *       401:
 *         description: Não autenticado
 *       403:
 *         description: Não autorizado (Apenas MESTRE)
 */
router.get("/status", async (req, res) => {
    try {
        const user = await models_1.User.findByPk(req.userId, {
            attributes: ["id", "name", "email", "role", "createdAt"]
        });
        if (!user) {
            return res.status(404).json({ error: "Usuário não encontrado" });
        }
        return res.status(200).json({
            status: "online",
            message: "Bem-vindo ao Painel do Mestre",
            master: user
        });
    }
    catch (error) {
        console.error("Erro ao verificar status do GM:", error);
        return res.status(500).json({ error: "Erro interno no servidor" });
    }
});
exports.default = router;
