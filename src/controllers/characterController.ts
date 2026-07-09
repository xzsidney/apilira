import { Response } from "express";
import { createCharacterSchema, updateCharacterSchema } from "../schemas/characterSchemas";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { GameStyle, PowerType } from "../types/enums";
import { 
  Character,
  VampireClaDefinition,
  WerewolfTribeDefinition,
  MageTraditionDefinition,
  HunterCreedDefinition,
  CharacterAttribute, 
  CharacterSkill, 
  CharacterStatus, 
  CharacterPower, 
  CharacterPowerSelection, 
  CharacterMeritFlaw, 
  CharacterItem,
  CharacterBackground,
  CharacterHaven,
  sequelize 
} from "../models";

const characterIncludes = [
  { model: VampireClaDefinition, as: 'vampireCla' },
  { model: WerewolfTribeDefinition, as: 'werewolfTribe' },
  { model: MageTraditionDefinition, as: 'mageTradition' },
  { model: HunterCreedDefinition, as: 'hunterCreed' },
  { model: CharacterAttribute, as: 'attributes', include: ['attributeDefinition'] },
  { model: CharacterSkill, as: 'skills', include: ['skillDefinition'] },
  { model: CharacterStatus, as: 'statuses', include: ['statusDefinition'] },
  { model: CharacterPower, as: 'powers', include: [
      'powerDefinition',
      { model: CharacterPowerSelection, as: 'selections', include: ['powerLevelDefinition'] }
    ]
  },
  { model: CharacterMeritFlaw, as: 'meritsFlaws', include: ['meritFlawDefinition'] },
  { model: CharacterItem, as: 'items', include: ['itemDefinition'] },
  { model: CharacterBackground, as: 'backgrounds', include: ['backgroundDefinition'] },
  { model: CharacterHaven, as: 'havens', include: ['havenDefinition'] }
];

// Helper to map GameStyle to its PowerType
const getPowerType = (style: GameStyle): PowerType => {
  switch (style) {
    case GameStyle.VAMPIRE:
      return PowerType.DISCIPLINE;
    case GameStyle.WEREWOLF:
      return PowerType.GIFT;
    case GameStyle.MAGE:
      return PowerType.SPHERE;
    case GameStyle.HUNTER:
      return PowerType.EDGE;
    default:
      return PowerType.DISCIPLINE;
  }
};

export const createCharacter = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const validated = createCharacterSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({ errors: validated.error.errors });
    }

    const { name, gameStyle, isNpc, isTemplate, concept, nature, demeanor, chronicle, history, roleplayHints, health, maxHealth, willpower, maxWillpower, energy, maxEnergy, attributes, skills, statuses, powers, meritsFlaws, items, backgrounds, havens } = validated.data;

    const t = await sequelize.transaction();
    try {
      const character = await Character.create({
        name,
        gameStyle,
        vampireClaId: gameStyle === GameStyle.VAMPIRE ? (validated.data as any).vampireClaId : null,
        werewolfTribeId: gameStyle === GameStyle.WEREWOLF ? (validated.data as any).werewolfTribeId : null,
        mageTraditionId: gameStyle === GameStyle.MAGE ? (validated.data as any).mageTraditionId : null,
        hunterCreedId: gameStyle === GameStyle.HUNTER ? (validated.data as any).hunterCreedId : null,
        isNpc: isNpc ?? false,
        isTemplate: isTemplate ?? false,
        concept,
        nature,
        demeanor,
        chronicle,
        history,
        roleplayHints,
        health,
        maxHealth,
        willpower,
        maxWillpower,
        energy,
        maxEnergy,
        userId: req.userId,
      } as any, { transaction: t });

      const charId = character.id;

      if (attributes && attributes.length > 0) {
        await CharacterAttribute.bulkCreate(attributes.map(a => ({
          characterId: charId,
          attributeId: a.attributeId,
          value: a.value || 1,
          specialty: a.specialty,
          description: a.description
        })) as any, { transaction: t });
      }

      if (skills && skills.length > 0) {
        await CharacterSkill.bulkCreate(skills.map(s => ({
          characterId: charId,
          skillId: s.skillId,
          value: s.value,
          specialty: s.specialty,
          description: s.description
        })) as any, { transaction: t });
      }

      if (statuses && statuses.length > 0) {
        await CharacterStatus.bulkCreate(statuses.map(s => ({
          characterId: charId,
          statusId: s.statusId,
          value: s.value
        })) as any, { transaction: t });
      }

      if (powers && powers.length > 0) {
        for (const p of powers) {
          const cp = await CharacterPower.create({
            characterId: charId,
            powerDefinitionId: p.powerDefinitionId,
            level: p.level
          } as any, { transaction: t });

          if (p.selections && p.selections.length > 0) {
            await CharacterPowerSelection.bulkCreate(p.selections.map(s => ({
              characterPowerId: cp.id,
              powerLevelDefinitionId: s.powerLevelDefinitionId
            })) as any, { transaction: t });
          }
        }
      }

      if (meritsFlaws && meritsFlaws.length > 0) {
        await CharacterMeritFlaw.bulkCreate(meritsFlaws.map(m => ({
          characterId: charId,
          meritFlawId: m.meritFlawId,
          points: m.points,
          description: m.description
        })) as any, { transaction: t });
      }

      if (items && items.length > 0) {
        await CharacterItem.bulkCreate(items.map(i => ({
          characterId: charId,
          itemId: i.itemId,
          quantity: i.quantity,
          description: i.description
        })) as any, { transaction: t });
      }

      if (backgrounds && backgrounds.length > 0) {
        await CharacterBackground.bulkCreate(backgrounds.map(b => ({
          characterId: charId,
          backgroundDefinitionId: b.backgroundDefinitionId,
          value: b.value,
          description: b.description
        })) as any, { transaction: t });
      }

      if (havens && havens.length > 0) {
        await CharacterHaven.bulkCreate(havens.map(h => ({
          characterId: charId,
          havenDefinitionId: h.havenDefinitionId,
          value: h.value,
          description: h.description
        })) as any, { transaction: t });
      }

      await t.commit();
      
      const createdChar = await Character.findByPk(charId, { include: characterIncludes });
      return res.status(201).json(createdChar);
    } catch (err) {
      await t.rollback();
      throw err;
    }
  } catch (error) {
    console.error("Erro ao criar personagem:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao criar o personagem" });
  }
};

export const listCharacters = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const { gameStyle } = req.query;

    const queryOptions: any = { include: characterIncludes };
    if (gameStyle) {
      queryOptions.where = { gameStyle };
    }

    const characters = await Character.findAll(queryOptions);
    return res.json(characters);
  } catch (error) {
    console.error("Erro ao listar personagens:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao listar personagens" });
  }
};

export const getCharacter = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const { id } = req.params;

    const character = await Character.findByPk(id, { include: characterIncludes });

    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado" });
    }

    return res.json(character);
  } catch (error) {
    console.error("Erro ao obter personagem:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao buscar personagem" });
  }
};

export const updateCharacter = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const { id } = req.params;

    const validated = updateCharacterSchema.safeParse(req.body);
    if (!validated.success) {
      return res.status(400).json({ errors: validated.error.errors });
    }

    const character = await Character.findByPk(id);

    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
    }

    const { name, experienceTotal, experienceSpent, isNpc, isTemplate, concept, nature, demeanor, chronicle, history, roleplayHints, health, maxHealth, willpower, maxWillpower, energy, maxEnergy, attributes, skills, statuses, powers, meritsFlaws, items, vampireClaId, werewolfTribeId, mageTraditionId, hunterCreedId } = validated.data;

    const t = await sequelize.transaction();
    try {
      await Character.update({
        name,
        experienceTotal,
        experienceSpent,
        isNpc,
        isTemplate,
        concept,
        nature,
        demeanor,
        chronicle,
        history,
        roleplayHints,
        health,
        maxHealth,
        willpower,
        maxWillpower,
        energy,
        maxEnergy,
        vampireClaId: character.gameStyle === GameStyle.VAMPIRE ? (vampireClaId !== undefined ? vampireClaId : character.vampireClaId) : null,
        werewolfTribeId: character.gameStyle === GameStyle.WEREWOLF ? (werewolfTribeId !== undefined ? werewolfTribeId : character.werewolfTribeId) : null,
        mageTraditionId: character.gameStyle === GameStyle.MAGE ? (mageTraditionId !== undefined ? mageTraditionId : character.mageTraditionId) : null,
        hunterCreedId: character.gameStyle === GameStyle.HUNTER ? (hunterCreedId !== undefined ? hunterCreedId : character.hunterCreedId) : null,
      } as any, { where: { id }, transaction: t });

      if (skills !== undefined) {
        await CharacterSkill.destroy({ where: { characterId: id }, transaction: t });
        if (skills.length > 0) {
          await CharacterSkill.bulkCreate(skills.map(s => ({
            characterId: id,
            skillId: s.skillId,
            value: s.value,
            specialty: s.specialty,
            description: s.description
          })) as any, { transaction: t });
        }
      }

      if (attributes !== undefined) {
        await CharacterAttribute.destroy({ where: { characterId: id }, transaction: t });
        if (attributes.length > 0) {
          await CharacterAttribute.bulkCreate(attributes.map(a => ({
            characterId: id,
            attributeId: a.attributeId,
            value: a.value || 1,
            specialty: a.specialty,
            description: a.description
          })) as any, { transaction: t });
        }
      }

      if (meritsFlaws !== undefined) {
        await CharacterMeritFlaw.destroy({ where: { characterId: id }, transaction: t });
        if (meritsFlaws.length > 0) {
          await CharacterMeritFlaw.bulkCreate(meritsFlaws.map(m => ({
            characterId: id,
            meritFlawId: m.meritFlawId,
            points: m.points,
            description: m.description
          })) as any, { transaction: t });
        }
      }

      if (statuses !== undefined) {
        await CharacterStatus.destroy({ where: { characterId: id }, transaction: t });
        if (statuses.length > 0) {
          await CharacterStatus.bulkCreate(statuses.map(s => ({
            characterId: id,
            statusId: s.statusId,
            value: s.value
          })) as any, { transaction: t });
        }
      }

      if (items !== undefined) {
        await CharacterItem.destroy({ where: { characterId: id }, transaction: t });
        if (items.length > 0) {
          await CharacterItem.bulkCreate(items.map(i => ({
            characterId: id,
            itemId: i.itemId,
            quantity: i.quantity,
            description: i.description
          })) as any, { transaction: t });
        }
      }

      if (powers !== undefined) {
        const existingPowers = await CharacterPower.findAll({ where: { characterId: id }, transaction: t });
        for (const ep of existingPowers) {
          await CharacterPowerSelection.destroy({ where: { characterPowerId: ep.id }, transaction: t });
        }
        await CharacterPower.destroy({ where: { characterId: id }, transaction: t });
        
        for (const p of powers) {
          const cp = await CharacterPower.create({
            characterId: id,
            powerDefinitionId: p.powerDefinitionId,
            level: p.level
          } as any, { transaction: t });

          if (p.selections && p.selections.length > 0) {
            await CharacterPowerSelection.bulkCreate(p.selections.map(s => ({
              characterPowerId: cp.id,
              powerLevelDefinitionId: s.powerLevelDefinitionId
            })) as any, { transaction: t });
          }
        }
      }

      await t.commit();
      
      const updatedCharacter = await Character.findByPk(id, { include: characterIncludes });
      return res.json(updatedCharacter);
    } catch (err) {
      await t.rollback();
      throw err;
    }
  } catch (error) {
    console.error("Erro ao atualizar personagem:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao atualizar personagem" });
  }
};

export const deleteCharacter = async (req: AuthenticatedRequest, res: Response) => {
  try {
    if (!req.userId) {
      return res.status(401).json({ error: "Não autorizado" });
    }

    const { id } = req.params;

    const character = await Character.findByPk(id);

    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
    }

    await Character.destroy({ where: { id } });

    return res.json({ message: "Personagem deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar personagem:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao deletar personagem" });
  }
};
