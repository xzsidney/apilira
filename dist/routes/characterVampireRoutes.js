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
router.get('/:id', characterVampireController_1.getCharacterVampireById);
router.put('/:id', characterVampireController_1.updateCharacterVampire);
router.delete('/:id', characterVampireController_1.deleteCharacterVampire);
exports.default = router;
