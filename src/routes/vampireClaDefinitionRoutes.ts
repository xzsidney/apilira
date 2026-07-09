import { Router } from "express";
import { getVampireClas } from "../controllers/vampireClaDefinitionController";

const router = Router();

router.get("/", getVampireClas);

export default router;
