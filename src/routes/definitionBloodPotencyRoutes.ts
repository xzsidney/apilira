import { Router } from 'express';
import {
  createDefinitionBloodPotency,
  getAllDefinitionBloodPotencies,
  getDefinitionBloodPotencyById,
  updateDefinitionBloodPotency,
  deleteDefinitionBloodPotency
} from '../controllers/definitionBloodPotencyController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionBloodPotency);
router.get('/', getAllDefinitionBloodPotencies);
router.get('/:id', getDefinitionBloodPotencyById);
router.put('/:id', updateDefinitionBloodPotency);
router.delete('/:id', deleteDefinitionBloodPotency);

export default router;
