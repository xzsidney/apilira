import { Request, Response } from 'express';
import { sequelize } from '../models';
import { CharacterVampire } from '../models/CharacterVampire';
import { CharacterVampireAttribute } from '../models/CharacterVampireAttribute';
import { CharacterVampireSkill } from '../models/CharacterVampireSkill';
import { CharacterVampireDiscipline } from '../models/CharacterVampireDiscipline';
import { CharacterVampirePower } from '../models/CharacterVampirePower';
import { CharacterVampireMeritFlaw } from '../models/CharacterVampireMeritFlaw';
import { CharacterVampireBackground } from '../models/CharacterVampireBackground';
import { CharacterVampireEquipment } from '../models/CharacterVampireEquipment';
import { DefinitionClan, DefinitionPredator, DefinitionResonance, DefinitionBloodPotency, DefinitionAttribute, DefinitionSkill, DefinitionDiscipline, DefinitionDisciplinePower } from '../models';

export const createCharacterVampire = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();

  try {
    const {
      attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments,
      ...characterData
    } = req.body;

    // Cria o personagem principal
    const character = await CharacterVampire.create(characterData, { transaction });

    // Insere as coleções nas tabelas associativas se existirem
    if (attributes && attributes.length > 0) {
      const mapped = attributes.map((a: any) => ({ ...a, characterVampireId: character.id }));
      await CharacterVampireAttribute.bulkCreate(mapped, { transaction });
    }

    if (skills && skills.length > 0) {
      const mapped = skills.map((s: any) => ({ ...s, characterVampireId: character.id }));
      await CharacterVampireSkill.bulkCreate(mapped, { transaction });
    }

    if (disciplines && disciplines.length > 0) {
      const mapped = disciplines.map((d: any) => ({ ...d, characterVampireId: character.id }));
      await CharacterVampireDiscipline.bulkCreate(mapped, { transaction });
    }

    if (powers && powers.length > 0) {
      const mapped = powers.map((p: any) => ({ ...p, characterVampireId: character.id }));
      await CharacterVampirePower.bulkCreate(mapped, { transaction });
    }

    if (meritsFlaws && meritsFlaws.length > 0) {
      const mapped = meritsFlaws.map((m: any) => ({ ...m, characterVampireId: character.id }));
      await CharacterVampireMeritFlaw.bulkCreate(mapped, { transaction });
    }

    if (backgrounds && backgrounds.length > 0) {
      const mapped = backgrounds.map((b: any) => ({ ...b, characterVampireId: character.id }));
      await CharacterVampireBackground.bulkCreate(mapped, { transaction });
    }

    if (equipments && equipments.length > 0) {
      const mapped = equipments.map((e: any) => ({ ...e, characterVampireId: character.id }));
      await CharacterVampireEquipment.bulkCreate(mapped, { transaction });
    }

    await transaction.commit();
    res.status(201).json(character);
  } catch (error) {
    await transaction.rollback();
    console.error('Erro ao criar Ficha do Vampiro:', error);
    res.status(500).json({ error: 'Erro interno ao salvar a ficha' });
  }
};

export const getCharacterVampireById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    // Busca o personagem com TODAS as associações para montar a ficha completa!
    const character = await CharacterVampire.findByPk(id, {
      include: [
        { model: DefinitionClan, attributes: ['name'] },
        { model: DefinitionPredator, attributes: ['name'] },
        { model: DefinitionResonance, attributes: ['name'] },
        { model: DefinitionBloodPotency, attributes: ['level', 'bloodSurge', 'mendAmount'] },
        { 
          model: CharacterVampireAttribute, 
          include: [{ model: DefinitionAttribute, attributes: ['name', 'category'] }]
        },
        { 
          model: CharacterVampireSkill, 
          include: [{ model: DefinitionSkill, attributes: ['name', 'category'] }]
        },
        { 
          model: CharacterVampireDiscipline, 
          include: [{ model: DefinitionDiscipline, attributes: ['name'] }]
        },
        { 
          model: CharacterVampirePower, 
          include: [{ model: DefinitionDisciplinePower, attributes: ['name', 'level'] }]
        },
      ]
    });

    if (!character) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }

    res.json(character);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar personagem' });
  }
};

export const getAllCharacterVampiresByUser = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id; // Pegando do authMiddleware
    if (!userId) {
      return res.status(401).json({ error: 'Não autorizado' });
    }

    const characters = await CharacterVampire.findAll({
      where: { userId },
      include: [
        { model: DefinitionClan, attributes: ['name'] },
        { model: DefinitionPredator, attributes: ['name'] }
      ]
    });

    res.json(characters);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar personagens do usuário' });
  }
};

export const updateCharacterVampire = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();
  try {
    const { id } = req.params;
    const character = await CharacterVampire.findByPk(id);

    if (!character) {
      await transaction.rollback();
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }

    const {
      attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments,
      ...updateData
    } = req.body;

    // Atualiza os dados bases
    await character.update(updateData, { transaction });

    // Para as coleções associativas, o padrão em PUT completo é recriar:
    if (attributes) {
      await CharacterVampireAttribute.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = attributes.map((a: any) => ({ ...a, characterVampireId: id }));
      await CharacterVampireAttribute.bulkCreate(mapped, { transaction });
    }
    if (skills) {
      await CharacterVampireSkill.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = skills.map((s: any) => ({ ...s, characterVampireId: id }));
      await CharacterVampireSkill.bulkCreate(mapped, { transaction });
    }
    // Repetir para os outros arrays conforme necessidade de update completo da ficha.
    // Para simplificar a POC, não faremos o replace completo de disciplinas aqui, 
    // assumindo que os arrays mandados são para substituição total.

    await transaction.commit();
    res.json({ message: 'Personagem atualizado com sucesso', character });
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar personagem' });
  }
};

export const deleteCharacterVampire = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await CharacterVampire.findByPk(id);
    if (!character) {
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }

    // A deleção em cascata (ON DELETE CASCADE) do banco cuidará das tabelas filhas!
    await character.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir personagem' });
  }
};
