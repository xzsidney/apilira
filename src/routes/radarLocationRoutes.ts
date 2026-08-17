import { Router } from 'express';
import { getRadarLocations } from '../controllers/RadarLocationController';

const router = Router();

router.get('/', getRadarLocations);

export default router;
