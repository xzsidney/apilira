import { Request, Response } from "express";
import { characterStatusSchema, characterStatusUpdateSchema } from "../schemas/statusSchemas";
import { z } from "zod";
import { CharacterStatus, StatusDefinition } from "../models";

export const getCharacterStatuses = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await CharacterStatus.findAll({
      where: { characterId },
      include: [{ model: StatusDefinition, as: 'statusDefinition' }],
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

    const updated = await CharacterStatus.update(data as any, { where: { id } });

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
