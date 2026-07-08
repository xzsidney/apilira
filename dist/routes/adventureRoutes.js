"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adventureController_1 = require("../controllers/adventureController");
const router = (0, express_1.Router)();
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
router.post('/', adventureController_1.createAdventure);
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
router.get('/', adventureController_1.getAdventures);
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
router.get('/:id', adventureController_1.getAdventureById);
exports.default = router;
