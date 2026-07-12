import { Router } from 'express';
import {
  createDefinitionEquipment,
  getAllDefinitionEquipments,
  getDefinitionEquipmentById,
  updateDefinitionEquipment,
  deleteDefinitionEquipment
} from '../controllers/definitionEquipmentController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas exigem autenticação
router.use(authMiddleware);

router.post('/', createDefinitionEquipment);
router.get('/', getAllDefinitionEquipments);
router.get('/:id', getDefinitionEquipmentById);
router.put('/:id', updateDefinitionEquipment);
router.delete('/:id', deleteDefinitionEquipment);

export default router;
