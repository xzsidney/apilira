import { Request, Response } from "express";
import prisma from "../config/db";
import { characterItemSchema, updateCharacterItemSchema } from "../schemas/itemSchemas";
import { z } from "zod";

export const getCharacterItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const items = await prisma.characterItem.findMany({
      where: { characterId },
      include: { itemDefinition: true },
    });
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar itens do personagem." });
  }
};

export const assignCharacterItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const data = characterItemSchema.parse(req.body);

    const character = await prisma.character.findUnique({ where: { id: characterId } });
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const itemDef = await prisma.itemDefinition.findUnique({ where: { id: data.itemId } });
    if (!itemDef) {
      res.status(404).json({ error: "Definição de item não encontrada." });
      return;
    }

    // Check if the character already has this item
    const existing = await prisma.characterItem.findUnique({
      where: { characterId_itemId: { characterId, itemId: data.itemId } }
    });

    if (existing) {
      // Just increment quantity if they re-add the same item
      const updated = await prisma.characterItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + data.quantity },
        include: { itemDefinition: true }
      });
      res.status(200).json(updated);
      return;
    }

    const charItem = await prisma.characterItem.create({
      data: {
        characterId,
        itemId: data.itemId,
        quantity: data.quantity,
        description: data.description,
      },
      include: { itemDefinition: true }
    });
    
    res.status(201).json(charItem);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao associar item ao personagem." });
    }
  }
};

export const updateCharacterItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; 
    const data = updateCharacterItemSchema.parse(req.body);

    const updated = await prisma.characterItem.update({
      where: { id },
      data,
      include: { itemDefinition: true }
    });

    res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar item do personagem." });
    }
  }
};

export const unassignCharacterItem = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.characterItem.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar item." });
  }
};
