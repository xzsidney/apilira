import { Router } from 'express';
import { FamilyController } from '../controllers/familyController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Rotas abertas/autenticadas para os heróis da família
router.get('/members', FamilyController.getMembers);
router.get('/character/me', authMiddleware, FamilyController.getCharacter);
router.get('/character/:id', FamilyController.getCharacter);
router.get('/tasks', FamilyController.getTasks);
router.post('/tasks/complete', FamilyController.requestCompleteTask);

// Batalhas e Masmorras
router.get('/battle/active', FamilyController.getActiveBattle);

// Loja e Recompensas Reais
router.get('/shop', FamilyController.getShopItems);
router.post('/shop/buy', FamilyController.buyItem);

// Rotas do Painel dos Pais / Mestre da Família
router.get('/master/pending-tasks', FamilyController.getPendingTasks);
router.post('/master/tasks/approve', FamilyController.approveTask);
router.post('/master/tasks/reject', FamilyController.rejectTask);
router.post('/master/tasks/create', FamilyController.createTask);

export default router;
