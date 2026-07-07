import { Request, Response } from "express";
import { StatusDefinition } from "../models";
import { statusDefinitionSchema } from "../schemas/statusSchemas";
import { z } from "zod";
import { Op } from "sequelize";

export const getStatusDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query; 
    
    let whereClause = {};
    if (type) {
      whereClause = {
        gameStyle: { [Op.in]: [String(type), "UNIVERSAL"] }
      };
    }
    
    const definitions = await StatusDefinition.findAll({ where: whereClause });
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições." });
  }
};

export const createStatusDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = statusDefinitionSchema.parse(req.body);
    
    const existing = await StatusDefinition.findOne({
      where: { name: data.name, gameStyle: data.gameStyle }
    });
    
    if (existing) {
      res.status(400).json({ error: "Registro com este nome e sistema já existe." });
      return;
    }

    const newDef = await StatusDefinition.create(data as any);
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

export const updateStatusDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = statusDefinitionSchema.partial().parse(req.body);

    await StatusDefinition.update(data as any, {
      where: { id },
    });
    const updatedDef = await StatusDefinition.findByPk(id);
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

export const deleteStatusDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await StatusDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar." });
  }
};
