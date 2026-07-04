import { Router } from 'express';
import { createScene, getScenes } from '../controllers/sceneController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Scenes
 *   description: Acervo global de Cenas
 */

/**
 * @swagger
 * /api/scenes:
 *   post:
 *     summary: Cria uma nova cena avulsa no acervo
 *     tags: [Scenes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sceneIdentifier:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               audioUrl:
 *                 type: string
 *               apiConsequences:
 *                 type: object
 *     responses:
 *       201:
 *         description: Cena criada
 */
router.post('/', createScene);

/**
 * @swagger
 * /api/scenes:
 *   get:
 *     summary: Lista todas as cenas do acervo global
 *     tags: [Scenes]
 *     responses:
 *       200:
 *         description: Lista de Cenas
 */
router.get('/', getScenes);

export default router;
