import { Request, Response } from 'express';
import { DefinitionBloodPotency } from '../models';

export const createDefinitionBloodPotency = async (req: Request, res: Response) => {
  try {
    const { level, bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty, gameStyle } = req.body;
    
    // Verifica se já existe esse nível
    const existing = await DefinitionBloodPotency.findOne({ where: { level } });
    if (existing) {
      return res.status(400).json({ error: 'Nível de Potência de Sangue já existe' });
    }

    const bloodPotency = await DefinitionBloodPotency.create({ 
      level, bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty, gameStyle 
    });
    
    res.status(201).json(bloodPotency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a Potência de Sangue' });
  }
};

export const getAllDefinitionBloodPotencies = async (req: Request, res: Response) => {
  try {
    const potencies = await DefinitionBloodPotency.findAll({
      order: [['level', 'ASC']]
    });
    res.json(potencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as Potências de Sangue' });
  }
};

export const getDefinitionBloodPotencyById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const potency = await DefinitionBloodPotency.findByPk(id);
    if (!potency) {
      return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
    }
    res.json(potency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar a Potência de Sangue' });
  }
};

export const updateDefinitionBloodPotency = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty } = req.body;

    const potency = await DefinitionBloodPotency.findByPk(id);
    if (!potency) {
      return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
    }

    await potency.update({ bloodSurge, mendAmount, disciplineBonus, baneSeverity, feedingPenalty });
    res.json(potency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a Potência de Sangue' });
  }
};

export const deleteDefinitionBloodPotency = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const potency = await DefinitionBloodPotency.findByPk(id);
    if (!potency) {
      return res.status(404).json({ error: 'Potência de Sangue não encontrada' });
    }

    await potency.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a Potência de Sangue' });
  }
};
