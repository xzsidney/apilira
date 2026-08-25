import { Router } from 'express';
import { 
  getNightStatus, 
  calculateTransit, 
  awakenNewNight, 
  takeShelter, 
  applySunDamage,
  returnToHaven,
  bookHotelRoom,
  sewerRatHunt
} from '../controllers/NightCycleController';

const router = Router();

router.get('/:characterId/status', getNightStatus);
router.post('/transit', calculateTransit);
router.post('/:characterId/awaken', awakenNewNight);
router.post('/:characterId/shelter', takeShelter);
router.post('/:characterId/sun-damage', applySunDamage);
router.post('/:characterId/return-haven', returnToHaven);
router.post('/:characterId/hotel/book', bookHotelRoom);
router.post('/:characterId/sewer/hunt', sewerRatHunt);

export default router;
