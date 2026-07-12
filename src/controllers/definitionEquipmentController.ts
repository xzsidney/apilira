import { Request, Response } from 'express';
import { DefinitionEquipment } from '../models';

export const createDefinitionEquipment = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const equipment = await DefinitionEquipment.create(data);
    res.status(201).json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o equipamento base' });
  }
};

export const getAllDefinitionEquipments = async (req: Request, res: Response) => {
  try {
    const equipments = await DefinitionEquipment.findAll();
    res.json(equipments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os equipamentos base' });
  }
};

export const getDefinitionEquipmentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipment = await DefinitionEquipment.findByPk(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipamento não encontrado' });
    }
    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o equipamento base' });
  }
};

export const updateDefinitionEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const equipment = await DefinitionEquipment.findByPk(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipamento não encontrado' });
    }

    await equipment.update(data);
    res.json(equipment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o equipamento base' });
  }
};

export const deleteDefinitionEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const equipment = await DefinitionEquipment.findByPk(id);
    if (!equipment) {
      return res.status(404).json({ error: 'Equipamento não encontrado' });
    }

    await equipment.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o equipamento base' });
  }
};
