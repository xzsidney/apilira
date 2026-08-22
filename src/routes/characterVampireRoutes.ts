import { Router } from 'express';
import {
  createCharacterVampire,
  getAllCharacterVampiresByUser,
  getAvailableSires,
  getCharacterVampireById,
  updateCharacterVampire,
  deleteCharacterVampire,
  awakenCharacterVampire,
  buyEquipment,
  toggleEquipEquipment
} from '../controllers/characterVampireController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas de personagem requerem estar logado
router.use(authMiddleware);

router.post('/', createCharacterVampire);
router.get('/my-characters', getAllCharacterVampiresByUser);
router.get('/sires', getAvailableSires);
router.get('/:id', getCharacterVampireById);
router.put('/:id', updateCharacterVampire);
router.delete('/:id', deleteCharacterVampire);
router.post('/:id/awaken', awakenCharacterVampire);


router.post('/:id/equipments', buyEquipment);
router.put('/:id/equipments/:equipmentId/equip', toggleEquipEquipment);

export default router;
