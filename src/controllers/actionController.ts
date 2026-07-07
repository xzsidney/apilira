import { Request, Response } from 'express';
import { createActionSchema, linkSceneToActionSchema } from '../schemas/adventureSchemas';
import { z } from 'zod';
import { Action, SceneAction } from "../models";


export const createAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = createActionSchema.parse(req.body);
    const action = await Action.create(data as any);
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
    const actions = await Action.findAll();
    res.json(actions);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar ações' });
  }
};

export const linkActionToScene = async (req: Request, res: Response): Promise<void> => {
  try {
    const { sceneId, actionId } = req.params;
    const data = linkSceneToActionSchema.parse(req.body);

    const link = await SceneAction.create({
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
