import { Router } from 'express';
import {
  createDefinitionArchetype,
  getAllDefinitionArchetypes,
  getDefinitionArchetypeById,
  updateDefinitionArchetype,
  deleteDefinitionArchetype
} from '../controllers/definitionArchetypeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas de definição de arquétipos exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionArchetype);
router.get('/', getAllDefinitionArchetypes);
router.get('/:id', getDefinitionArchetypeById);
router.put('/:id', updateDefinitionArchetype);
router.delete('/:id', deleteDefinitionArchetype);

export default router;
