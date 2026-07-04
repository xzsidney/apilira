import { Router } from 'express';
import {
  getHavenDefinitions,
  getHavenDefinitionById,
  createHavenDefinition,
  updateHavenDefinition,
  deleteHavenDefinition
} from '../controllers/havenDefinitionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: HavenDefinitions
 *   description: API for managing haven definitions
 */

/**
 * @swagger
 * /api/havens:
 *   get:
 *     summary: Retrieve a list of haven definitions
 *     tags: [HavenDefinitions]
 *     responses:
 *       200:
 *         description: A list of haven definitions
 */
router.get('/', getHavenDefinitions);

/**
 * @swagger
 * /api/havens/{id}:
 *   get:
 *     summary: Get a haven definition by ID
 *     tags: [HavenDefinitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Haven definition found
 *       404:
 *         description: Haven definition not found
 */
router.get('/:id', getHavenDefinitionById);

/**
 * @swagger
 * /api/havens:
 *   post:
 *     summary: Create a new haven definition
 *     tags: [HavenDefinitions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               securityLevel:
 *                 type: number
 *               minionCapacity:
 *                 type: number
 *               allyCapacity:
 *                 type: number
 *               requiredBackgroundId:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       201:
 *         description: Haven definition created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createHavenDefinition);

/**
 * @swagger
 * /api/havens/{id}:
 *   put:
 *     summary: Update an existing haven definition
 *     tags: [HavenDefinitions]
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
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               securityLevel:
 *                 type: number
 *               minionCapacity:
 *                 type: number
 *               allyCapacity:
 *                 type: number
 *               requiredBackgroundId:
 *                 type: string
 *                 nullable: true
 *     responses:
 *       200:
 *         description: Haven definition updated successfully
 *       400:
 *         description: Validation error
 */
router.put('/:id', updateHavenDefinition);

/**
 * @swagger
 * /api/havens/{id}:
 *   delete:
 *     summary: Delete a haven definition
 *     tags: [HavenDefinitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Haven definition deleted successfully
 */
router.delete('/:id', deleteHavenDefinition);

export default router;
