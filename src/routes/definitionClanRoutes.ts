import { Router } from 'express';
import {
  createDefinitionClan,
  getAllDefinitionClans,
  getDefinitionClanById,
  updateDefinitionClan,
  deleteDefinitionClan
} from '../controllers/definitionClanController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionClan);
router.get('/', getAllDefinitionClans);
router.get('/:id', getDefinitionClanById);
router.put('/:id', updateDefinitionClan);
router.delete('/:id', deleteDefinitionClan);

export default router;
