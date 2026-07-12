import { Router } from 'express';
import {
  createDefinitionDiscipline,
  getAllDefinitionDisciplines,
  getDefinitionDisciplineById,
  updateDefinitionDiscipline,
  deleteDefinitionDiscipline
} from '../controllers/definitionDisciplineController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionDiscipline);
router.get('/', getAllDefinitionDisciplines);
router.get('/:id', getDefinitionDisciplineById);
router.put('/:id', updateDefinitionDiscipline);
router.delete('/:id', deleteDefinitionDiscipline);

export default router;
