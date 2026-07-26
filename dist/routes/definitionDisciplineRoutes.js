"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionDisciplineController_1 = require("../controllers/definitionDisciplineController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionDisciplineController_1.createDefinitionDiscipline);
router.get('/', definitionDisciplineController_1.getAllDefinitionDisciplines);
router.get('/:id', definitionDisciplineController_1.getDefinitionDisciplineById);
router.put('/:id', definitionDisciplineController_1.updateDefinitionDiscipline);
router.delete('/:id', definitionDisciplineController_1.deleteDefinitionDiscipline);
exports.default = router;
