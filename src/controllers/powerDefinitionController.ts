import { Request, Response } from "express";
import { powerDefinitionSchema } from "../schemas/powerSchemas";
import { z } from "zod";
import { PowerDefinition, PowerLevelDefinition } from "../models";

export const getPowerDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query; 
    
    let whereClause = {};
    if (type) {
      whereClause = {
        gameStyle: { in: [String(type), "UNIVERSAL"] }
      };
    }
    
    const definitions = await PowerDefinition.findAll({ 
      where: whereClause,
      include: [{ model: PowerLevelDefinition, as: 'powerLevels' }]
    });
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições." });
  }
};

export const createPowerDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = powerDefinitionSchema.parse(req.body);
    
    const existing = await PowerDefinition.findOne({
      where: { name: data.name, gameStyle: data.gameStyle }
    });
    
    if (existing) {
      res.status(400).json({ error: "Registro com este nome e sistema já existe." });
      return;
    }

    const { powerLevels, ...defData } = data;

    const newDef = await PowerDefinition.create({ 
      data: {
        ...defData,
        powerLevels: {
          create: powerLevels || []
        }
      },
      include: [{ model: PowerLevelDefinition, as: 'powerLevels' }]
    });
    res.status(201).json(newDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar." });
    }
  }
};

export const updatePowerDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = powerDefinitionSchema.partial().parse(req.body);

    const { powerLevels, ...defData } = data;

    // To properly update, we'll just update the top level fields. Updating nested array is complex and beyond simple CRUD here, but could be added.
    const updatedDef = await PowerDefinition.update(data as any, { where: { id } });
    res.json(updatedDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar." });
    }
  }
};

export const deletePowerDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await PowerDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar." });
  }
};
