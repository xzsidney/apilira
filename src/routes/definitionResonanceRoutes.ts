import { Router } from 'express';
import {
  createDefinitionResonance,
  getAllDefinitionResonances,
  getDefinitionResonanceById,
  updateDefinitionResonance,
  deleteDefinitionResonance
} from '../controllers/definitionResonanceController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionResonance);
router.get('/', getAllDefinitionResonances);
router.get('/:id', getDefinitionResonanceById);
router.put('/:id', updateDefinitionResonance);
router.delete('/:id', deleteDefinitionResonance);

export default router;
