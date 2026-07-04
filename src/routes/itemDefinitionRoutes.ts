import { Router } from "express";
import {
  getItemDefinitions,
  createItemDefinition,
  updateItemDefinition,
  deleteItemDefinition,
} from "../controllers/itemDefinitionController";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Item Definitions
 *   description: Global catalog of items, weapons, and equipment
 */

/**
 * @swagger
 * /api/item-definitions:
 *   get:
 *     summary: List all item definitions
 *     tags: [Item Definitions]
 *     responses:
 *       200:
 *         description: List of items
 */
router.get("/", getItemDefinitions);

/**
 * @swagger
 * /api/item-definitions:
 *   post:
 *     summary: Create a new item definition
 *     tags: [Item Definitions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               value:
 *                 type: number
 *               requirements:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", createItemDefinition);

/**
 * @swagger
 * /api/item-definitions/{id}:
 *   put:
 *     summary: Update item definition
 *     tags: [Item Definitions]
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
router.put("/:id", updateItemDefinition);

/**
 * @swagger
 * /api/item-definitions/{id}:
 *   delete:
 *     summary: Delete item definition
 *     tags: [Item Definitions]
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
router.delete("/:id", deleteItemDefinition);

export default router;
