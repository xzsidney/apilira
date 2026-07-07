import { Request, Response } from "express";
import { skillDefinitionSchema } from "../schemas/skillSchemas";
import { z } from "zod";
import { SkillDefinition } from "../models";

export const getSkillDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    
    // Allow fetching UNIVERSAL skills plus specific type (e.g. VAMPIRE)
    let whereClause = {};
    if (type) {
      whereClause = {
        type: { in: [String(type), "UNIVERSAL"] }
      };
    }
    
    const definitions = await SkillDefinition.findAll({ where: whereClause });
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições de habilidades." });
  }
};

export const createSkillDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = skillDefinitionSchema.parse(req.body);
    
    const existing = await SkillDefinition.findOne({
      where: { name: data.name, type: data.type }
    });
    
    if (existing) {
      res.status(400).json({ error: "Habilidade com este nome e tipo já existe." });
      return;
    }

    const newDef = await SkillDefinition.create(data as any);
    res.status(201).json(newDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar definição de habilidade." });
    }
  }
};

export const updateSkillDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = skillDefinitionSchema.partial().parse(req.body);

    await SkillDefinition.update(data as any, { where: { id } });
    const updatedDef = await SkillDefinition.findByPk(id);
    res.json(updatedDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar definição de habilidade." });
    }
  }
};

export const deleteSkillDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await SkillDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar definição de habilidade." });
  }
};
