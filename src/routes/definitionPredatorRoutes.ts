import { Router } from 'express';
import {
  createDefinitionPredator,
  getAllDefinitionPredators,
  getDefinitionPredatorById,
  updateDefinitionPredator,
  deleteDefinitionPredator
} from '../controllers/definitionPredatorController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionPredator);
router.get('/', getAllDefinitionPredators);
router.get('/:id', getDefinitionPredatorById);
router.put('/:id', updateDefinitionPredator);
router.delete('/:id', deleteDefinitionPredator);

export default router;
