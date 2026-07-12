import { Request, Response } from 'express';
import { DefinitionAttribute } from '../models';

export const createDefinitionAttribute = async (req: Request, res: Response) => {
  try {
    const { name, description, type, gameStyle } = req.body;
    const attribute = await DefinitionAttribute.create({ name, description, type, gameStyle });
    res.status(201).json(attribute);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o atributo base' });
  }
};

export const getAllDefinitionAttributes = async (req: Request, res: Response) => {
  try {
    const attributes = await DefinitionAttribute.findAll();
    res.json(attributes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os atributos base' });
  }
};

export const getDefinitionAttributeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const attribute = await DefinitionAttribute.findByPk(id);
    if (!attribute) {
      return res.status(404).json({ error: 'Atributo não encontrado' });
    }
    res.json(attribute);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o atributo base' });
  }
};

export const updateDefinitionAttribute = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, type, gameStyle } = req.body;

    const attribute = await DefinitionAttribute.findByPk(id);
    if (!attribute) {
      return res.status(404).json({ error: 'Atributo não encontrado' });
    }

    await attribute.update({ name, description, type, gameStyle });
    res.json(attribute);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o atributo base' });
  }
};

export const deleteDefinitionAttribute = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const attribute = await DefinitionAttribute.findByPk(id);
    if (!attribute) {
      return res.status(404).json({ error: 'Atributo não encontrado' });
    }

    await attribute.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o atributo base' });
  }
};
