"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const familyController_1 = require("../controllers/familyController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Rotas abertas/autenticadas para os heróis da família
router.get('/members', familyController_1.FamilyController.getMembers);
router.get('/my-characters', authMiddleware_1.authMiddleware, familyController_1.FamilyController.getMyCharacters);
router.post('/claim-character', authMiddleware_1.authMiddleware, familyController_1.FamilyController.claimCharacter);
router.post('/create-character', authMiddleware_1.authMiddleware, familyController_1.FamilyController.createCharacter);
router.post('/character/update-stats', authMiddleware_1.authMiddleware, familyController_1.FamilyController.updateCharacterStats);
router.post('/character/update-avatar', authMiddleware_1.authMiddleware, familyController_1.FamilyController.updateAvatar);
router.post('/character/change-class', authMiddleware_1.authMiddleware, familyController_1.FamilyController.changeClass);
router.post('/character/recover-infirmary', authMiddleware_1.authMiddleware, familyController_1.FamilyController.recoverFromInfirmary);
router.get('/character/me', authMiddleware_1.authMiddleware, familyController_1.FamilyController.getCharacter);
router.get('/character/:id', familyController_1.FamilyController.getCharacter);
// Árvore de Habilidades & Builds
router.get('/skills/tree', authMiddleware_1.authMiddleware, familyController_1.FamilyController.getSkillTree);
router.post('/skills/buy', authMiddleware_1.authMiddleware, familyController_1.FamilyController.buySkill);
router.post('/skills/equip', authMiddleware_1.authMiddleware, familyController_1.FamilyController.equipSkill);
router.get('/tasks', familyController_1.FamilyController.getTasks);
router.post('/tasks/complete', familyController_1.FamilyController.requestCompleteTask);
// Batalhas e Masmorras
router.get('/battle/active', familyController_1.FamilyController.getActiveBattle);
// Loja e Recompensas Reais
router.get('/shop', familyController_1.FamilyController.getShopItems);
router.post('/shop/buy', familyController_1.FamilyController.buyItem);
// Radar da Casa e Vizinhança
router.get('/locations', familyController_1.FamilyController.getLocations);
// Centro de Foco & Missão Ativa
router.post('/missions/start', authMiddleware_1.authMiddleware, familyController_1.FamilyController.startActiveMission);
router.get('/missions/current', authMiddleware_1.authMiddleware, familyController_1.FamilyController.getCurrentActiveMission);
router.post('/missions/complete', authMiddleware_1.authMiddleware, familyController_1.FamilyController.completeActiveMission);
// Contos & Livro-Jogo Solo
router.get('/stories', familyController_1.FamilyController.getStoryAdventures);
router.get('/stories/:adventureId/node/:nodeId', familyController_1.FamilyController.getStoryNode);
router.post('/stories/choice', authMiddleware_1.authMiddleware, familyController_1.FamilyController.executeStoryChoice);
// Mural do Clã & Conquistas
router.get('/feed', familyController_1.FamilyController.getFamilyFeed);
// Rotas do Painel dos Pais / Mestre da Família
router.get('/master/pending-tasks', familyController_1.FamilyController.getPendingTasks);
router.post('/master/tasks/approve', familyController_1.FamilyController.approveTask);
router.post('/master/tasks/reject', familyController_1.FamilyController.rejectTask);
router.post('/master/tasks/create', familyController_1.FamilyController.createTask);
exports.default = router;
