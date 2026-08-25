import { Router } from 'express';
import { 
  getNightStatus, 
  calculateTransit, 
  awakenNewNight, 
  takeShelter, 
  applySunDamage,
  returnToHaven
} from '../controllers/NightCycleController';

const router = Router();

router.get('/:characterId/status', getNightStatus);
router.post('/transit', calculateTransit);
router.post('/:characterId/awaken', awakenNewNight);
router.post('/:characterId/shelter', takeShelter);
router.post('/:characterId/sun-damage', applySunDamage);
router.post('/:characterId/return-haven', returnToHaven);

export default router;
