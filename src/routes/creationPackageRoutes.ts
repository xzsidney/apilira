import { Router } from "express";
import { getAllCreationPackages } from "../controllers/creationPackageController";

const router = Router();

// GET /api/creation-packages
router.get("/", getAllCreationPackages);

export default router;
