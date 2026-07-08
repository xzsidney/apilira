"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBackgroundDefinition = exports.updateBackgroundDefinition = exports.createBackgroundDefinition = exports.getBackgroundDefinitionById = exports.getBackgroundDefinitions = void 0;
const backgroundDefinitionSchemas_1 = require("../schemas/backgroundDefinitionSchemas");
const models_1 = require("../models");
const getBackgroundDefinitions = async (req, res) => {
    try {
        const backgrounds = await models_1.BackgroundDefinition.findAll();
        res.json(backgrounds);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch BackgroundDefinitions' });
    }
};
exports.getBackgroundDefinitions = getBackgroundDefinitions;
const getBackgroundDefinitionById = async (req, res) => {
    try {
        const { id } = req.params;
        const background = await models_1.BackgroundDefinition.findOne({
            where: { id },
        });
        if (!background) {
            res.status(404).json({ error: 'BackgroundDefinition not found' });
            return;
        }
        res.json(background);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch BackgroundDefinition' });
    }
};
exports.getBackgroundDefinitionById = getBackgroundDefinitionById;
const createBackgroundDefinition = async (req, res) => {
    try {
        const parsedData = backgroundDefinitionSchemas_1.backgroundDefinitionSchema.parse(req.body);
        const newBackground = await models_1.BackgroundDefinition.create(parsedData);
        res.status(201).json(newBackground);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            res.status(400).json({ error: error.errors });
            return;
        }
        res.status(500).json({ error: 'Failed to create BackgroundDefinition' });
    }
};
exports.createBackgroundDefinition = createBackgroundDefinition;
const updateBackgroundDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedData = backgroundDefinitionSchemas_1.backgroundDefinitionUpdateSchema.parse(req.body);
        const updatedBackground = await models_1.BackgroundDefinition.update(parsedData, { where: { id } });
        res.json(updatedBackground);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            res.status(400).json({ error: error.errors });
            return;
        }
        res.status(500).json({ error: 'Failed to update BackgroundDefinition' });
    }
};
exports.updateBackgroundDefinition = updateBackgroundDefinition;
const deleteBackgroundDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.BackgroundDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete BackgroundDefinition' });
    }
};
exports.deleteBackgroundDefinition = deleteBackgroundDefinition;
