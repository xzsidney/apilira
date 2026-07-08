"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScenes = exports.createScene = void 0;
const Scene_1 = require("../models/Scene");
const adventureSchemas_1 = require("../schemas/adventureSchemas");
const zod_1 = require("zod");
const createScene = async (req, res) => {
    try {
        const data = adventureSchemas_1.createSceneSchema.parse(req.body);
        const scene = await Scene_1.Scene.create(data);
        res.status(201).json(scene);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ error: error.errors });
        }
        else {
            res.status(500).json({ error: 'Erro ao criar cena no acervo' });
        }
    }
};
exports.createScene = createScene;
const getScenes = async (req, res) => {
    try {
        const scenes = await Scene_1.Scene.findAll();
        res.json(scenes);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar cenas' });
    }
};
exports.getScenes = getScenes;
