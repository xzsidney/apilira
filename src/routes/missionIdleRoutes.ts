import { Router } from 'express';
import { listAvailableMissions, getActiveMission, startMission, resolveMission } from '../controllers/MissionIdleController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.use(authMiddleware);

router.get('/', listAvailableMissions);
router.get('/active/:characterId', getActiveMission);
router.post('/start', startMission);
router.post('/resolve', resolveMission);

export default router;
