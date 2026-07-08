import { Router } from "express";
import {
  createCharacter,
  listCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
} from "../controllers/characterController";
import {
  getCharacterAttributes,
  assignCharacterAttribute,
  updateCharacterAttribute,
  unassignCharacterAttribute
} from "../controllers/attributeController";
import {
  getCharacterItems,
  assignCharacterItem,
  updateCharacterItem,
  unassignCharacterItem
} from "../controllers/itemController";
import {
  getCharacterSkills,
  assignCharacterSkill,
  updateCharacterSkill,
  unassignCharacterSkill
} from "../controllers/skillController";
import {
  getCharacterMeritFlaws,
  assignCharacterMeritFlaw,
  updateCharacterMeritFlaw,
  unassignCharacterMeritFlaw
} from "../controllers/meritFlawController";
import {
  getCharacterStatuses,
  updateCharacterStatus
} from "../controllers/statusController";
import {
  getCharacterPowers,
  assignCharacterPower,
  updateCharacterPower,
  unassignCharacterPower
} from "../controllers/powerController";
import { uploadAvatarMiddleware, uploadCharacterAvatar } from "../controllers/uploadController";
import { authMiddleware } from "../middlewares/authMiddleware";

/**
 * @swagger
 * tags:
 *   name: Characters
 *   description: Endpoints for managing player characters
 */

const router = Router();

// All character routes require authentication
router.use(authMiddleware);

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
router.post("/", createCharacter);

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
router.get("/", listCharacters);

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
router.get("/:id", getCharacter);

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
router.put("/:id", updateCharacter);

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
router.delete("/:id", deleteCharacter);

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
router.post("/:id/avatar", uploadAvatarMiddleware, uploadCharacterAvatar);

// Nested routes for attributes
router.get("/:characterId/attributes", getCharacterAttributes);
router.post("/:characterId/attributes", assignCharacterAttribute);
router.put("/:characterId/attributes/:id", updateCharacterAttribute);
router.delete("/:characterId/attributes/:id", unassignCharacterAttribute);

// Nested routes for items
router.get("/:characterId/items", getCharacterItems);
router.post("/:characterId/items", assignCharacterItem);
router.put("/:characterId/items/:id", updateCharacterItem);
router.delete("/:characterId/items/:id", unassignCharacterItem);

// Nested routes for skills
router.get("/:characterId/skills", getCharacterSkills);
router.post("/:characterId/skills", assignCharacterSkill);
router.put("/:characterId/skills/:id", updateCharacterSkill);
router.delete("/:characterId/skills/:id", unassignCharacterSkill);

// Nested routes for merits/flaws
router.get("/:characterId/merits-flaws", getCharacterMeritFlaws);
router.post("/:characterId/merits-flaws", assignCharacterMeritFlaw);
router.put("/:characterId/merits-flaws/:id", updateCharacterMeritFlaw);
router.delete("/:characterId/merits-flaws/:id", unassignCharacterMeritFlaw);

// Nested routes for statuses
router.get("/:characterId/statuses", getCharacterStatuses);
router.put("/:characterId/statuses/:id", updateCharacterStatus);

// Nested routes for powers
router.get("/:characterId/powers", getCharacterPowers);
router.post("/:characterId/powers", assignCharacterPower);
router.put("/:characterId/powers/:id", updateCharacterPower);
router.delete("/:characterId/powers/:id", unassignCharacterPower);

export default router;
