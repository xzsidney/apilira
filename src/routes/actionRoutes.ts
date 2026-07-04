import { Router } from 'express';
import { createAction, getActions, linkActionToScene } from '../controllers/actionController';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Actions
 *   description: Acervo global de Ações e Links
 */

/**
 * @swagger
 * /api/actions:
 *   post:
 *     summary: Cria uma nova ação avulsa no acervo
 *     tags: [Actions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               actionIdentifier:
 *                 type: string
 *               focus:
 *                 type: string
 *               text:
 *                 type: string
 *               testStr:
 *                 type: string
 *               difficulty:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ação criada
 */
router.post('/', createAction);

/**
 * @swagger
 * /api/actions:
 *   get:
 *     summary: Lista todas as ações do acervo global
 *     tags: [Actions]
 *     responses:
 *       200:
 *         description: Lista de Ações
 */
router.get('/', getActions);

/**
 * @swagger
 * /api/actions/link/{sceneId}/{actionId}:
 *   post:
 *     summary: Conecta uma Ação a uma Cena (M:N) passando os Destinos
 *     tags: [Actions]
 *     parameters:
 *       - in: path
 *         name: sceneId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID (UUID) da Cena
 *       - in: path
 *         name: actionId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID (UUID) da Ação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               successSceneId:
 *                 type: string
 *               failureSceneId:
 *                 type: string
 *               order:
 *                 type: number
 *     responses:
 *       201:
 *         description: Associação M:N criada com sucesso
 */
router.post('/link/:sceneId/:actionId', linkActionToScene);

export default router;
