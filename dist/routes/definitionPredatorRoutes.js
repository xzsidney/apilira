"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionPredatorController_1 = require("../controllers/definitionPredatorController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionPredatorController_1.createDefinitionPredator);
router.get('/', definitionPredatorController_1.getAllDefinitionPredators);
router.get('/:id', definitionPredatorController_1.getDefinitionPredatorById);
router.put('/:id', definitionPredatorController_1.updateDefinitionPredator);
router.delete('/:id', definitionPredatorController_1.deleteDefinitionPredator);
exports.default = router;
