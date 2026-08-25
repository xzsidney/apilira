import { Router } from 'express';
import { 
  getNightStatus, 
  calculateTransit, 
  awakenNewNight, 
  takeShelter, 
  applySunDamage 
} from '../controllers/NightCycleController';

const router = Router();

router.get('/:characterId/status', getNightStatus);
router.post('/transit', calculateTransit);
router.post('/:characterId/awaken', awakenNewNight);
router.post('/:characterId/shelter', takeShelter);
router.post('/:characterId/sun-damage', applySunDamage);

export default router;
