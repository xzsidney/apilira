"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const familyController_1 = require("../controllers/familyController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Rotas abertas/autenticadas para os heróis da família
router.get('/members', familyController_1.FamilyController.getMembers);
router.get('/character/me', authMiddleware_1.authMiddleware, familyController_1.FamilyController.getCharacter);
router.get('/character/:id', familyController_1.FamilyController.getCharacter);
router.get('/tasks', familyController_1.FamilyController.getTasks);
router.post('/tasks/complete', familyController_1.FamilyController.requestCompleteTask);
// Batalhas e Masmorras
router.get('/battle/active', familyController_1.FamilyController.getActiveBattle);
// Loja e Recompensas Reais
router.get('/shop', familyController_1.FamilyController.getShopItems);
router.post('/shop/buy', familyController_1.FamilyController.buyItem);
// Rotas do Painel dos Pais / Mestre da Família
router.get('/master/pending-tasks', familyController_1.FamilyController.getPendingTasks);
router.post('/master/tasks/approve', familyController_1.FamilyController.approveTask);
router.post('/master/tasks/reject', familyController_1.FamilyController.rejectTask);
router.post('/master/tasks/create', familyController_1.FamilyController.createTask);
exports.default = router;
