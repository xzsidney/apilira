import { Router } from 'express';
import {
  createDefinitionAttribute,
  getAllDefinitionAttributes,
  getDefinitionAttributeById,
  updateDefinitionAttribute,
  deleteDefinitionAttribute
} from '../controllers/definitionAttributeController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas de definição de atributos exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionAttribute);
router.get('/', getAllDefinitionAttributes);
router.get('/:id', getDefinitionAttributeById);
router.put('/:id', updateDefinitionAttribute);
router.delete('/:id', deleteDefinitionAttribute);

export default router;
