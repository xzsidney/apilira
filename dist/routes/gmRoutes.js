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
// ==================== AVENTURAS SOLO (LIVRO-JOGO) ====================
const GmStoryController_1 = require("../controllers/GmStoryController");
// Overview & Monitor
router.get("/dashboard/overview", GmStoryController_1.getGmOverview);
router.get("/players", GmStoryController_1.getPlayersOverview);
router.post("/players/:characterId/locations", GmStoryController_1.grantPlayerLocation);
// Compêndio Canônico
router.get("/compendium/npcs", GmStoryController_1.getCompendiumNpcs);
router.get("/compendium/locations", GmStoryController_1.getCompendiumLocations);
router.get("/compendium/equipments", GmStoryController_1.getCompendiumEquipments);
router.get("/story/adventures", GmStoryController_1.listAdventures);
router.get("/story/adventures/:id", GmStoryController_1.getAdventureDetail);
router.post("/story/adventures", GmStoryController_1.createAdventure);
router.put("/story/adventures/:id", GmStoryController_1.updateAdventure);
router.delete("/story/adventures/:id", GmStoryController_1.deleteAdventure);
router.post("/story/nodes", GmStoryController_1.createNode);
router.put("/story/nodes/:id", GmStoryController_1.updateNode);
router.delete("/story/nodes/:id", GmStoryController_1.deleteNode);
router.post("/story/choices", GmStoryController_1.createChoice);
router.put("/story/choices/:id", GmStoryController_1.updateChoice);
router.delete("/story/choices/:id", GmStoryController_1.deleteChoice);
// ==================== INCURSÕES & CAÇADAS (AFK) ====================
const GmMissionIdleController_1 = require("../controllers/GmMissionIdleController");
router.get("/missions-idle", GmMissionIdleController_1.listMissions);
router.get("/missions-idle/:id", GmMissionIdleController_1.getMissionDetail);
router.post("/missions-idle", GmMissionIdleController_1.createMission);
router.put("/missions-idle/:id", GmMissionIdleController_1.updateMission);
router.delete("/missions-idle/:id", GmMissionIdleController_1.deleteMission);
router.post("/missions-idle/:missionId/actions", GmMissionIdleController_1.createAction);
router.put("/missions-idle/actions/:actionId", GmMissionIdleController_1.updateAction);
router.delete("/missions-idle/actions/:actionId", GmMissionIdleController_1.deleteAction);
exports.default = router;
