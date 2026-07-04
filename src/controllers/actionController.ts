import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createActionSchema, linkSceneToActionSchema } from '../schemas/adventureSchemas';
import { z } from 'zod';

const prisma = new PrismaClient();

export const createAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = createActionSchema.parse(req.body);
    const action = await prisma.action.create({ data });
    res.status(201).json(action);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Erro ao criar ação no acervo' });
    }
  }
};

export const getActions = async (req: Request, res: Response): Promise<void> => {
  try {
    const actions = await prisma.action.findMany();
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ações' });
  }
};

export const linkActionToScene = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sceneId, actionId } = req.params;
    const data = linkSceneToActionSchema.parse(req.body);

    const link = await prisma.sceneAction.create({
      data: {
        sceneId,
        actionId,
        successSceneId: data.successSceneId,
        failureSceneId: data.failureSceneId,
        order: data.order
      }
    });

    res.status(201).json(link);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Erro ao ligar ação à cena' });
    }
  }
};
