import { Request, Response } from "express";
import prisma from "../config/db";
import { characterStatusSchema, characterStatusUpdateSchema } from "../schemas/statusSchemas";
import { z } from "zod";

export const getCharacterStatuses = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await prisma.characterStatus.findMany({
      where: { characterId },
      include: { status: true },
    });
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
};

export const updateCharacterStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; // this is the ID of CharacterStatus
    const data = characterStatusUpdateSchema.parse(req.body);

    const updated = await prisma.characterStatus.update({
      where: { id },
      data,
      include: { status: true }
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
