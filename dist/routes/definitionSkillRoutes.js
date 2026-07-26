"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionSkillController_1 = require("../controllers/definitionSkillController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas de definição de habilidades exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionSkillController_1.createDefinitionSkill);
router.get('/', definitionSkillController_1.getAllDefinitionSkills);
router.get('/:id', definitionSkillController_1.getDefinitionSkillById);
router.put('/:id', definitionSkillController_1.updateDefinitionSkill);
router.delete('/:id', definitionSkillController_1.deleteDefinitionSkill);
exports.default = router;
