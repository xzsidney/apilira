import { Request, Response } from 'express';
import { DefinitionResonance } from '../models';

export const createDefinitionResonance = async (req: Request, res: Response) => {
  try {
    const { name, description, disciplines, gameStyle } = req.body;
    const resonance = await DefinitionResonance.create({ name, description, disciplines, gameStyle });
    res.status(201).json(resonance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a Ressonância' });
  }
};

export const getAllDefinitionResonances = async (req: Request, res: Response) => {
  try {
    const resonances = await DefinitionResonance.findAll();
    res.json(resonances);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as Ressonâncias' });
  }
};

export const getDefinitionResonanceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resonance = await DefinitionResonance.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: 'Ressonância não encontrada' });
    }
    res.json(resonance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar a Ressonância' });
  }
};

export const updateDefinitionResonance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, disciplines } = req.body;

    const resonance = await DefinitionResonance.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: 'Ressonância não encontrada' });
    }

    await resonance.update({ name, description, disciplines });
    res.json(resonance);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a Ressonância' });
  }
};

export const deleteDefinitionResonance = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const resonance = await DefinitionResonance.findByPk(id);
    if (!resonance) {
      return res.status(404).json({ error: 'Ressonância não encontrada' });
    }

    await resonance.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a Ressonância' });
  }
};
