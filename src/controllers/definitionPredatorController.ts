import { Request, Response } from 'express';
import { DefinitionPredator } from '../models';

export const createDefinitionPredator = async (req: Request, res: Response) => {
  try {
    const { name, description, huntingPool, modifiers, gameStyle } = req.body;
    const predator = await DefinitionPredator.create({ name, description, huntingPool, modifiers, gameStyle });
    res.status(201).json(predator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o Tipo de Predador' });
  }
};

export const getAllDefinitionPredators = async (req: Request, res: Response) => {
  try {
    const predators = await DefinitionPredator.findAll();
    res.json(predators);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os Tipos de Predador' });
  }
};

export const getDefinitionPredatorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const predator = await DefinitionPredator.findByPk(id);
    if (!predator) {
      return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
    }
    res.json(predator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o Tipo de Predador' });
  }
};

export const updateDefinitionPredator = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, huntingPool, modifiers } = req.body;

    const predator = await DefinitionPredator.findByPk(id);
    if (!predator) {
      return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
    }

    await predator.update({ name, description, huntingPool, modifiers });
    res.json(predator);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o Tipo de Predador' });
  }
};

export const deleteDefinitionPredator = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const predator = await DefinitionPredator.findByPk(id);
    if (!predator) {
      return res.status(404).json({ error: 'Tipo de Predador não encontrado' });
    }

    await predator.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o Tipo de Predador' });
  }
};
