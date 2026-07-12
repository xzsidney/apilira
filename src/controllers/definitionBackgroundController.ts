import { Request, Response } from 'express';
import { DefinitionBackground } from '../models';

export const createDefinitionBackground = async (req: Request, res: Response) => {
  try {
    const { name, description, gameStyle } = req.body;
    const background = await DefinitionBackground.create({ name, description, gameStyle });
    res.status(201).json(background);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o antecedente base' });
  }
};

export const getAllDefinitionBackgrounds = async (req: Request, res: Response) => {
  try {
    const backgrounds = await DefinitionBackground.findAll();
    res.json(backgrounds);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os antecedentes base' });
  }
};

export const getDefinitionBackgroundById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const background = await DefinitionBackground.findByPk(id);
    if (!background) {
      return res.status(404).json({ error: 'Antecedente não encontrado' });
    }
    res.json(background);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o antecedente base' });
  }
};

export const updateDefinitionBackground = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, gameStyle } = req.body;

    const background = await DefinitionBackground.findByPk(id);
    if (!background) {
      return res.status(404).json({ error: 'Antecedente não encontrado' });
    }

    await background.update({ name, description, gameStyle });
    res.json(background);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o antecedente base' });
  }
};

export const deleteDefinitionBackground = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const background = await DefinitionBackground.findByPk(id);
    if (!background) {
      return res.status(404).json({ error: 'Antecedente não encontrado' });
    }

    await background.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o antecedente base' });
  }
};
