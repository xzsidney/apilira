"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const meritFlawDefinitionController_1 = require("../controllers/meritFlawDefinitionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Merit Flaw Definitions
 *   description: Global catalog of Merits (Vantagens) and Flaws (Defeitos)
 */
/**
 * @swagger
 * /api/merit-flaw-definitions:
 *   get:
 *     summary: List all merit and flaw definitions
 *     tags: [Merit Flaw Definitions]
 *     parameters:
 *       - in: query
 *         name: gameStyle
 *         schema:
 *           type: string
 *         description: Filter by game style
 *     responses:
 *       200:
 *         description: List of merits and flaws
 */
router.get("/", meritFlawDefinitionController_1.getMeritFlawDefinitions);
/**
 * @swagger
 * /api/merit-flaw-definitions:
 *   post:
 *     summary: Create a new merit or flaw definition
 *     tags: [Merit Flaw Definitions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 description: MERIT or FLAW
 *               gameStyle:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", meritFlawDefinitionController_1.createMeritFlawDefinition);
/**
 * @swagger
 * /api/merit-flaw-definitions/{id}:
 *   put:
 *     summary: Update merit or flaw definition
 *     tags: [Merit Flaw Definitions]
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
router.put("/:id", meritFlawDefinitionController_1.updateMeritFlawDefinition);
/**
 * @swagger
 * /api/merit-flaw-definitions/{id}:
 *   delete:
 *     summary: Delete merit or flaw definition
 *     tags: [Merit Flaw Definitions]
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
router.delete("/:id", meritFlawDefinitionController_1.deleteMeritFlawDefinition);
exports.default = router;
