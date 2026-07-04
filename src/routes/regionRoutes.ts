import { Router } from "express";
import {
  getRegions,
  createRegion,
  updateRegion,
  deleteRegion,
} from "../controllers/regionController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region hierarchy management
 */

/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: List all regions
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: List of regions
 */
router.get("/", getRegions);

/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Create a new region
 *     tags: [Regions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: integer
 *               description:
 *                 type: string
 *               dangerLevel:
 *                 type: integer
 *               parentRegionId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", createRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Update a region
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: integer
 *               description:
 *                 type: string
 *               dangerLevel:
 *                 type: integer
 *               parentRegionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", updateRegion);

/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Delete a region
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted
 */
router.delete("/:id", deleteRegion);

export default router;
