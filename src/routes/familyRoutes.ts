import { Router } from 'express';
import { FamilyController } from '../controllers/familyController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rotas abertas/autenticadas para os heróis da família
router.get('/members', FamilyController.getMembers);
router.get('/my-characters', authMiddleware, FamilyController.getMyCharacters);
router.post('/claim-character', authMiddleware, FamilyController.claimCharacter);
router.post('/create-character', authMiddleware, FamilyController.createCharacter);
router.post('/character/update-stats', authMiddleware, FamilyController.updateCharacterStats);
router.post('/character/update-avatar', authMiddleware, FamilyController.updateAvatar);
router.get('/character/me', authMiddleware, FamilyController.getCharacter);
router.get('/character/:id', FamilyController.getCharacter);
router.get('/tasks', FamilyController.getTasks);
router.post('/tasks/complete', FamilyController.requestCompleteTask);

// Batalhas e Masmorras
router.get('/battle/active', FamilyController.getActiveBattle);

// Loja e Recompensas Reais
router.get('/shop', FamilyController.getShopItems);
router.post('/shop/buy', FamilyController.buyItem);

// Radar da Casa e Vizinhança
router.get('/locations', FamilyController.getLocations);

// Centro de Foco & Missão Ativa
router.post('/missions/start', authMiddleware, FamilyController.startActiveMission);
router.get('/missions/current', authMiddleware, FamilyController.getCurrentActiveMission);
router.post('/missions/complete', authMiddleware, FamilyController.completeActiveMission);

// Contos & Livro-Jogo Solo
router.get('/stories', FamilyController.getStoryAdventures);
router.get('/stories/:adventureId/node/:nodeId', FamilyController.getStoryNode);
router.post('/stories/choice', authMiddleware, FamilyController.executeStoryChoice);

// Mural do Clã & Conquistas
router.get('/feed', FamilyController.getFamilyFeed);

// Rotas do Painel dos Pais / Mestre da Família
router.get('/master/pending-tasks', FamilyController.getPendingTasks);
router.post('/master/tasks/approve', FamilyController.approveTask);
router.post('/master/tasks/reject', FamilyController.rejectTask);
router.post('/master/tasks/create', FamilyController.createTask);

export default router;
