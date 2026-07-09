import { Router } from "express";
import {
  getVampirePredators,
  getVampirePredatorById,
  createVampirePredator,
  updateVampirePredator,
  deleteVampirePredator
} from "../controllers/vampirePredatorDefinitionController";
import { authMiddleware, requireAdmin } from "../middlewares/authMiddleware";

const router = Router();

// Apenas ler (Público ou logado, dependendo da sua política atual de rotas)
router.get("/", getVampirePredators);
router.get("/:id", getVampirePredatorById);

// Rotas de alteração geralmente exigem Admin, caso não tenha, pode retirar o requireAdmin
router.post("/", authMiddleware, requireAdmin, createVampirePredator);
router.put("/:id", authMiddleware, requireAdmin, updateVampirePredator);
router.delete("/:id", authMiddleware, requireAdmin, deleteVampirePredator);

export default router;
