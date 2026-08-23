import { Router } from 'express';
import { 
  listAdventures, 
  getCharacterProgress, 
  resetAdventure, 
  processChoice 
} from '../controllers/StoryController';

const router = Router();

router.get('/adventures', listAdventures);
router.get('/adventures/:adventureId/progress/:characterId', getCharacterProgress);
router.post('/adventures/reset', resetAdventure);
router.post('/adventures/choice', processChoice);

export default router;
