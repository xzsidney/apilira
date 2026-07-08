"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const powerDefinitionController_1 = require("../controllers/powerDefinitionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Power Definitions
 *   description: Global catalog of powers (Disciplines, Spheres, Gifts)
 */
/**
 * @swagger
 * /api/power-definitions:
 *   get:
 *     summary: List all power definitions
 *     tags: [Power Definitions]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Game style to filter (e.g. VAMPIRE)
 *     responses:
 *       200:
 *         description: A list of powers
 */
router.get("/", powerDefinitionController_1.getPowerDefinitions);
/**
 * @swagger
 * /api/power-definitions:
 *   post:
 *     summary: Create a new power definition (Global Catalog)
 *     tags: [Power Definitions]
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
 *               type:
 *                 type: string
 *               powerLevels:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     level:
 *                       type: integer
 *                     name:
 *                       type: string
 *     responses:
 *       201:
 *         description: Created successfully
 */
router.post("/", powerDefinitionController_1.createPowerDefinition);
/**
 * @swagger
 * /api/power-definitions/{id}:
 *   put:
 *     summary: Update a power definition
 *     tags: [Power Definitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Updated successfully
 */
router.put("/:id", powerDefinitionController_1.updatePowerDefinition);
/**
 * @swagger
 * /api/power-definitions/{id}:
 *   delete:
 *     summary: Delete a power definition
 *     tags: [Power Definitions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deleted successfully
 */
router.delete("/:id", powerDefinitionController_1.deletePowerDefinition);
exports.default = router;
