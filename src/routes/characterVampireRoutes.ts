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
  toggleEquipEquipment,
  getCharacterActivityLogs,
  hireRetainer,
  consumeHavenBloodBag,
  upgradeHaven
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

// Histórico de Atividades
router.get('/:id/activities', getCharacterActivityLogs);

// Equipamentos & Arsenal
router.post('/:id/equipments', buyEquipment);
router.put('/:id/equipments/:equipmentId/equip', toggleEquipEquipment);

// Refúgio & Lacaios
router.post('/:id/retainers', hireRetainer);
router.post('/:id/haven/consume-blood', consumeHavenBloodBag);
router.post('/:id/haven/upgrade', upgradeHaven);

export default router;
