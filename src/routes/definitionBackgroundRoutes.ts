import { Router } from 'express';
import {
  createDefinitionBackground,
  getAllDefinitionBackgrounds,
  getDefinitionBackgroundById,
  updateDefinitionBackground,
  deleteDefinitionBackground
} from '../controllers/definitionBackgroundController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionBackground);
router.get('/', getAllDefinitionBackgrounds);
router.get('/:id', getDefinitionBackgroundById);
router.put('/:id', updateDefinitionBackground);
router.delete('/:id', deleteDefinitionBackground);

export default router;
