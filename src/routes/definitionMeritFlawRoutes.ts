import { Router } from 'express';
import {
  createDefinitionMeritFlaw,
  getAllDefinitionMeritFlaws,
  getDefinitionMeritFlawById,
  updateDefinitionMeritFlaw,
  deleteDefinitionMeritFlaw
} from '../controllers/definitionMeritFlawController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionMeritFlaw);
router.get('/', getAllDefinitionMeritFlaws);
router.get('/:id', getDefinitionMeritFlawById);
router.put('/:id', updateDefinitionMeritFlaw);
router.delete('/:id', deleteDefinitionMeritFlaw);

export default router;
