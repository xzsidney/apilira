import { Router } from "express";
import {
  getStatusDefinitions,
  createStatusDefinition,
  updateStatusDefinition,
  deleteStatusDefinition,
} from "../controllers/statusDefinitionController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Status Definitions
 *   description: Global catalog of dynamic statuses (Hunger, Humanity, Willpower)
 */

/**
 * @swagger
 * /api/status-definitions:
 *   get:
 *     summary: List all status definitions
 *     tags: [Status Definitions]
 *     parameters:
 *       - in: query
 *         name: gameStyle
 *         schema:
 *           type: string
 *         description: Filter by game style
 *     responses:
 *       200:
 *         description: List of statuses
 */
router.get("/", getStatusDefinitions);

/**
 * @swagger
 * /api/status-definitions:
 *   post:
 *     summary: Create a new status definition
 *     tags: [Status Definitions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gameStyle:
 *                 type: string
 *               maxValue:
 *                 type: integer
 *               defaultInitialValue:
 *                 type: integer
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", createStatusDefinition);

/**
 * @swagger
 * /api/status-definitions/{id}:
 *   put:
 *     summary: Update status definition
 *     tags: [Status Definitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", updateStatusDefinition);

/**
 * @swagger
 * /api/status-definitions/{id}:
 *   delete:
 *     summary: Delete status definition
 *     tags: [Status Definitions]
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
router.delete("/:id", deleteStatusDefinition);

export default router;
