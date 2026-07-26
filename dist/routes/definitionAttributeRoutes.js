"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionAttributeController_1 = require("../controllers/definitionAttributeController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas de definição de atributos exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionAttributeController_1.createDefinitionAttribute);
router.get('/', definitionAttributeController_1.getAllDefinitionAttributes);
router.get('/:id', definitionAttributeController_1.getDefinitionAttributeById);
router.put('/:id', definitionAttributeController_1.updateDefinitionAttribute);
router.delete('/:id', definitionAttributeController_1.deleteDefinitionAttribute);
exports.default = router;
