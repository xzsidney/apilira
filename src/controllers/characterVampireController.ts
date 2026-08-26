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
import { 
  DefinitionClan, 
  DefinitionPredator, 
  DefinitionResonance, 
  DefinitionBloodPotency, 
  DefinitionAttribute, 
  DefinitionSkill, 
  DefinitionDiscipline, 
  DefinitionDisciplinePower, 
  DefinitionBackground, 
  DefinitionMeritFlaw, 
  DefinitionLocation, 
  DefinitionEquipment, 
  CharacterHaven,
  CharacterActivityLog,
  DefinitionMissionIdle,
  DefinitionMissionIdleAction
} from '../models';

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
        {
          model: CharacterVampireEquipment,
          separate: true,
          include: [{ model: DefinitionEquipment }]
        },
        {
          model: CharacterHaven,
          as: 'Haven',
          include: [{ model: DefinitionLocation, attributes: ['id', 'name', 'level'] }]
        }
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
    const { 
      name, concept, sire, ambition, desire, history, avatarUrl,
      experienceTotal, experienceSpent,
      healthMax, healthDamageSuperficial, healthDamageAggravated,
      willpowerMax, willpowerDamageSuperficial, willpowerDamageAggravated,
      humanity, hunger, bloodPotencyId, resonanceId, money,
      attributes, skills, disciplines, backgrounds, meritsFlaws
    } = req.body;

    const character = await CharacterVampire.findByPk(id, { transaction });
    if (!character) {
      await transaction.rollback();
      return res.status(404).json({ error: 'Personagem não encontrado' });
    }

    await character.update({
      name, concept, sire, ambition, desire, history, avatarUrl,
      experienceTotal, experienceSpent,
      healthMax, healthDamageSuperficial, healthDamageAggravated,
      willpowerMax, willpowerDamageSuperficial, willpowerDamageAggravated,
      humanity, hunger, bloodPotencyId, resonanceId, money
    }, { transaction });

    // Atualiza coleções filhas se fornecidas
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

    const equipment = await DefinitionEquipment.findByPk(definitionEquipmentId);
    if (!equipment) return res.status(404).json({ error: 'Equipamento não catalogado.' });

    // Extrai o valor numérico de custo
    let itemPrice = 0;
    if (equipment.cost) {
      const cleanNum = equipment.cost.replace(/\D/g, '');
      if (cleanNum && parseInt(cleanNum, 10) > 0) {
        itemPrice = parseInt(cleanNum, 10);
      } else {
        const dotCount = (equipment.cost.match(/●/g) || []).length;
        if (dotCount === 1) itemPrice = 500;
        else if (dotCount === 2) itemPrice = 1500;
        else if (dotCount === 3) itemPrice = 4000;
        else if (dotCount === 4) itemPrice = 10000;
        else if (dotCount >= 5) itemPrice = 25000;
        else itemPrice = 300;
      }
    } else {
      itemPrice = 300;
    }

    if ((character.money || 0) < itemPrice) {
      return res.status(400).json({ 
        error: `Saldo insuficiente! Você possui R$ ${Number(character.money || 0).toLocaleString('pt-BR')}, mas o item custa R$ ${Number(itemPrice).toLocaleString('pt-BR')}.` 
      });
    }

    // Debita o valor da carteira
    character.money = Math.max(0, (character.money || 0) - itemPrice);
    await character.save();

    // Adiciona ou incrementa no inventário
    const existing = await CharacterVampireEquipment.findOne({
      where: { characterVampireId: id, definitionEquipmentId }
    });

    let invItem;
    if (existing) {
      existing.quantity += 1;
      await existing.save();
      invItem = existing;
    } else {
      invItem = await CharacterVampireEquipment.create({
        characterVampireId: id,
        definitionEquipmentId,
        quantity: 1,
        equipped: false
      });
    }

    return res.status(200).json({
      item: invItem,
      newMoney: character.money,
      pricePaid: itemPrice,
      message: `"${equipment.name}" adquirido por R$ ${Number(itemPrice).toLocaleString('pt-BR')}!`
    });
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

export const getCharacterActivityLogs = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const logs = await CharacterActivityLog.findAll({
      where: { characterId: id },
      order: [['createdAt', 'DESC']],
      limit: 10
    });

    const enriched = await Promise.all(logs.map(async (log: any) => {
      try {
        const data = typeof log.toJSON === 'function' ? log.toJSON() : log;
        if (typeof data.resultData === 'string') {
          try {
            data.resultData = JSON.parse(data.resultData);
          } catch {}
        }
        if (data.resultData) {
          if (typeof data.resultData.rewards === 'string') {
            try { data.resultData.rewards = JSON.parse(data.resultData.rewards); } catch {}
          }
          if (typeof data.resultData.report === 'string') {
            try { data.resultData.report = JSON.parse(data.resultData.report); } catch {}
          }
        }
        if (data.activityType === 'IDLE_MISSION' && data.referenceId) {
          const mission = await DefinitionMissionIdle.findByPk(data.referenceId, {
            include: [
              { model: DefinitionLocation, as: 'Location', attributes: ['name'] },
              { model: DefinitionMissionIdleAction, as: 'Actions' }
            ]
          });
          if (mission) {
            const mData = mission.toJSON() as any;
            if (typeof mData.rewardsJson === 'string') {
              try { mData.rewards = JSON.parse(mData.rewardsJson); } catch {}
            }
            data.mission = mData;
          }
        }
        return data;
      } catch (err) {
        return typeof log.toJSON === 'function' ? log.toJSON() : log;
      }
    }));

    return res.json(enriched);
  } catch (error) {
    console.error('Erro ao buscar logs de atividade:', error);
    return res.json([]);
  }
};

// --- HAVEN & RETAINERS MANAGEMENT ---

export const hireRetainer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { retainerId, cost } = req.body;

    const character = await CharacterVampire.findByPk(id);
    if (!character) return res.status(404).json({ error: 'Personagem não encontrado' });

    const price = Number(cost) || 5000;
    if ((character.money || 0) < price) {
      return res.status(400).json({ error: 'Saldo insuficiente em carteira.' });
    }

    let haven = await CharacterHaven.findOne({ where: { characterId: id } });
    if (!haven) {
      haven = await CharacterHaven.create({
        characterId: id,
        locationId: character.currentLocationId || '530d1b31-4171-4770-ae4a-5c12e84cba36',
        securityLevel: 1,
        luxuryLevel: 1,
        attributes: { retainers: [] }
      } as any);
    }

    const attr = (haven.attributes as any) || {};
    const retainers = Array.isArray(attr.retainers) ? [...attr.retainers] : [];

    if (retainers.includes(retainerId)) {
      return res.status(400).json({ error: 'Este especialista já está a serviço do seu refúgio.' });
    }

    retainers.push(retainerId);
    haven.attributes = { ...attr, retainers };
    await haven.save();

    character.money = Math.max(0, (character.money || 0) - price);
    await character.save();

    res.json({
      message: 'Especialista contratado com sucesso!',
      retainers,
      newMoney: character.money
    });
  } catch (error) {
    console.error('Erro ao contratar especialista:', error);
    res.status(500).json({ error: 'Erro ao contratar especialista' });
  }
};

export const consumeHavenBloodBag = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const character = await CharacterVampire.findByPk(id);
    if (!character) return res.status(404).json({ error: 'Personagem não encontrado' });

    if (character.hunger <= 0) {
      return res.status(400).json({ error: 'Sua fome já está saciada (Fome 0).' });
    }

    character.hunger = Math.max(0, character.hunger - 1);
    await character.save();

    res.json({
      message: 'Você consumiu uma bolsa de sangue O- da geladeira do refúgio. Fome saciada em 1 ponto.',
      hunger: character.hunger
    });
  } catch (error) {
    console.error('Erro ao consumir bolsa de sangue:', error);
    res.status(500).json({ error: 'Erro ao consumir bolsa de sangue' });
  }
};

export const upgradeHaven = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { type } = req.body; // 'security' or 'luxury'

    const character = await CharacterVampire.findByPk(id);
    if (!character) return res.status(404).json({ error: 'Personagem não encontrado' });

    let haven = await CharacterHaven.findOne({ where: { characterId: id } });
    if (!haven) {
      haven = await CharacterHaven.create({
        characterId: id,
        locationId: character.currentLocationId || '530d1b31-4171-4770-ae4a-5c12e84cba36',
        securityLevel: 1,
        luxuryLevel: 1,
        attributes: { retainers: [] }
      } as any);
    }

    const currentLevel = type === 'security' ? haven.securityLevel : haven.luxuryLevel;
    if (currentLevel >= 5) {
      return res.status(400).json({ error: 'Nível máximo atingido (Nível 5).' });
    }

    const upgradeCost = (currentLevel + 1) * 3500;
    if ((character.money || 0) < upgradeCost) {
      return res.status(400).json({ 
        error: `Saldo insuficiente! Custa R$ ${Number(upgradeCost).toLocaleString('pt-BR')} para evoluir para Nível ${currentLevel + 1}.` 
      });
    }

    character.money = Math.max(0, (character.money || 0) - upgradeCost);
    await character.save();

    if (type === 'security') {
      haven.securityLevel += 1;
    } else {
      haven.luxuryLevel += 1;
    }
    await haven.save();

    res.json({
      message: `Refúgio evoluído com sucesso para Nível ${type === 'security' ? haven.securityLevel : haven.luxuryLevel}!`,
      haven,
      newMoney: character.money
    });
  } catch (error) {
    console.error('Erro ao evoluir refúgio:', error);
    res.status(500).json({ error: 'Erro ao evoluir refúgio' });
  }
};
