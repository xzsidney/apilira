"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const characterVampireController_1 = require("../controllers/characterVampireController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
// Todas as rotas de personagem requerem estar logado
router.use(authMiddleware_1.authMiddleware);
router.post('/', characterVampireController_1.createCharacterVampire);
router.get('/my-characters', characterVampireController_1.getAllCharacterVampiresByUser);
router.get('/sires', characterVampireController_1.getAvailableSires);
router.get('/:id', characterVampireController_1.getCharacterVampireById);
router.put('/:id', characterVampireController_1.updateCharacterVampire);
router.delete('/:id', characterVampireController_1.deleteCharacterVampire);
router.post('/:id/awaken', characterVampireController_1.awakenCharacterVampire);
// Histórico de Atividades
router.get('/:id/activities', characterVampireController_1.getCharacterActivityLogs);
// Equipamentos & Arsenal
router.post('/:id/equipments', characterVampireController_1.buyEquipment);
router.put('/:id/equipments/:equipmentId/equip', characterVampireController_1.toggleEquipEquipment);
// Refúgio & Lacaios
router.post('/:id/retainers', characterVampireController_1.hireRetainer);
router.post('/:id/haven/consume-blood', characterVampireController_1.consumeHavenBloodBag);
router.post('/:id/haven/upgrade', characterVampireController_1.upgradeHaven);
exports.default = router;
