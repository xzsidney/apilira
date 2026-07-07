import { Request, Response } from "express";
import { attributeDefinitionSchema } from "../schemas/attributeSchemas";
import { z } from "zod";
import { AttributeDefinition } from "../models";

export const getAttributeDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query;
    const where = type ? { type: String(type) } : {};
    
    const definitions = await AttributeDefinition.findAll({ where });
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
    const existing = await AttributeDefinition.findOne({
      where: { name: data.name, type: data.type }
    });
    
    if (existing) {
      res.status(400).json({ error: "Atributo com este nome e tipo já existe." });
      return;
    }

    const newDef = await AttributeDefinition.create(data as any);
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

    await AttributeDefinition.update(data as any, { where: { id } });
    const updatedDef = await AttributeDefinition.findByPk(id);
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
    await AttributeDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar definição de atributo." });
  }
};
