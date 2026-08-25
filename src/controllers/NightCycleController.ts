import { Request, Response } from 'express';
import { NightCycleService } from '../services/NightCycleService';

export const getNightStatus = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    if (!characterId) return res.status(400).json({ error: 'characterId é obrigatório' });

    const status = await NightCycleService.getNightStatus(characterId);
    return res.status(200).json(status);
  } catch (error: any) {
    console.error('Erro ao buscar status da noite:', error);
    return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
  }
};

export const calculateTransit = async (req: Request, res: Response) => {
  try {
    const { fromLocationId, toLocationId } = req.body;
    const transit = await NightCycleService.calculateTransit(fromLocationId, toLocationId);
    return res.status(200).json(transit);
  } catch (error: any) {
    console.error('Erro ao calcular trânsito:', error);
    return res.status(500).json({ error: error.message || 'Erro ao calcular trânsito' });
  }
};

export const awakenNewNight = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    if (!characterId) return res.status(400).json({ error: 'characterId é obrigatório' });

    const result = await NightCycleService.awakenNewNight(characterId);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Erro ao despertar para nova noite:', error);
    return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
  }
};

export const takeShelter = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    const { shelterType } = req.body;

    if (!characterId || !shelterType) {
      return res.status(400).json({ error: 'characterId e shelterType são obrigatórios' });
    }

    const result = await NightCycleService.takeEmergencyShelter(characterId, shelterType);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Erro ao buscar abrigo de emergência:', error);
    return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
  }
};

export const applySunDamage = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    if (!characterId) return res.status(400).json({ error: 'characterId é obrigatório' });

    const result = await NightCycleService.applySunDamage(characterId);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Erro ao aplicar dano solar:', error);
    return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
  }
};

export const returnToHaven = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    if (!characterId) return res.status(400).json({ error: 'characterId é obrigatório' });

    const result = await NightCycleService.returnToHaven(characterId);
    return res.status(200).json(result);
  } catch (error: any) {
    console.error('Erro ao retornar ao refúgio:', error);
    return res.status(500).json({ error: error.message || 'Erro interno do servidor' });
  }
};
