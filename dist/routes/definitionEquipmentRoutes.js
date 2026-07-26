"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const definitionEquipmentController_1 = require("../controllers/definitionEquipmentController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas exigem autenticação
router.use(authMiddleware_1.authMiddleware);
router.post('/', definitionEquipmentController_1.createDefinitionEquipment);
router.get('/', definitionEquipmentController_1.getAllDefinitionEquipments);
router.get('/:id', definitionEquipmentController_1.getDefinitionEquipmentById);
router.put('/:id', definitionEquipmentController_1.updateDefinitionEquipment);
router.delete('/:id', definitionEquipmentController_1.deleteDefinitionEquipment);
exports.default = router;
