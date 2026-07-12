import { Request, Response } from 'express';
import { DefinitionMeritFlaw } from '../models';

export const createDefinitionMeritFlaw = async (req: Request, res: Response) => {
  try {
    const { name, description, type, category, cost, gameStyle } = req.body;
    const meritFlaw = await DefinitionMeritFlaw.create({ name, description, type, category, cost, gameStyle });
    res.status(201).json(meritFlaw);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a qualidade ou defeito base' });
  }
};

export const getAllDefinitionMeritFlaws = async (req: Request, res: Response) => {
  try {
    const meritFlaws = await DefinitionMeritFlaw.findAll();
    res.json(meritFlaws);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as qualidades e defeitos base' });
  }
};

export const getDefinitionMeritFlawById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const meritFlaw = await DefinitionMeritFlaw.findByPk(id);
    if (!meritFlaw) {
      return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
    }
    res.json(meritFlaw);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar a qualidade ou defeito base' });
  }
};

export const updateDefinitionMeritFlaw = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, type, category, cost, gameStyle } = req.body;

    const meritFlaw = await DefinitionMeritFlaw.findByPk(id);
    if (!meritFlaw) {
      return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
    }

    await meritFlaw.update({ name, description, type, category, cost, gameStyle });
    res.json(meritFlaw);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a qualidade ou defeito base' });
  }
};

export const deleteDefinitionMeritFlaw = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const meritFlaw = await DefinitionMeritFlaw.findByPk(id);
    if (!meritFlaw) {
      return res.status(404).json({ error: 'Qualidade/Defeito não encontrado' });
    }

    await meritFlaw.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a qualidade ou defeito base' });
  }
};
