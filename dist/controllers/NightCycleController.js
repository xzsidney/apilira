"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sewerRatHunt = exports.bookHotelRoom = exports.returnToHaven = exports.applySunDamage = exports.takeShelter = exports.awakenNewNight = exports.calculateTransit = exports.getNightStatus = void 0;
const NightCycleService_1 = require("../services/NightCycleService");
const getNightStatus = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const status = await NightCycleService_1.NightCycleService.getNightStatus(characterId);
        return res.status(200).json(status);
    }
    catch (error) {
        console.error('Erro ao buscar status da noite:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.getNightStatus = getNightStatus;
const calculateTransit = async (req, res) => {
    try {
        const { fromLocationId, toLocationId } = req.body;
        const transit = await NightCycleService_1.NightCycleService.calculateTransit(fromLocationId, toLocationId);
        return res.status(200).json(transit);
    }
    catch (error) {
        console.error('Erro ao calcular trânsito:', error);
        return res.status(500).json({ error: error.message || 'Erro ao calcular trânsito' });
    }
};
exports.calculateTransit = calculateTransit;
const awakenNewNight = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const result = await NightCycleService_1.NightCycleService.awakenNewNight(characterId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao despertar para nova noite:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.awakenNewNight = awakenNewNight;
const takeShelter = async (req, res) => {
    try {
        const { characterId } = req.params;
        const { shelterType } = req.body;
        if (!characterId || !shelterType) {
            return res.status(400).json({ error: 'characterId e shelterType são obrigatórios' });
        }
        const result = await NightCycleService_1.NightCycleService.takeEmergencyShelter(characterId, shelterType);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao buscar abrigo de emergência:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.takeShelter = takeShelter;
const applySunDamage = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const result = await NightCycleService_1.NightCycleService.applySunDamage(characterId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao aplicar dano solar:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.applySunDamage = applySunDamage;
const returnToHaven = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const result = await NightCycleService_1.NightCycleService.returnToHaven(characterId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao retornar ao refúgio:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.returnToHaven = returnToHaven;
const bookHotelRoom = async (req, res) => {
    try {
        const { characterId } = req.params;
        const { stars } = req.body;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const result = await NightCycleService_1.NightCycleService.bookHotel(characterId, Number(stars) || 1);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao reservar hotel:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.bookHotelRoom = bookHotelRoom;
const sewerRatHunt = async (req, res) => {
    try {
        const { characterId } = req.params;
        if (!characterId)
            return res.status(400).json({ error: 'characterId é obrigatório' });
        const result = await NightCycleService_1.NightCycleService.huntSewerRats(characterId);
        return res.status(200).json(result);
    }
    catch (error) {
        console.error('Erro ao caçar nos esgotos:', error);
        return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
    }
};
exports.sewerRatHunt = sewerRatHunt;
