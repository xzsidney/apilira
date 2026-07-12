import { Request, Response } from 'express';
import { DefinitionClan } from '../models';

export const createDefinitionClan = async (req: Request, res: Response) => {
  try {
    const { name, description, sect, weakness, disciplines, gameStyle } = req.body;
    const clan = await DefinitionClan.create({ name, description, sect, weakness, disciplines, gameStyle });
    res.status(201).json(clan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o clã' });
  }
};

export const getAllDefinitionClans = async (req: Request, res: Response) => {
  try {
    const clans = await DefinitionClan.findAll();
    res.json(clans);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os clãs' });
  }
};

export const getDefinitionClanById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clan = await DefinitionClan.findByPk(id);
    if (!clan) {
      return res.status(404).json({ error: 'Clã não encontrado' });
    }
    res.json(clan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o clã' });
  }
};

export const updateDefinitionClan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, sect, weakness, disciplines } = req.body;

    const clan = await DefinitionClan.findByPk(id);
    if (!clan) {
      return res.status(404).json({ error: 'Clã não encontrado' });
    }

    await clan.update({ name, description, sect, weakness, disciplines });
    res.json(clan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o clã' });
  }
};

export const deleteDefinitionClan = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const clan = await DefinitionClan.findByPk(id);
    if (!clan) {
      return res.status(404).json({ error: 'Clã não encontrado' });
    }

    await clan.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o clã' });
  }
};
