import { Router, Response } from "express";
import { authMiddleware, requireRole, AuthenticatedRequest } from "../middlewares/authMiddleware";
import { User } from "../models";

const router = Router();

// Todas as rotas deste módulo exigem autenticação e a role MESTRE
router.use(authMiddleware, requireRole("MESTRE"));

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
router.get("/status", async (req: AuthenticatedRequest, res: Response) => {
  try {
    const user = await User.findByPk(req.userId, {
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
  } catch (error) {
    console.error("Erro ao verificar status do GM:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
});

// ==================== AVENTURAS SOLO (LIVRO-JOGO) ====================
import {
  listAdventures,
  getAdventureDetail,
  createAdventure,
  updateAdventure,
  deleteAdventure,
  createNode,
  updateNode,
  deleteNode,
  createChoice,
  updateChoice,
  deleteChoice,
  getGmOverview,
  getPlayersOverview,
  grantPlayerLocation,
  getCompendiumNpcs,
  getCompendiumLocations,
  getCompendiumEquipments
} from "../controllers/GmStoryController";

// Overview & Monitor
router.get("/dashboard/overview", getGmOverview);
router.get("/players", getPlayersOverview);
router.post("/players/:characterId/locations", grantPlayerLocation);

// Compêndio Canônico
router.get("/compendium/npcs", getCompendiumNpcs);
router.get("/compendium/locations", getCompendiumLocations);
router.get("/compendium/equipments", getCompendiumEquipments);

router.get("/story/adventures", listAdventures);
router.get("/story/adventures/:id", getAdventureDetail);
router.post("/story/adventures", createAdventure);
router.put("/story/adventures/:id", updateAdventure);
router.delete("/story/adventures/:id", deleteAdventure);

router.post("/story/nodes", createNode);
router.put("/story/nodes/:id", updateNode);
router.delete("/story/nodes/:id", deleteNode);

router.post("/story/choices", createChoice);
router.put("/story/choices/:id", updateChoice);
router.delete("/story/choices/:id", deleteChoice);

// ==================== INCURSÕES & CAÇADAS (AFK) ====================
import {
  listMissions,
  getMissionDetail,
  createMission,
  updateMission,
  deleteMission,
  createAction,
  updateAction,
  deleteAction
} from "../controllers/GmMissionIdleController";

router.get("/missions-idle", listMissions);
router.get("/missions-idle/:id", getMissionDetail);
router.post("/missions-idle", createMission);
router.put("/missions-idle/:id", updateMission);
router.delete("/missions-idle/:id", deleteMission);

router.post("/missions-idle/:missionId/actions", createAction);
router.put("/missions-idle/actions/:actionId", updateAction);
router.delete("/missions-idle/actions/:actionId", deleteAction);

export default router;

