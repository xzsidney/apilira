import { Request, Response } from 'express';
import { havenDefinitionSchema, havenDefinitionUpdateSchema } from '../schemas/havenDefinitionSchemas';
import { HavenDefinition } from "../models";

export const getHavenDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const havens = await HavenDefinition.findAll();
    res.json(havens);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch HavenDefinitions' });
  }
};

export const getHavenDefinitionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const haven = await HavenDefinition.findOne({
      where: { id },
    });
    if (!haven) {
      res.status(404).json({ error: 'HavenDefinition not found' });
      return;
    }
    res.json(haven);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch HavenDefinition' });
  }
};

export const createHavenDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const parsedData = havenDefinitionSchema.parse(req.body);
    const newHaven = await HavenDefinition.create(parsedData as any);
    res.status(201).json(newHaven);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to create HavenDefinition' });
  }
};

export const updateHavenDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const parsedData = havenDefinitionUpdateSchema.parse(req.body);
    const updatedHaven = await HavenDefinition.update(parsedData as any, { where: { id } });
    res.json(updatedHaven);
  } catch (error: any) {
    if (error.name === 'ZodError') {
      res.status(400).json({ error: error.errors });
      return;
    }
    res.status(500).json({ error: 'Failed to update HavenDefinition' });
  }
};

export const deleteHavenDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await HavenDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete HavenDefinition' });
  }
};
