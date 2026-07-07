import { Request, Response } from "express";
import { characterItemSchema, updateCharacterItemSchema } from "../schemas/itemSchemas";
import { z } from "zod";
import { CharacterItem, Character, ItemDefinition } from "../models";

export const getCharacterItems = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const items = await CharacterItem.findAll({
      where: { characterId },
      include: [{ model: ItemDefinition, as: 'itemDefinition' }],
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

    const character = await Character.findByPk(characterId);
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    const itemDef = await ItemDefinition.findByPk(data.itemId);
    if (!itemDef) {
      res.status(404).json({ error: "Definição de item não encontrada." });
      return;
    }

    // Check if the character already has this item
    const existing = await CharacterItem.findOne({
      where: { characterId, itemId: data.itemId }
    });

    if (existing) {
      // Just increment quantity if they re-add the same item
      await CharacterItem.update(
        { quantity: existing.quantity + data.quantity },
        { where: { id: existing.id } }
      );
      const updated = await CharacterItem.findByPk(existing.id, {
        include: [{ model: ItemDefinition, as: 'itemDefinition' }]
      });
      res.status(200).json(updated);
      return;
    }

    const charItem = await CharacterItem.create({
      characterId,
      itemId: data.itemId,
      quantity: data.quantity,
      description: data.description,
    } as any);
    
    // Sequelize create doesn't support eager loading, so we fetch it again
    const charItemWithDef = await CharacterItem.findByPk(charItem.id, {
      include: [{ model: ItemDefinition, as: 'itemDefinition' }]
    });
    
    res.status(201).json(charItemWithDef);
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

    await CharacterItem.update(data as any, { where: { id } });
    
    const updated = await CharacterItem.findByPk(id, {
      include: [{ model: ItemDefinition, as: 'itemDefinition' }]
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
    await CharacterItem.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar item." });
  }
};
