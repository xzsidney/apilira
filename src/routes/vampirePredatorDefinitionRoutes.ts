import { Router } from "express";
import {
  getVampirePredators,
  getVampirePredatorById,
  createVampirePredator,
  updateVampirePredator,
  deleteVampirePredator
} from "../controllers/vampirePredatorDefinitionController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

// Apenas ler (Público ou logado, dependendo da sua política atual de rotas)
router.get("/", getVampirePredators);
router.get("/:id", getVampirePredatorById);

router.post("/", authMiddleware, createVampirePredator);
router.put("/:id", authMiddleware, updateVampirePredator);
router.delete("/:id", authMiddleware, deleteVampirePredator);

export default router;
