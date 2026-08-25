import { Router } from 'express';
import { getRadarLocations, exploreLocation, discoverLocation, startReconMission } from '../controllers/RadarLocationController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getRadarLocations);
router.get('/locations', getRadarLocations);
router.post('/locations/:locationId/explore', authMiddleware, exploreLocation);
router.post('/locations/:locationId/discover', authMiddleware, discoverLocation);
router.post('/locations/:locationId/start-recon', startReconMission);

export default router;
