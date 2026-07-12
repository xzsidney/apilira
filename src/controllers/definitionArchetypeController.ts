import { Request, Response } from 'express';
import { DefinitionArchetype } from '../models';

export const createDefinitionArchetype = async (req: Request, res: Response) => {
  try {
    const { name, description, gameStyle } = req.body;
    const archetype = await DefinitionArchetype.create({ name, description, gameStyle });
    res.status(201).json(archetype);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o arquétipo base' });
  }
};

export const getAllDefinitionArchetypes = async (req: Request, res: Response) => {
  try {
    const archetypes = await DefinitionArchetype.findAll();
    res.json(archetypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os arquétipos base' });
  }
};

export const getDefinitionArchetypeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const archetype = await DefinitionArchetype.findByPk(id);
    if (!archetype) {
      return res.status(404).json({ error: 'Arquétipo não encontrado' });
    }
    res.json(archetype);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o arquétipo base' });
  }
};

export const updateDefinitionArchetype = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, gameStyle } = req.body;

    const archetype = await DefinitionArchetype.findByPk(id);
    if (!archetype) {
      return res.status(404).json({ error: 'Arquétipo não encontrado' });
    }

    await archetype.update({ name, description, gameStyle });
    res.json(archetype);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o arquétipo base' });
  }
};

export const deleteDefinitionArchetype = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const archetype = await DefinitionArchetype.findByPk(id);
    if (!archetype) {
      return res.status(404).json({ error: 'Arquétipo não encontrado' });
    }

    await archetype.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o arquétipo base' });
  }
};
