"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characterController_1 = require("../controllers/characterController");
const attributeController_1 = require("../controllers/attributeController");
const itemController_1 = require("../controllers/itemController");
const skillController_1 = require("../controllers/skillController");
const meritFlawController_1 = require("../controllers/meritFlawController");
const statusController_1 = require("../controllers/statusController");
const powerController_1 = require("../controllers/powerController");
const uploadController_1 = require("../controllers/uploadController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
/**
 * @swagger
 * tags:
 *   name: Characters
 *   description: Endpoints for managing player characters
 */
const router = (0, express_1.Router)();
// All character routes require authentication
router.use(authMiddleware_1.authMiddleware);
/**
 * @swagger
 * /api/characters:
 *   post:
 *     summary: Create a new character
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               gameStyle:
 *                 type: string
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Character created successfully
 *       400:
 *         description: Validation error
 */
router.post("/", characterController_1.createCharacter);
/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: List all characters owned by the logged in user
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of characters
 */
router.get("/", characterController_1.listCharacters);
/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     summary: Get a specific character by ID
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Character full data including nested arrays
 *       404:
 *         description: Character not found
 */
router.get("/:id", characterController_1.getCharacter);
/**
 * @swagger
 * /api/characters/{id}:
 *   put:
 *     summary: Update an existing character
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
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
 *     responses:
 *       200:
 *         description: Character updated successfully
 *       404:
 *         description: Character not found
 */
router.put("/:id", characterController_1.updateCharacter);
/**
 * @swagger
 * /api/characters/{id}:
 *   delete:
 *     summary: Delete a character
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Character deleted successfully
 */
router.delete("/:id", characterController_1.deleteCharacter);
/**
 * @swagger
 * /api/characters/{id}/avatar:
 *   post:
 *     summary: Upload character avatar image
 *     tags: [Characters]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               avatar:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Avatar updated successfully
 */
router.post("/:id/avatar", uploadController_1.uploadAvatarMiddleware, uploadController_1.uploadCharacterAvatar);
// Nested routes for attributes
router.get("/:characterId/attributes", attributeController_1.getCharacterAttributes);
router.post("/:characterId/attributes", attributeController_1.assignCharacterAttribute);
router.put("/:characterId/attributes/:id", attributeController_1.updateCharacterAttribute);
router.delete("/:characterId/attributes/:id", attributeController_1.unassignCharacterAttribute);
// Nested routes for items
router.get("/:characterId/items", itemController_1.getCharacterItems);
router.post("/:characterId/items", itemController_1.assignCharacterItem);
router.put("/:characterId/items/:id", itemController_1.updateCharacterItem);
router.delete("/:characterId/items/:id", itemController_1.unassignCharacterItem);
// Nested routes for skills
router.get("/:characterId/skills", skillController_1.getCharacterSkills);
router.post("/:characterId/skills", skillController_1.assignCharacterSkill);
router.put("/:characterId/skills/:id", skillController_1.updateCharacterSkill);
router.delete("/:characterId/skills/:id", skillController_1.unassignCharacterSkill);
// Nested routes for merits/flaws
router.get("/:characterId/merits-flaws", meritFlawController_1.getCharacterMeritFlaws);
router.post("/:characterId/merits-flaws", meritFlawController_1.assignCharacterMeritFlaw);
router.put("/:characterId/merits-flaws/:id", meritFlawController_1.updateCharacterMeritFlaw);
router.delete("/:characterId/merits-flaws/:id", meritFlawController_1.unassignCharacterMeritFlaw);
// Nested routes for statuses
router.get("/:characterId/statuses", statusController_1.getCharacterStatuses);
router.put("/:characterId/statuses/:id", statusController_1.updateCharacterStatus);
// Nested routes for powers
router.get("/:characterId/powers", powerController_1.getCharacterPowers);
router.post("/:characterId/powers", powerController_1.assignCharacterPower);
router.put("/:characterId/powers/:id", powerController_1.updateCharacterPower);
router.delete("/:characterId/powers/:id", powerController_1.unassignCharacterPower);
exports.default = router;
