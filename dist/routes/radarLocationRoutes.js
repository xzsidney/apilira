"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RadarLocationController_1 = require("../controllers/RadarLocationController");
const router = (0, express_1.Router)();
router.get('/', RadarLocationController_1.getRadarLocations);
exports.default = router;
