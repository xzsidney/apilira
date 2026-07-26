"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionClanController_1 = require("../controllers/definitionClanController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionClanController_1.createDefinitionClan);
router.get('/', definitionClanController_1.getAllDefinitionClans);
router.get('/:id', definitionClanController_1.getDefinitionClanById);
router.put('/:id', definitionClanController_1.updateDefinitionClan);
router.delete('/:id', definitionClanController_1.deleteDefinitionClan);
exports.default = router;
