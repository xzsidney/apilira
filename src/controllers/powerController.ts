import { Request, Response } from "express";
import { characterPowerInputSchema } from "../schemas/powerSchemas";
import { z } from "zod";
import { CharacterPower, CharacterPowerSelection, sequelize } from "../models";

export const getCharacterPowers = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await CharacterPower.findAll({
      where: { characterId },
      include: { all: true, nested: true }
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

    const existing = await CharacterPower.findOne({
      where: { characterId, powerDefinitionId: data.powerDefinitionId }
    });

    if (existing) {
      res.status(400).json({ error: "Personagem já possui este poder." });
      return;
    }

    const t = await sequelize.transaction();
    try {
      const newRecord = await CharacterPower.create({
        characterId,
        powerDefinitionId: data.powerDefinitionId,
        level: data.level,
      } as any, { transaction: t });

      if (data.selections && data.selections.length > 0) {
        await CharacterPowerSelection.bulkCreate(
          data.selections.map(s => ({
            characterPowerId: newRecord.id,
            powerLevelDefinitionId: s.powerLevelDefinitionId
          })) as any,
          { transaction: t }
        );
      }

      await t.commit();
      
      const record = await CharacterPower.findByPk(newRecord.id, {
        include: { all: true, nested: true }
      });
      res.status(201).json(record);
    } catch (e) {
      await t.rollback();
      throw e;
    }
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

    const t = await sequelize.transaction();
    try {
      if (data.selections) {
        await CharacterPowerSelection.destroy({ where: { characterPowerId: id }, transaction: t });
        if (data.selections.length > 0) {
          await CharacterPowerSelection.bulkCreate(
            data.selections.map(s => ({
              characterPowerId: id,
              powerLevelDefinitionId: s.powerLevelDefinitionId
            })) as any,
            { transaction: t }
          );
        }
      }

      await CharacterPower.update({ level: data.level } as any, { where: { id }, transaction: t });
      
      await t.commit();
      
      const updated = await CharacterPower.findByPk(id, {
        include: { all: true, nested: true }
      });
      res.json(updated);
    } catch (e) {
      await t.rollback();
      throw e;
    }
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
    await CharacterPower.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao remover." });
  }
};
