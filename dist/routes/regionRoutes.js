"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const regionController_1 = require("../controllers/regionController");
const router = (0, express_1.Router)();
/**
 * @swagger
 * tags:
 *   name: Regions
 *   description: Region hierarchy management
 */
/**
 * @swagger
 * /api/regions:
 *   get:
 *     summary: List all regions
 *     tags: [Regions]
 *     responses:
 *       200:
 *         description: List of regions
 */
router.get("/", regionController_1.getRegions);
/**
 * @swagger
 * /api/regions:
 *   post:
 *     summary: Create a new region
 *     tags: [Regions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: integer
 *               description:
 *                 type: string
 *               dangerLevel:
 *                 type: integer
 *               parentRegionId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 */
router.post("/", regionController_1.createRegion);
/**
 * @swagger
 * /api/regions/{id}:
 *   put:
 *     summary: Update a region
 *     tags: [Regions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: integer
 *               description:
 *                 type: string
 *               dangerLevel:
 *                 type: integer
 *               parentRegionId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated
 */
router.put("/:id", regionController_1.updateRegion);
/**
 * @swagger
 * /api/regions/{id}:
 *   delete:
 *     summary: Delete a region
 *     tags: [Regions]
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
router.delete("/:id", regionController_1.deleteRegion);
exports.default = router;
