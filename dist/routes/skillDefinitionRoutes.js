"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const skillDefinitionController_1 = require("../controllers/skillDefinitionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Skill Definitions
 *   description: Global catalog of skills (e.g. Athletics, Firearms)
 */
/**
 * @swagger
 * /api/skill-definitions:
 *   get:
 *     summary: List all skill definitions
 *     tags: [Skill Definitions]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by game style/type (e.g. UNIVERSAL)
 *     responses:
 *       200:
 *         description: List of skills
 */
router.get("/", skillDefinitionController_1.getSkillDefinitions);
/**
 * @swagger
 * /api/skill-definitions:
 *   post:
 *     summary: Create a new skill definition
 *     tags: [Skill Definitions]
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
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", skillDefinitionController_1.createSkillDefinition);
/**
 * @swagger
 * /api/skill-definitions/{id}:
 *   put:
 *     summary: Update skill definition
 *     tags: [Skill Definitions]
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
router.put("/:id", skillDefinitionController_1.updateSkillDefinition);
/**
 * @swagger
 * /api/skill-definitions/{id}:
 *   delete:
 *     summary: Delete skill definition
 *     tags: [Skill Definitions]
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
router.delete("/:id", skillDefinitionController_1.deleteSkillDefinition);
exports.default = router;
