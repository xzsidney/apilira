"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdventureById = exports.getAdventures = exports.createAdventure = void 0;
const adventureSchemas_1 = require("../schemas/adventureSchemas");
const zod_1 = require("zod");
const models_1 = require("../models");
const createAdventure = async (req, res) => {
    try {
        const data = adventureSchemas_1.createAdventureSchema.parse(req.body);
        const adventure = await models_1.Adventure.create(data);
        res.status(201).json(adventure);
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ error: error.errors });
        }
        else {
            res.status(500).json({ error: 'Erro ao criar aventura' });
        }
    }
};
exports.createAdventure = createAdventure;
const getAdventures = async (req, res) => {
    try {
        const adventures = await models_1.Adventure.findAll();
        res.json(adventures);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar aventuras' });
    }
};
exports.getAdventures = getAdventures;
const getAdventureById = async (req, res) => {
    try {
        const { id } = req.params;
        const adventure = await models_1.Adventure.findOne({
            where: { id },
            include: { all: true, nested: true }
        });
        if (!adventure) {
            res.status(404).json({ error: 'Aventura não encontrada' });
            return;
        }
        res.json(adventure);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar aventura' });
    }
};
exports.getAdventureById = getAdventureById;
