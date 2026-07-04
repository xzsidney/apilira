import { Request, Response } from "express";
import prisma from "../config/db";
import { characterSkillSchema, updateCharacterSkillSchema } from "../schemas/skillSchemas";
import { z } from "zod";

export const getCharacterSkills = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const skills = await prisma.characterSkill.findMany({
      where: { characterId },
      include: { skill: true },
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

    const character = await prisma.character.findUnique({ where: { id: characterId } });
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const skillDef = await prisma.skillDefinition.findUnique({ where: { id: data.skillId } });
    if (!skillDef) {
      res.status(404).json({ error: "Definição de habilidade não encontrada." });
      return;
    }

    // Upsert so if it exists, it updates the value
    const existing = await prisma.characterSkill.findUnique({
      where: { characterId_skillId: { characterId, skillId: data.skillId } }
    });

    if (existing) {
      const updated = await prisma.characterSkill.update({
        where: { id: existing.id },
        data: { 
          value: data.value,
          specialty: data.specialty,
          description: data.description
        },
        include: { skill: true }
      });
      res.status(200).json(updated);
      return;
    }

    const charSkill = await prisma.characterSkill.create({
      data: {
        characterId,
        skillId: data.skillId,
        value: data.value,
        specialty: data.specialty,
        description: data.description,
      },
      include: { skill: true }
    });
    
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

    const updated = await prisma.characterSkill.update({
      where: { id },
      data,
      include: { skill: true }
    });

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
    await prisma.characterSkill.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar habilidade." });
  }
};
