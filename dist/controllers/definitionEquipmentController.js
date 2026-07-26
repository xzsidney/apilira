"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDefinitionEquipment = exports.updateDefinitionEquipment = exports.getDefinitionEquipmentById = exports.getAllDefinitionEquipments = exports.createDefinitionEquipment = void 0;
const models_1 = require("../models");
const createDefinitionEquipment = async (req, res) => {
    try {
        const data = req.body;
        const equipment = await models_1.DefinitionEquipment.create(data);
        res.status(201).json(equipment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar o equipamento base' });
    }
};
exports.createDefinitionEquipment = createDefinitionEquipment;
const getAllDefinitionEquipments = async (req, res) => {
    try {
        const equipments = await models_1.DefinitionEquipment.findAll();
        res.json(equipments);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar os equipamentos base' });
    }
};
exports.getAllDefinitionEquipments = getAllDefinitionEquipments;
const getDefinitionEquipmentById = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await models_1.DefinitionEquipment.findByPk(id);
        if (!equipment) {
            return res.status(404).json({ error: 'Equipamento não encontrado' });
        }
        res.json(equipment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar o equipamento base' });
    }
};
exports.getDefinitionEquipmentById = getDefinitionEquipmentById;
const updateDefinitionEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const equipment = await models_1.DefinitionEquipment.findByPk(id);
        if (!equipment) {
            return res.status(404).json({ error: 'Equipamento não encontrado' });
        }
        await equipment.update(data);
        res.json(equipment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar o equipamento base' });
    }
};
exports.updateDefinitionEquipment = updateDefinitionEquipment;
const deleteDefinitionEquipment = async (req, res) => {
    try {
        const { id } = req.params;
        const equipment = await models_1.DefinitionEquipment.findByPk(id);
        if (!equipment) {
            return res.status(404).json({ error: 'Equipamento não encontrado' });
        }
        await equipment.destroy();
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao excluir o equipamento base' });
    }
};
exports.deleteDefinitionEquipment = deleteDefinitionEquipment;
