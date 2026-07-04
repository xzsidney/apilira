import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { createAdventureSchema } from '../schemas/adventureSchemas';
import { z } from 'zod';

const prisma = new PrismaClient();

export const createAdventure = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = createAdventureSchema.parse(req.body);
    const adventure = await prisma.adventure.create({ data });
    res.status(201).json(adventure);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Erro ao criar aventura' });
    }
  }
};

export const getAdventures = async (req: Request, res: Response): Promise<void> => {
  try {
    const adventures = await prisma.adventure.findMany();
    res.json(adventures);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aventuras' });
  }
};

export const getAdventureById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const adventure = await prisma.adventure.findUnique({
      where: { id },
      include: {
        scenes: {
          include: {
            scene: {
              include: {
                actions: {
                  include: {
                    action: true
                  }
                }
              }
            }
          }
        }
      }
    });
    if (!adventure) {
      res.status(404).json({ error: 'Aventura não encontrada' });
      return;
    }
    res.json(adventure);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar aventura' });
  }
};
