"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHavenDefinition = exports.updateHavenDefinition = exports.createHavenDefinition = exports.getHavenDefinitionById = exports.getHavenDefinitions = void 0;
const havenDefinitionSchemas_1 = require("../schemas/havenDefinitionSchemas");
const models_1 = require("../models");
const getHavenDefinitions = async (req, res) => {
    try {
        const havens = await models_1.HavenDefinition.findAll();
        res.json(havens);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch HavenDefinitions' });
    }
};
exports.getHavenDefinitions = getHavenDefinitions;
const getHavenDefinitionById = async (req, res) => {
    try {
        const { id } = req.params;
        const haven = await models_1.HavenDefinition.findOne({
            where: { id },
        });
        if (!haven) {
            res.status(404).json({ error: 'HavenDefinition not found' });
            return;
        }
        res.json(haven);
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch HavenDefinition' });
    }
};
exports.getHavenDefinitionById = getHavenDefinitionById;
const createHavenDefinition = async (req, res) => {
    try {
        const parsedData = havenDefinitionSchemas_1.havenDefinitionSchema.parse(req.body);
        const newHaven = await models_1.HavenDefinition.create(parsedData);
        res.status(201).json(newHaven);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            res.status(400).json({ error: error.errors });
            return;
        }
        res.status(500).json({ error: 'Failed to create HavenDefinition' });
    }
};
exports.createHavenDefinition = createHavenDefinition;
const updateHavenDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        const parsedData = havenDefinitionSchemas_1.havenDefinitionUpdateSchema.parse(req.body);
        const updatedHaven = await models_1.HavenDefinition.update(parsedData, { where: { id } });
        res.json(updatedHaven);
    }
    catch (error) {
        if (error.name === 'ZodError') {
            res.status(400).json({ error: error.errors });
            return;
        }
        res.status(500).json({ error: 'Failed to update HavenDefinition' });
    }
};
exports.updateHavenDefinition = updateHavenDefinition;
const deleteHavenDefinition = async (req, res) => {
    try {
        const { id } = req.params;
        await models_1.HavenDefinition.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to delete HavenDefinition' });
    }
};
exports.deleteHavenDefinition = deleteHavenDefinition;
