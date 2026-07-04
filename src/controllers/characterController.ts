import { Response } from "express";
import prisma from "../config/db";
import { createCharacterSchema, updateCharacterSchema } from "../schemas/characterSchemas";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { GameStyle, PowerType } from "@prisma/client";

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

    const { name, gameStyle, isNpc, isTemplate, attributes, skills, statuses, powers, meritsFlaws, items, backgrounds, havens } = validated.data;

    // Prisma nested creation inside a single transaction
    const character = await prisma.character.create({
      data: {
        name,
        gameStyle,
        isNpc: isNpc ?? false,
        isTemplate: isTemplate ?? false,
        userId: req.userId,
        attributes: {
          create: attributes,
        },
        skills: {
          create: skills?.map((s) => ({
            skillId: s.skillId,
            value: s.value,
            specialty: s.specialty,
            description: s.description,
          })) || [],
        },
        statuses: {
          create: statuses?.map((s) => ({
            statusId: s.statusId,
            value: s.value,
          })) || [],
        },
        powers: {
          create: powers?.map((p) => ({
            powerDefinitionId: p.powerDefinitionId,
            level: p.level,
            selections: {
              create: p.selections?.map(s => ({
                powerLevelDefinitionId: s.powerLevelDefinitionId
              })) || []
            }
          })) || [],
        },
        meritsFlaws: {
          create: meritsFlaws?.map((m) => ({
            meritFlawId: m.meritFlawId,
            points: m.points,
            description: m.description,
          })) || [],
        },
        items: {
          create: items,
        },
        backgrounds: {
          create: backgrounds,
        },
        havens: {
          create: havens,
        },
      },
      include: {
        attributes: true,
        skills: true,
        statuses: true,
        powers: true,
        meritsFlaws: true,
        items: true,
        backgrounds: true,
        havens: true,
      },
    });

    return res.status(201).json(character);
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

    const characters = await prisma.character.findMany({
      where: { userId: req.userId },
      include: {
        attributes: true,
        skills: true,
        statuses: { include: { status: true } },
        powers: {
          include: {
            powerDefinition: { include: { powerLevels: true } },
            selections: { include: { powerLevelDefinition: true } }
          }
        },
        meritsFlaws: true,
        items: true,
        backgrounds: true,
        havens: true,
      },
    });

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

    const character = await prisma.character.findFirst({
      where: {
        id,
        userId: req.userId,
      },
      include: {
        attributes: true,
        skills: true,
        statuses: { include: { status: true } },
        powers: {
          include: {
            powerDefinition: { include: { powerLevels: true } },
            selections: { include: { powerLevelDefinition: true } }
          }
        },
        meritsFlaws: true,
        items: true,
        backgrounds: true,
        havens: true,
      },
    });

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

    // Verify ownership and get current gameStyle
    const character = await prisma.character.findFirst({
      where: {
        id,
        userId: req.userId,
      },
    });

    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
    }

    const { name, experienceTotal, experienceSpent, isNpc, isTemplate, attributes, skills, statuses, powers, meritsFlaws, items } = validated.data;

    // Use transaction to update base table and replace lists
    const updatedCharacter = await prisma.$transaction(async (tx) => {
      // 1. Update base character fields
      await tx.character.update({
        where: { id },
        data: {
          name,
          experienceTotal,
          experienceSpent,
          isNpc,
          isTemplate,
        },
      });

      // 2. Replace Skills if provided
      if (skills !== undefined) {
        await tx.characterSkill.deleteMany({ where: { characterId: id } });
        if (skills.length > 0) {
          await tx.characterSkill.createMany({
            data: skills.map((s) => ({
              characterId: id,
              skillId: s.skillId,
              value: s.value,
              specialty: s.specialty,
              description: s.description,
            })),
          });
        }
      }

      // 5. Replace Powers if provided
      if (powers !== undefined) {
        // Find existing character powers to delete their selections
        const existingPowers = await tx.characterPower.findMany({ where: { characterId: id } });
        for (const ep of existingPowers) {
          await tx.characterPowerSelection.deleteMany({ where: { characterPowerId: ep.id } });
        }
        await tx.characterPower.deleteMany({ where: { characterId: id } });
        
        for (const p of powers) {
          await tx.characterPower.create({
            data: {
              characterId: id,
              powerDefinitionId: p.powerDefinitionId,
              level: p.level,
              selections: {
                create: p.selections?.map(s => ({
                  powerLevelDefinitionId: s.powerLevelDefinitionId
                })) || []
              }
            }
          });
        }
      }

      // 2.5. Replace Attributes if provided
      if (attributes !== undefined) {
        await tx.characterAttribute.deleteMany({ where: { characterId: id } });
        if (attributes.length > 0) {
          await tx.characterAttribute.createMany({
            data: attributes.map((attr) => ({
              characterId: id,
              attributeId: attr.attributeId,
              value: attr.value || 1,
              specialty: attr.specialty,
              description: attr.description,
            })),
          });
        }
      }

      // 2. Replace Merits/Flaws if provided
      if (meritsFlaws !== undefined) {
        await tx.characterMeritFlaw.deleteMany({ where: { characterId: id } });
        if (meritsFlaws.length > 0) {
          await tx.characterMeritFlaw.createMany({
            data: meritsFlaws.map((m) => ({
              characterId: id,
              meritFlawId: m.meritFlawId,
              points: m.points,
              description: m.description,
            })),
          });
        }
      }

      // 3. Replace Statuses if provided
      if (statuses !== undefined) {
        await tx.characterStatus.deleteMany({ where: { characterId: id } });
        if (statuses.length > 0) {
          await tx.characterStatus.createMany({
            data: statuses.map((s) => ({
              characterId: id,
              statusId: s.statusId,
              value: s.value,
            })),
          });
        }
      }

      // 4. Replace Items if provided
      if (items !== undefined) {
        await tx.characterItem.deleteMany({ where: { characterId: id } });
        if (items.length > 0) {
          await tx.characterItem.createMany({
            data: items.map((item) => ({
              characterId: id,
              itemId: item.itemId,
              quantity: item.quantity,
              description: item.description,
            })),
          });
        }
      }

      // Fetch final updated character
      return await tx.character.findUnique({
        where: { id },
        include: {
          attributes: true,
          skills: true,
          statuses: { include: { status: true } },
          powers: {
            include: {
              powerDefinition: { include: { powerLevels: true } },
              selections: { include: { powerLevelDefinition: true } }
            }
          },
          meritsFlaws: true,
          items: true,
        },
      });
    });

    return res.json(updatedCharacter);
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

    // Verify ownership
    const character = await prisma.character.findFirst({
      where: {
        id,
        userId: req.userId,
      },
    });

    if (!character) {
      return res.status(404).json({ error: "Personagem não encontrado ou não pertence a este usuário" });
    }

    // Cascade delete via Prisma configuration
    await prisma.character.delete({
      where: { id },
    });

    return res.json({ message: "Personagem deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar personagem:", error);
    return res.status(500).json({ error: "Erro interno no servidor ao deletar personagem" });
  }
};
