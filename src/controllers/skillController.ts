import { Request, Response } from "express";
import { characterSkillSchema, updateCharacterSkillSchema } from "../schemas/skillSchemas";
import { z } from "zod";
import { CharacterSkill, Character, SkillDefinition } from "../models";

export const getCharacterSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const skills = await CharacterSkill.findAll({
      where: { characterId },
      include: [{ model: SkillDefinition, as: 'skill' }],
    });
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar habilidades." });
  }
};

export const assignCharacterSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const data = characterSkillSchema.parse(req.body);

    const character = await Character.findByPk(characterId);
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const skillDef = await SkillDefinition.findOne({ where: { id: data.skillId } });
    if (!skillDef) {
      res.status(404).json({ error: "Definição de habilidade não encontrada." });
      return;
    }

    // Upsert so if it exists, it updates the value
    const existing = await CharacterSkill.findOne({
      where: { characterId, skillId: data.skillId }
    });

    if (existing) {
      const updated = await CharacterSkill.update({
       
          value: data.value,
          specialty: data.specialty,
          description: data.description
        
    }, { where: { id: existing.id } });
      res.status(200).json(updated);
      return;
    }

    const charSkill = await CharacterSkill.create({
      
        characterId,
        skillId: data.skillId,
        value: data.value,
        specialty: data.specialty,
        description: data.description,
      
    } as any);
    // Eager loading ignored by create, typically fetched after.;
    
    res.status(201).json(charSkill);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao associar habilidade." });
    }
  }
};

export const updateCharacterSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = updateCharacterSkillSchema.parse(req.body);

    const updated = await CharacterSkill.update(data as any, { where: { id } });

    res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar habilidade." });
    }
  }
};

export const unassignCharacterSkill = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await CharacterSkill.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar habilidade." });
  }
};
