import { Request, Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/authMiddleware';
import { sequelize } from '../models';
import { Op } from 'sequelize';
import { CharacterVampire } from '../models/CharacterVampire';
import { CharacterVampireAttribute } from '../models/CharacterVampireAttribute';
import { CharacterVampireSkill } from '../models/CharacterVampireSkill';
import { CharacterVampireDiscipline } from '../models/CharacterVampireDiscipline';
import { CharacterVampirePower } from '../models/CharacterVampirePower';
import { CharacterVampireMeritFlaw } from '../models/CharacterVampireMeritFlaw';
import { CharacterVampireBackground } from '../models/CharacterVampireBackground';
import { CharacterVampireEquipment } from '../models/CharacterVampireEquipment';
import { DefinitionClan, DefinitionPredator, DefinitionResonance, DefinitionBloodPotency, DefinitionAttribute, DefinitionSkill, DefinitionDiscipline, DefinitionDisciplinePower, DefinitionBackground, DefinitionMeritFlaw } from '../models';

export const getAvailableSires = async (req: Request, res: Response) => {
  try {
    const { clanId } = req.query;
    if (!clanId) {
      return res.status(400).json({ error: 'clanId é obrigatório' });
    }
    
    // Busca NPCs ou Vampiros do mesmo clã que sejam de geração mais antiga (menor que 12, que é o padrão do neófito)
    const sires = await CharacterVampire.findAll({
      where: {
        clanId: String(clanId),
        generation: {
          [Op.lt]: 12
        }
      },
      attributes: ['id', 'name', 'generation', 'concept']
    });

    res.json(sires);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar senhores disponíveis' });
  }
};

export const createCharacterVampire = async (req: Request, res: Response) => {
  const transaction = await sequelize.transaction();

  try {
    const authReq = req as AuthenticatedRequest;
    const userId = authReq.userId || req.body.userId;

    const {
      attributes, skills, disciplines, powers, meritsFlaws, backgrounds, equipments,
      ...characterData
    } = req.body;

    characterData.userId = userId;

    // Segurança (Regras Fixas Imutáveis na Criação de Neófitos)
    characterData.generation = 12; 

    // Busca a Potência de Sangue nível 1 para garantir o ID correto
    const bp1 = await DefinitionBloodPotency.findOne({ where: { level: 1 } });
    if (bp1) {
      characterData.bloodPotencyId = bp1.id;
    }

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

    let finalDisciplines = disciplines || [];
    
    if (finalDisciplines.length === 0) {
      const clan = await DefinitionClan.findByPk(characterData.clanId);
      if (clan && clan.disciplines) {
        const discNames = clan.disciplines.split(',').map((s: string) => s.trim());
        const dbDiscs = await DefinitionDiscipline.findAll({ where: { name: { [Op.in]: discNames } } });
        
        if (dbDiscs.length > 0) finalDisciplines.push({ definitionDisciplineId: dbDiscs[0].id, value: 2 });
        if (dbDiscs.length > 1) finalDisciplines.push({ definitionDisciplineId: dbDiscs[1].id, value: 1 });
      }
    }

    if (finalDisciplines.length > 0) {
      const mapped = finalDisciplines.map((d: any) => ({ ...d, characterVampireId: character.id }));
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
        { model: DefinitionClan, attributes: ['name', 'weakness'] },
        { model: DefinitionPredator, attributes: ['name'] },
        { model: DefinitionResonance, attributes: ['name'] },
        { model: DefinitionBloodPotency, attributes: ['level', 'bloodSurge', 'mendAmount', 'disciplineBonus', 'baneSeverity', 'feedingPenalty'] },
        { 
          model: CharacterVampireAttribute, 
          separate: true,
          include: [{ model: DefinitionAttribute, attributes: ['name', 'type'] }]
        },
        { 
          model: CharacterVampireSkill, 
          separate: true,
          include: [{ model: DefinitionSkill, attributes: ['name', 'type'] }]
        },
        { 
          model: CharacterVampireDiscipline, 
          separate: true,
          include: [{ model: DefinitionDiscipline, attributes: ['name'] }]
        },
        { 
          model: CharacterVampirePower, 
          separate: true,
          include: [{ model: DefinitionDisciplinePower, attributes: ['name', 'level'] }]
        },
        { 
          model: CharacterVampireBackground,
          separate: true,
          include: [{ model: DefinitionBackground, attributes: ['name', 'description'] }]
        },
        { 
          model: CharacterVampireMeritFlaw,
          separate: true,
          include: [{ model: DefinitionMeritFlaw, attributes: ['name', 'description', 'type'] }]
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
    const authReq = req as AuthenticatedRequest;
    const userId = authReq.userId || (req as any).user?.id; // Pegando do authMiddleware
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
      const mapped = attributes.map((a: any) => ({
        characterVampireId: id,
        definitionAttributeId: a.definitionAttributeId,
        value: a.value
      }));
      await CharacterVampireAttribute.bulkCreate(mapped, { transaction });
    }
    if (skills) {
      await CharacterVampireSkill.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = skills.map((s: any) => ({
        characterVampireId: id,
        definitionSkillId: s.definitionSkillId,
        value: s.value,
        specialty: s.specialty
      }));
      await CharacterVampireSkill.bulkCreate(mapped, { transaction });
    }
    if (disciplines) {
      await CharacterVampireDiscipline.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = disciplines.map((d: any) => ({
        characterVampireId: id,
        definitionDisciplineId: d.definitionDisciplineId,
        value: d.value
      }));
      await CharacterVampireDiscipline.bulkCreate(mapped, { transaction });
    }
    if (backgrounds) {
      await CharacterVampireBackground.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = backgrounds.map((b: any) => ({
        characterVampireId: id,
        definitionBackgroundId: b.definitionBackgroundId,
        value: b.value,
        details: b.details
      }));
      await CharacterVampireBackground.bulkCreate(mapped, { transaction });
    }
    if (meritsFlaws) {
      await CharacterVampireMeritFlaw.destroy({ where: { characterVampireId: id }, transaction });
      const mapped = meritsFlaws.map((m: any) => ({
        characterVampireId: id,
        definitionMeritFlawId: m.definitionMeritFlawId,
        details: m.details
      }));
      await CharacterVampireMeritFlaw.bulkCreate(mapped, { transaction });
    }

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

export const awakenCharacterVampire = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await CharacterVampire.findByPk(id);
    
    if (!character) {
      return res.status(404).json({ message: 'Personagem nao encontrado' });
    }

    if (character.isAwake) {
      return res.status(400).json({ message: 'Personagem ja esta acordado' });
    }

    // Rouse Check (1d10)
    const roll = Math.floor(Math.random() * 10) + 1;
    let newHunger = character.hunger;
    let message = 'Voce acordou. A Fome esta sob controle.';

    if (roll <= 5) {
      newHunger = Math.min(5, character.hunger + 1);
      message = 'Sua besta se agita. Voce acordou com mais fome.';
    }

    await character.update({
      isAwake: true,
      hunger: newHunger
    });

    res.json({ message, character });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao despertar personagem' });
  }
};


// --- EQUIPMENT MANAGEMENT ---

export const buyEquipment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { definitionEquipmentId } = req.body;

    const character = await CharacterVampire.findByPk(id);
    if (!character) return res.status(404).json({ error: 'Personagem não encontrado.' });

    // Verifica se já tem o equipamento
    const existing = await CharacterVampireEquipment.findOne({
      where: { characterVampireId: id, definitionEquipmentId }
    });

    if (existing) {
      existing.quantity += 1;
      await existing.save();
      return res.json(existing);
    } else {
      const newItem = await CharacterVampireEquipment.create({
        characterVampireId: id,
        definitionEquipmentId,
        quantity: 1,
        equipped: false
      });
      return res.status(201).json(newItem);
    }
  } catch (error) {
    console.error('Erro ao comprar equipamento:', error);
    res.status(500).json({ error: 'Erro ao processar a compra de equipamento.' });
  }
};

export const toggleEquipEquipment = async (req: Request, res: Response) => {
  try {
    const { id, equipmentId } = req.params;

    const existing = await CharacterVampireEquipment.findOne({
      where: { characterVampireId: id, definitionEquipmentId: equipmentId }
    });

    if (!existing) return res.status(404).json({ error: 'Equipamento não encontrado no inventário.' });

    existing.equipped = !existing.equipped;
    await existing.save();

    return res.json(existing);
  } catch (error) {
    console.error('Erro ao equipar/desequipar item:', error);
    res.status(500).json({ error: 'Erro ao equipar/desequipar item.' });
  }
};
