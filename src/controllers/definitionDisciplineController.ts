import { Request, Response } from 'express';
import { DefinitionDiscipline, DefinitionDisciplinePower } from '../models';

export const createDefinitionDiscipline = async (req: Request, res: Response) => {
  try {
    const { name, description, gameStyle, powers } = req.body;
    
    const discipline = await DefinitionDiscipline.create({ name, description, gameStyle });
    
    if (powers && Array.isArray(powers)) {
      for (const p of powers) {
        await DefinitionDisciplinePower.create({
          definitionDisciplineId: discipline.id,
          name: p.name,
          level: p.level,
          description: p.description,
          costType: p.costType,
          costAmount: p.costAmount,
          duration: p.duration,
          dicePool: p.dicePool,
          systemNotes: p.systemNotes,
          gameStyle: gameStyle || 'VAMPIRE'
        });
      }
    }

    // Retorna com os poderes recém-criados
    const createdDiscipline = await DefinitionDiscipline.findByPk(discipline.id, {
      include: [DefinitionDisciplinePower]
    });

    res.status(201).json(createdDiscipline);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar a Disciplina' });
  }
};

export const getAllDefinitionDisciplines = async (req: Request, res: Response) => {
  try {
    const disciplines = await DefinitionDiscipline.findAll({
      include: [DefinitionDisciplinePower],
      order: [
        ['name', 'ASC'],
        [DefinitionDisciplinePower, 'level', 'ASC']
      ]
    });
    res.json(disciplines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar as Disciplinas' });
  }
};

export const getDefinitionDisciplineById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const discipline = await DefinitionDiscipline.findByPk(id, {
      include: [DefinitionDisciplinePower],
      order: [
        [DefinitionDisciplinePower, 'level', 'ASC']
      ]
    });
    if (!discipline) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }
    res.json(discipline);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar a Disciplina' });
  }
};

export const updateDefinitionDiscipline = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const discipline = await DefinitionDiscipline.findByPk(id);
    if (!discipline) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }

    await discipline.update({ name, description });
    res.json(discipline);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar a Disciplina' });
  }
};

export const deleteDefinitionDiscipline = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const discipline = await DefinitionDiscipline.findByPk(id);
    if (!discipline) {
      return res.status(404).json({ error: 'Disciplina não encontrada' });
    }

    await discipline.destroy(); // Isso deve apagar em cascata os poderes também, se configurado onDelete: CASCADE no BD
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir a Disciplina' });
  }
};
