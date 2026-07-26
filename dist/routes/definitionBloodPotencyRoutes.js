"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionBloodPotencyController_1 = require("../controllers/definitionBloodPotencyController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionBloodPotencyController_1.createDefinitionBloodPotency);
router.get('/', definitionBloodPotencyController_1.getAllDefinitionBloodPotencies);
router.get('/:id', definitionBloodPotencyController_1.getDefinitionBloodPotencyById);
router.put('/:id', definitionBloodPotencyController_1.updateDefinitionBloodPotency);
router.delete('/:id', definitionBloodPotencyController_1.deleteDefinitionBloodPotency);
exports.default = router;
