"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionResonanceController_1 = require("../controllers/definitionResonanceController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionResonanceController_1.createDefinitionResonance);
router.get('/', definitionResonanceController_1.getAllDefinitionResonances);
router.get('/:id', definitionResonanceController_1.getDefinitionResonanceById);
router.put('/:id', definitionResonanceController_1.updateDefinitionResonance);
router.delete('/:id', definitionResonanceController_1.deleteDefinitionResonance);
exports.default = router;
