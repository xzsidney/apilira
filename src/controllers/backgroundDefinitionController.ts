import { Request, Response } from 'express';
import { backgroundDefinitionSchema, backgroundDefinitionUpdateSchema } from '../schemas/backgroundDefinitionSchemas';
import { BackgroundDefinition } from "../models";

export const getBackgroundDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const backgrounds = await BackgroundDefinition.findAll();
    res.json(backgrounds);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch BackgroundDefinitions' });
  }
};

export const getBackgroundDefinitionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const background = await BackgroundDefinition.findOne({
      where: { id },
    });
    if (!background) {
      res.status(404).json({ error: 'BackgroundDefinition not found' });
      return;
    }
    res.json(background);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch BackgroundDefinition' });
  }
};

export const createBackgroundDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = backgroundDefinitionSchema.parse(req.body);
    const newBackground = await BackgroundDefinition.create(parsedData as any);
    res.status(201).json(newBackground);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to create BackgroundDefinition' });
  }
};

export const updateBackgroundDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const parsedData = backgroundDefinitionUpdateSchema.parse(req.body);
    const updatedBackground = await BackgroundDefinition.update(parsedData as any, { where: { id } });
    res.json(updatedBackground);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to update BackgroundDefinition' });
  }
};

export const deleteBackgroundDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await BackgroundDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete BackgroundDefinition' });
  }
};
