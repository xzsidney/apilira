"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const creationPackageController_1 = require("../controllers/creationPackageController");
const router = (0, express_1.Router)();
// GET /api/creation-packages
router.get("/", creationPackageController_1.getAllCreationPackages);
exports.default = router;
