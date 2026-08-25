import { Router } from 'express';
import { getRadarLocations, exploreLocation, discoverLocation } from '../controllers/RadarLocationController';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getRadarLocations);
router.get('/locations', getRadarLocations);
router.post('/locations/:locationId/explore', authMiddleware, exploreLocation);
router.post('/locations/:locationId/discover', authMiddleware, discoverLocation);

export default router;
