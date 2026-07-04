import { Request, Response } from "express";
import prisma from "../config/db";
import { attributeDefinitionSchema } from "../schemas/attributeSchemas";
import { z } from "zod";

export const getAttributeDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const where = type ? { type: String(type) } : {};
    
    const definitions = await prisma.attributeDefinition.findMany({ where });
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições de atributos." });
  }
};

export const createAttributeDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = attributeDefinitionSchema.parse(req.body);
    
    // Check if already exists
    const existing = await prisma.attributeDefinition.findUnique({
      where: { name_type: { name: data.name, type: data.type } }
    });
    
    if (existing) {
      res.status(400).json({ error: "Atributo com este nome e tipo já existe." });
      return;
    }

    const newDef = await prisma.attributeDefinition.create({ data });
    res.status(201).json(newDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar definição de atributo." });
    }
  }
};

export const updateAttributeDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = attributeDefinitionSchema.partial().parse(req.body);

    const updatedDef = await prisma.attributeDefinition.update({
      where: { id },
      data,
    });
    res.json(updatedDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar definição de atributo." });
    }
  }
};

export const deleteAttributeDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.attributeDefinition.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar definição de atributo." });
  }
};
