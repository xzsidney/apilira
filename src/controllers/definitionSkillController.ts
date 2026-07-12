import { Request, Response } from 'express';
import { DefinitionSkill } from '../models';

export const createDefinitionSkill = async (req: Request, res: Response) => {
  try {
    const { name, description, type, gameStyle } = req.body;
    const skill = await DefinitionSkill.create({ name, description, type, gameStyle });
    res.status(201).json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a habilidade base' });
  }
};

export const getAllDefinitionSkills = async (req: Request, res: Response) => {
  try {
    const skills = await DefinitionSkill.findAll();
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as habilidades base' });
  }
};

export const getDefinitionSkillById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skill = await DefinitionSkill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }
    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar a habilidade base' });
  }
};

export const updateDefinitionSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description, type, gameStyle } = req.body;

    const skill = await DefinitionSkill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }

    await skill.update({ name, description, type, gameStyle });
    res.json(skill);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a habilidade base' });
  }
};

export const deleteDefinitionSkill = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const skill = await DefinitionSkill.findByPk(id);
    if (!skill) {
      return res.status(404).json({ error: 'Habilidade não encontrada' });
    }

    await skill.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a habilidade base' });
  }
};
