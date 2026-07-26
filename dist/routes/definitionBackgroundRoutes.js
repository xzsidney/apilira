"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionBackgroundController_1 = require("../controllers/definitionBackgroundController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionBackgroundController_1.createDefinitionBackground);
router.get('/', definitionBackgroundController_1.getAllDefinitionBackgrounds);
router.get('/:id', definitionBackgroundController_1.getDefinitionBackgroundById);
router.put('/:id', definitionBackgroundController_1.updateDefinitionBackground);
router.delete('/:id', definitionBackgroundController_1.deleteDefinitionBackground);
exports.default = router;
