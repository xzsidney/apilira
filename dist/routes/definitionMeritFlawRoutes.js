"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionMeritFlawController_1 = require("../controllers/definitionMeritFlawController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionMeritFlawController_1.createDefinitionMeritFlaw);
router.get('/', definitionMeritFlawController_1.getAllDefinitionMeritFlaws);
router.get('/:id', definitionMeritFlawController_1.getDefinitionMeritFlawById);
router.put('/:id', definitionMeritFlawController_1.updateDefinitionMeritFlaw);
router.delete('/:id', definitionMeritFlawController_1.deleteDefinitionMeritFlaw);
exports.default = router;
