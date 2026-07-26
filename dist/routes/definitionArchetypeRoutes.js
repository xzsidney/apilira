"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionArchetypeController_1 = require("../controllers/definitionArchetypeController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas de definição de arquétipos exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionArchetypeController_1.createDefinitionArchetype);
router.get('/', definitionArchetypeController_1.getAllDefinitionArchetypes);
router.get('/:id', definitionArchetypeController_1.getDefinitionArchetypeById);
router.put('/:id', definitionArchetypeController_1.updateDefinitionArchetype);
router.delete('/:id', definitionArchetypeController_1.deleteDefinitionArchetype);
exports.default = router;
