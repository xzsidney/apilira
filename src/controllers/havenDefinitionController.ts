import { Request, Response } from 'express';
import prisma from '../config/db';
import { havenDefinitionSchema, havenDefinitionUpdateSchema } from '../schemas/havenDefinitionSchemas';

export const getHavenDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const havens = await prisma.havenDefinition.findMany();
    res.json(havens);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch HavenDefinitions' });
  }
};

export const getHavenDefinitionById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const haven = await prisma.havenDefinition.findUnique({
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
    const newHaven = await prisma.havenDefinition.create({
      data: parsedData,
    });
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
    const updatedHaven = await prisma.havenDefinition.update({
      where: { id },
      data: parsedData,
    });
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
    await prisma.havenDefinition.delete({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete HavenDefinition' });
  }
};
