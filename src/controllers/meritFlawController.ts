import { Request, Response } from "express";
import { characterMeritFlawSchema, updateCharacterMeritFlawSchema } from "../schemas/meritFlawSchemas";
import { z } from "zod";
import { CharacterMeritFlaw, Character, MeritFlawDefinition } from "../models";

export const getCharacterMeritFlaws = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const records = await CharacterMeritFlaw.findAll({
      where: { characterId },
      include: [{ model: MeritFlawDefinition, as: 'meritFlaw' }],
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

    const character = await Character.findByPk(characterId);
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const def = await MeritFlawDefinition.findOne({ where: { id: data.meritFlawId } });
    if (!def) {
      res.status(404).json({ error: "Definição não encontrada." });
      return;
    }

    const existing = await CharacterMeritFlaw.findOne({
      where: { characterId, meritFlawId: data.meritFlawId }
    });

    if (existing) {
      const updated = await CharacterMeritFlaw.update({
       
          points: data.points,
          description: data.description
        
    }, { where: { id: existing.id } });
      res.status(200).json(updated);
      return;
    }

    const record = await CharacterMeritFlaw.create({
      
        characterId,
        meritFlawId: data.meritFlawId,
        points: data.points,
        description: data.description,
      
    } as any);
    // Eager loading ignored by create, typically fetched after.;
    
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

    const updated = await CharacterMeritFlaw.update(data as any, { where: { id } });

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
    await CharacterMeritFlaw.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar." });
  }
};
