"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const statusDefinitionController_1 = require("../controllers/statusDefinitionController");
const router = (0, express_1.Router)();
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
router.get("/", statusDefinitionController_1.getStatusDefinitions);
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
router.post("/", statusDefinitionController_1.createStatusDefinition);
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
router.put("/:id", statusDefinitionController_1.updateStatusDefinition);
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
router.delete("/:id", statusDefinitionController_1.deleteStatusDefinition);
exports.default = router;
