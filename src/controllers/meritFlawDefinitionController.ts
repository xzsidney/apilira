import { Request, Response } from "express";
import prisma from "../config/db";
import { meritFlawDefinitionSchema } from "../schemas/meritFlawSchemas";
import { z } from "zod";

export const getMeritFlawDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query; // optional gameStyle filter like "VAMPIRE", "WEREWOLF"
    
    let whereClause = {};
    if (type) {
      whereClause = {
        gameStyle: { in: [String(type), "UNIVERSAL"] }
      };
    }
    
    const definitions = await prisma.meritFlawDefinition.findMany({ where: whereClause });
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições." });
  }
};

export const createMeritFlawDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = meritFlawDefinitionSchema.parse(req.body);
    
    const existing = await prisma.meritFlawDefinition.findUnique({
      where: { name_gameStyle_type: { name: data.name, gameStyle: data.gameStyle, type: data.type } }
    });
    
    if (existing) {
      res.status(400).json({ error: "Registro com este nome, tipo e sistema já existe." });
      return;
    }

    const newDef = await prisma.meritFlawDefinition.create({ data });
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

export const updateMeritFlawDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = meritFlawDefinitionSchema.partial().parse(req.body);

    const updatedDef = await prisma.meritFlawDefinition.update({
      where: { id },
      data,
    });
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

export const deleteMeritFlawDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.meritFlawDefinition.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar." });
  }
};
