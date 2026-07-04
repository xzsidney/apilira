import { Request, Response } from "express";
import prisma from "../config/db";
import { characterMeritFlawSchema, updateCharacterMeritFlawSchema } from "../schemas/meritFlawSchemas";
import { z } from "zod";

export const getCharacterMeritFlaws = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await prisma.characterMeritFlaw.findMany({
      where: { characterId },
      include: { meritFlaw: true },
    });
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
};

export const assignCharacterMeritFlaw = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const data = characterMeritFlawSchema.parse(req.body);

    const character = await prisma.character.findUnique({ where: { id: characterId } });
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const def = await prisma.meritFlawDefinition.findUnique({ where: { id: data.meritFlawId } });
    if (!def) {
      res.status(404).json({ error: "Definição não encontrada." });
      return;
    }

    const existing = await prisma.characterMeritFlaw.findUnique({
      where: { characterId_meritFlawId: { characterId, meritFlawId: data.meritFlawId } }
    });

    if (existing) {
      const updated = await prisma.characterMeritFlaw.update({
        where: { id: existing.id },
        data: { 
          points: data.points,
          description: data.description
        },
        include: { meritFlaw: true }
      });
      res.status(200).json(updated);
      return;
    }

    const record = await prisma.characterMeritFlaw.create({
      data: {
        characterId,
        meritFlawId: data.meritFlawId,
        points: data.points,
        description: data.description,
      },
      include: { meritFlaw: true }
    });
    
    res.status(201).json(record);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao associar." });
    }
  }
};

export const updateCharacterMeritFlaw = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = updateCharacterMeritFlawSchema.parse(req.body);

    const updated = await prisma.characterMeritFlaw.update({
      where: { id },
      data,
      include: { meritFlaw: true }
    });

    res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar." });
    }
  }
};

export const unassignCharacterMeritFlaw = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.characterMeritFlaw.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar." });
  }
};
