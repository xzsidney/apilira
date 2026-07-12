import { Router } from 'express';
import {
  createDefinitionSkill,
  getAllDefinitionSkills,
  getDefinitionSkillById,
  updateDefinitionSkill,
  deleteDefinitionSkill
} from '../controllers/definitionSkillController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas de definição de habilidades exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionSkill);
router.get('/', getAllDefinitionSkills);
router.get('/:id', getDefinitionSkillById);
router.put('/:id', updateDefinitionSkill);
router.delete('/:id', deleteDefinitionSkill);

export default router;
