import { Router } from "express";
import {
  getVampireResonances,
  getVampireResonanceById,
  createVampireResonance,
  updateVampireResonance,
  deleteVampireResonance
} from "../controllers/vampireResonanceDefinitionController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", getVampireResonances);
router.get("/:id", getVampireResonanceById);

router.post("/", authMiddleware, createVampireResonance);
router.put("/:id", authMiddleware, updateVampireResonance);
router.delete("/:id", authMiddleware, deleteVampireResonance);

export default router;
