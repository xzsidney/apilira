import { Router } from 'express';
import {
  getBackgroundDefinitions,
  getBackgroundDefinitionById,
  createBackgroundDefinition,
  updateBackgroundDefinition,
  deleteBackgroundDefinition
} from '../controllers/backgroundDefinitionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: BackgroundDefinitions
 *   description: API for managing background definitions
 */

/**
 * @swagger
 * /api/backgrounds:
 *   get:
 *     summary: Retrieve a list of background definitions
 *     tags: [BackgroundDefinitions]
 *     responses:
 *       200:
 *         description: A list of background definitions
 */
router.get('/', getBackgroundDefinitions);

/**
 * @swagger
 * /api/backgrounds/{id}:
 *   get:
 *     summary: Get a background definition by ID
 *     tags: [BackgroundDefinitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The background definition ID
 *     responses:
 *       200:
 *         description: The background definition found by ID
 *       404:
 *         description: BackgroundDefinition not found
 */
router.get('/:id', getBackgroundDefinitionById);

/**
 * @swagger
 * /api/backgrounds:
 *   post:
 *     summary: Create a new background definition
 *     tags: [BackgroundDefinitions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - gameStyle
 *             properties:
 *               name:
 *                 type: string
 *               gameStyle:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Background definition created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createBackgroundDefinition);

/**
 * @swagger
 * /api/backgrounds/{id}:
 *   put:
 *     summary: Update an existing background definition
 *     tags: [BackgroundDefinitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
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
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Background definition updated successfully
 *       400:
 *         description: Validation error
 */
router.put('/:id', updateBackgroundDefinition);

/**
 * @swagger
 * /api/backgrounds/{id}:
 *   delete:
 *     summary: Delete a background definition
 *     tags: [BackgroundDefinitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Background definition deleted successfully
 */
router.delete('/:id', deleteBackgroundDefinition);

export default router;
