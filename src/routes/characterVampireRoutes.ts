import { Router } from 'express';
import {
  createCharacterVampire,
  getAllCharacterVampiresByUser,
  getCharacterVampireById,
  updateCharacterVampire,
  deleteCharacterVampire
} from '../controllers/characterVampireController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

// Todas as rotas de personagem requerem estar logado
router.use(authMiddleware);

router.post('/', createCharacterVampire);
router.get('/my-characters', getAllCharacterVampiresByUser);
router.get('/:id', getCharacterVampireById);
router.put('/:id', updateCharacterVampire);
router.delete('/:id', deleteCharacterVampire);

export default router;
