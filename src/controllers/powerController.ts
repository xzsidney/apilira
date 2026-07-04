import { Request, Response } from "express";
import prisma from "../config/db";
import { characterPowerInputSchema } from "../schemas/powerSchemas";
import { z } from "zod";

export const getCharacterPowers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await prisma.characterPower.findMany({
      where: { characterId },
      include: { 
        powerDefinition: { include: { powerLevels: true } },
        selections: { include: { powerLevelDefinition: true } }
      },
    });
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar registros." });
  }
};

export const assignCharacterPower = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const data = characterPowerInputSchema.parse(req.body);

    const existing = await prisma.characterPower.findUnique({
      where: { characterId_powerDefinitionId: { characterId, powerDefinitionId: data.powerDefinitionId } }
    });

    if (existing) {
      res.status(400).json({ error: "Personagem já possui este poder." });
      return;
    }

    const newRecord = await prisma.characterPower.create({
      data: {
        characterId,
        powerDefinitionId: data.powerDefinitionId,
        level: data.level,
        selections: {
          create: data.selections
        }
      },
      include: { 
        powerDefinition: { include: { powerLevels: true } },
        selections: { include: { powerLevelDefinition: true } }
      }
    });

    res.status(201).json(newRecord);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao associar." });
    }
  }
};

export const updateCharacterPower = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; 
    const data = characterPowerInputSchema.partial().parse(req.body);

    const updated = await prisma.$transaction(async (tx) => {
      if (data.selections) {
        await tx.characterPowerSelection.deleteMany({ where: { characterPowerId: id }});
        if (data.selections.length > 0) {
          await tx.characterPowerSelection.createMany({
            data: data.selections.map(s => ({
              characterPowerId: id,
              powerLevelDefinitionId: s.powerLevelDefinitionId
            }))
          });
        }
      }

      return await tx.characterPower.update({
        where: { id },
        data: {
          level: data.level
        },
        include: { 
          powerDefinition: { include: { powerLevels: true } },
          selections: { include: { powerLevelDefinition: true } }
        }
      });
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

export const unassignCharacterPower = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.characterPower.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover." });
  }
};
