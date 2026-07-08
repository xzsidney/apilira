"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const attributeDefinitionController_1 = require("../controllers/attributeDefinitionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Attribute Definitions
 *   description: Global catalog of base attributes
 */
/**
 * @swagger
 * /api/attribute-definitions:
 *   get:
 *     summary: List all attribute definitions
 *     tags: [Attribute Definitions]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by game style/type (e.g. UNIVERSAL)
 *     responses:
 *       200:
 *         description: List of attributes
 */
router.get("/", attributeDefinitionController_1.getAttributeDefinitions);
/**
 * @swagger
 * /api/attribute-definitions:
 *   post:
 *     summary: Create a new attribute definition
 *     tags: [Attribute Definitions]
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
router.post("/", attributeDefinitionController_1.createAttributeDefinition);
/**
 * @swagger
 * /api/attribute-definitions/{id}:
 *   put:
 *     summary: Update attribute definition
 *     tags: [Attribute Definitions]
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
router.put("/:id", attributeDefinitionController_1.updateAttributeDefinition);
/**
 * @swagger
 * /api/attribute-definitions/{id}:
 *   delete:
 *     summary: Delete attribute definition
 *     tags: [Attribute Definitions]
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
router.delete("/:id", attributeDefinitionController_1.deleteAttributeDefinition);
exports.default = router;
