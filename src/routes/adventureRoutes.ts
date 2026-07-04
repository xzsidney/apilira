import { Router } from 'express';
import { createAdventure, getAdventures, getAdventureById } from '../controllers/adventureController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Adventures
 *   description: Motor de Aventuras Interativas M:N
 */

/**
 * @swagger
 * /api/adventures:
 *   post:
 *     summary: Cria uma nova aventura base no acervo
 *     tags: [Adventures]
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
 *               objective:
 *                 type: string
 *     responses:
 *       201:
 *         description: Aventura criada com sucesso
 */
router.post('/', createAdventure);

/**
 * @swagger
 * /api/adventures:
 *   get:
 *     summary: Lista todas as aventuras do acervo
 *     tags: [Adventures]
 *     responses:
 *       200:
 *         description: Lista de aventuras
 */
router.get('/', getAdventures);

/**
 * @swagger
 * /api/adventures/{id}:
 *   get:
 *     summary: Busca uma aventura específica e sua ramificação completa de Cenas e Ações
 *     tags: [Adventures]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da aventura
 *     responses:
 *       200:
 *         description: Árvore completa da aventura
 */
router.get('/:id', getAdventureById);

export default router;
