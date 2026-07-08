import { Request, Response } from "express";
import { characterAttributeSchema, updateCharacterAttributeSchema } from "../schemas/attributeSchemas";
import { z } from "zod";
import { CharacterAttribute, Character, AttributeDefinition } from "../models";

export const getCharacterAttributes = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const attributes = await CharacterAttribute.findAll({
      where: { characterId },
      include: [{ model: AttributeDefinition, as: 'attributeDefinition' }],
    });
    res.json(attributes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar atributos do personagem." });
  }
};

export const assignCharacterAttribute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { characterId } = req.params;
    const data = characterAttributeSchema.parse(req.body);

    // Verify character exists
    const character = await Character.findByPk(characterId);
    if (!character) {
      res.status(404).json({ error: "Personagem não encontrado." });
      return;
    }

    // Verify attribute definition exists
    const attrDef = await AttributeDefinition.findOne({ where: { id: data.attributeId } });
    if (!attrDef) {
      res.status(404).json({ error: "Definição de atributo não encontrada." });
      return;
    }

    // Check for existing link
    const existing = await CharacterAttribute.findOne({
      where: { characterId, attributeId: data.attributeId }
    });

    if (existing) {
      res.status(400).json({ error: "Este atributo já está associado ao personagem." });
      return;
    }

    const charAttr = await CharacterAttribute.create({
      
        characterId,
        attributeId: data.attributeId,
        value: data.value,
        specialty: data.specialty,
        description: data.description,
      
    } as any);
    // Eager loading ignored by create, typically fetched after.;
    
    res.status(201).json(charAttr);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao associar atributo ao personagem." });
    }
  }
};

export const updateCharacterAttribute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params; // ID of the CharacterAttribute record
    const data = updateCharacterAttributeSchema.parse(req.body);

    const updated = await CharacterAttribute.update(data as any, { where: { id } });

    res.json(updated);
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ errors: error.errors });
    } else {
      console.error(error);
      res.status(500).json({ error: "Erro ao atualizar atributo do personagem." });
    }
  }
};

export const unassignCharacterAttribute = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    await CharacterAttribute.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao desassociar atributo." });
  }
};
