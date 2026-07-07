import { Request, Response } from "express";
import { itemDefinitionSchema } from "../schemas/itemSchemas";
import { z } from "zod";
import { ItemDefinition } from "../models";

export const getItemDefinitions = async (req: Request, res: Response): Promise<void> => {
  try {
    const definitions = await ItemDefinition.findAll();
    res.json(definitions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar definições de itens." });
  }
};

export const createItemDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = itemDefinitionSchema.parse(req.body);
    
    // Check if already exists
    const existing = await ItemDefinition.findOne({
      where: { name: data.name }
    });
    
    if (existing) {
      res.status(400).json({ error: "Item com este nome já existe." });
      return;
    }

    const newDef = await ItemDefinition.create(data as any);
    res.status(201).json(newDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar definição de item." });
    }
  }
};

export const updateItemDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = itemDefinitionSchema.partial().parse(req.body);

    await ItemDefinition.update(data as any, { where: { id } });
    const updatedDef = await ItemDefinition.findByPk(id);
    res.json(updatedDef);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar definição de item." });
    }
  }
};

export const deleteItemDefinition = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await ItemDefinition.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar definição de item." });
  }
};
