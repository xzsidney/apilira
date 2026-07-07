import { Request, Response } from 'express';
import { Scene } from '../models/Scene';
import { createSceneSchema } from '../schemas/adventureSchemas';
import { z } from 'zod';

export const createScene = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = createSceneSchema.parse(req.body);
    const scene = await Scene.create(data as any);
    res.status(201).json(scene);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Erro ao criar cena no acervo' });
    }
  }
};

export const getScenes = async (req: Request, res: Response): Promise<void> => {
  try {
    const scenes = await Scene.findAll();
    res.json(scenes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar cenas' });
  }
};
