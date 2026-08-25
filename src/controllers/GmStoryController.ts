import { Response } from "express";
import { Op } from "sequelize";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { 
  DefinitionStoryAdventure, 
  DefinitionStoryNode, 
  DefinitionStoryChoice,
  DefinitionMissionIdle,
  CharacterVampire,
  DefinitionLocation,
  DefinitionEquipment,
  CharacterActivityLog,
  DefinitionClan,
  User
} from "../models";

// ==================== AVENTURAS ====================

export const listAdventures = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    const whereCondition: any = userId ? { [Op.or]: [{ userId }, { userId: null }] } : {};
    const adventures = await DefinitionStoryAdventure.findAll({
      where: whereCondition,
      include: [
        {
          model: DefinitionStoryNode,
          as: "nodes",
          attributes: ["id", "narrativeText", "isEnding"]
        }
      ],
      order: [["createdAt", "DESC"]]
    });
    return res.status(200).json(adventures);
  } catch (error) {
    console.error("Erro ao listar aventuras do GM:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getAdventureDetail = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const whereCondition: any = userId ? { id, [Op.or]: [{ userId }, { userId: null }] } : { id };

    const adventure = await DefinitionStoryAdventure.findOne({
      where: whereCondition,
      include: [
        {
          model: DefinitionStoryNode,
          as: "nodes",
          include: [
            {
              model: DefinitionStoryChoice,
              as: "choices"
            }
          ]
        }
      ]
    });

    if (!adventure) {
      return res.status(404).json({ error: "Aventura não encontrada ou não pertence a este narrador" });
    }

    return res.status(200).json(adventure);
  } catch (error) {
    console.error("Erro ao buscar detalhes da aventura:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const createAdventure = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { title, description, maxCompletions } = req.body;
    const userId = req.userId;

    if (!title) {
      return res.status(400).json({ error: "Título da crônica é obrigatório" });
    }

    const adventure = await DefinitionStoryAdventure.create({
      title,
      description: description || "",
      maxCompletions: maxCompletions !== undefined && maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null,
      userId
    });

    return res.status(201).json(adventure);
  } catch (error) {
    console.error("Erro ao criar aventura:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateAdventure = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, firstNodeId, maxCompletions } = req.body;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(id)
      : await DefinitionStoryAdventure.findOne({ where: { id, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(404).json({ error: "Aventura não encontrada" });
    }

    adventure.title = title ?? adventure.title;
    adventure.description = description ?? adventure.description;
    adventure.firstNodeId = firstNodeId !== undefined ? firstNodeId : adventure.firstNodeId;
    adventure.maxCompletions = maxCompletions !== undefined ? (maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null) : adventure.maxCompletions;

    await adventure.save();
    return res.status(200).json(adventure);
  } catch (error) {
    console.error("Erro ao atualizar aventura:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteAdventure = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(id)
      : await DefinitionStoryAdventure.findOne({ where: { id, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(404).json({ error: "Aventura não encontrada" });
    }

    // Busca todos os nós desta aventura
    const nodes = await DefinitionStoryNode.findAll({ where: { adventureId: id } });
    const nodeIds = nodes.map(n => n.id);

    if (nodeIds.length > 0) {
      // Deleta todas as escolhas ligadas a esses nós
      await DefinitionStoryChoice.destroy({ where: { nodeId: nodeIds } });
      // Deleta todos os nós
      await DefinitionStoryNode.destroy({ where: { id: nodeIds } });
    }

    await adventure.destroy();
    return res.status(200).json({ message: "Aventura excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir aventura:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// ==================== NÓS / CENAS ====================

export const createNode = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { 
      adventureId, 
      narrativeText, 
      speakerName, 
      backgroundImageUrl, 
      leftCharacterImageUrl, 
      rightCharacterImageUrl, 
      isEnding 
    } = req.body;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    if (!adventureId || !narrativeText) {
      return res.status(400).json({ error: "ID da aventura e texto narrativo são obrigatórios" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para esta aventura" });
    }

    const node = await DefinitionStoryNode.create({
      adventureId,
      narrativeText,
      speakerName: speakerName || null,
      backgroundImageUrl: backgroundImageUrl || null,
      leftCharacterImageUrl: leftCharacterImageUrl || null,
      rightCharacterImageUrl: rightCharacterImageUrl || null,
      isEnding: !!isEnding
    });

    // Se for o primeiro nó criado na aventura, define automaticamente como firstNodeId
    if (!adventure.firstNodeId) {
      adventure.firstNodeId = node.id;
      await adventure.save();
    }

    return res.status(201).json(node);
  } catch (error) {
    console.error("Erro ao criar nó da história:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateNode = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { 
      narrativeText, 
      speakerName, 
      backgroundImageUrl, 
      leftCharacterImageUrl, 
      rightCharacterImageUrl, 
      isEnding 
    } = req.body;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const node = await DefinitionStoryNode.findByPk(id);
    if (!node) {
      return res.status(404).json({ error: "Cena/Nó não encontrado" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(node.adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: node.adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para editar esta cena" });
    }

    node.narrativeText = narrativeText ?? node.narrativeText;
    node.speakerName = speakerName !== undefined ? (speakerName || null) : node.speakerName;
    node.backgroundImageUrl = backgroundImageUrl !== undefined ? (backgroundImageUrl || null) : node.backgroundImageUrl;
    node.leftCharacterImageUrl = leftCharacterImageUrl !== undefined ? (leftCharacterImageUrl || null) : node.leftCharacterImageUrl;
    node.rightCharacterImageUrl = rightCharacterImageUrl !== undefined ? (rightCharacterImageUrl || null) : node.rightCharacterImageUrl;
    node.isEnding = isEnding !== undefined ? !!isEnding : node.isEnding;

    await node.save();
    return res.status(200).json(node);
  } catch (error) {
    console.error("Erro ao atualizar nó da história:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteNode = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const node = await DefinitionStoryNode.findByPk(id);
    if (!node) {
      return res.status(404).json({ error: "Cena/Nó não encontrado" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(node.adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: node.adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para excluir esta cena" });
    }

    // Remove as escolhas associadas ao nó
    await DefinitionStoryChoice.destroy({ where: { nodeId: id } });

    // Se era o nó inicial, limpa o firstNodeId da aventura
    if (adventure.firstNodeId === id) {
      adventure.firstNodeId = undefined;
      await adventure.save();
    }

    await node.destroy();
    return res.status(200).json({ message: "Cena excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir nó da história:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// ==================== ESCOLHAS / RAMIFICAÇÕES ====================

export const createChoice = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { 
      nodeId, 
      choiceText, 
      attributeReq, 
      skillReq, 
      difficulty, 
      successNodeId, 
      failureNodeId, 
      customStyle 
    } = req.body;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    if (!nodeId || !choiceText) {
      return res.status(400).json({ error: "ID do nó e texto da escolha são obrigatórios" });
    }

    const node = await DefinitionStoryNode.findByPk(nodeId);
    if (!node) {
      return res.status(404).json({ error: "Cena/Nó pai não encontrado" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(node.adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: node.adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para adicionar escolhas nesta cena" });
    }

    const choice = await DefinitionStoryChoice.create({
      nodeId,
      choiceText,
      attributeReq: attributeReq || null,
      skillReq: skillReq || null,
      difficulty: difficulty ? parseInt(difficulty, 10) : 1,
      successNodeId: successNodeId || null,
      failureNodeId: failureNodeId || null,
      customStyle: customStyle || null
    });

    return res.status(201).json(choice);
  } catch (error) {
    console.error("Erro ao criar escolha:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateChoice = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { 
      choiceText, 
      attributeReq, 
      skillReq, 
      difficulty, 
      successNodeId, 
      failureNodeId, 
      customStyle 
    } = req.body;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const choice = await DefinitionStoryChoice.findByPk(id);
    if (!choice) {
      return res.status(404).json({ error: "Escolha não encontrada" });
    }

    const node = await DefinitionStoryNode.findByPk(choice.nodeId);
    if (!node) {
      return res.status(404).json({ error: "Nó pai não encontrado" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(node.adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: node.adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para editar esta escolha" });
    }

    choice.choiceText = choiceText ?? choice.choiceText;
    choice.attributeReq = attributeReq !== undefined ? (attributeReq || null) : choice.attributeReq;
    choice.skillReq = skillReq !== undefined ? (skillReq || null) : choice.skillReq;
    choice.difficulty = difficulty !== undefined ? (difficulty ? parseInt(difficulty, 10) : 1) : choice.difficulty;
    choice.successNodeId = successNodeId !== undefined ? (successNodeId || null) : choice.successNodeId;
    choice.failureNodeId = failureNodeId !== undefined ? (failureNodeId || null) : choice.failureNodeId;
    choice.customStyle = customStyle !== undefined ? (customStyle || null) : choice.customStyle;

    await choice.save();
    return res.status(200).json(choice);
  } catch (error) {
    console.error("Erro ao atualizar escolha:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteChoice = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    const choice = await DefinitionStoryChoice.findByPk(id);
    if (!choice) {
      return res.status(404).json({ error: "Escolha não encontrada" });
    }

    const node = await DefinitionStoryNode.findByPk(choice.nodeId);
    if (!node) {
      return res.status(404).json({ error: "Nó pai não encontrado" });
    }

    const adventure = isLeadMaster
      ? await DefinitionStoryAdventure.findByPk(node.adventureId)
      : await DefinitionStoryAdventure.findOne({ where: { id: node.adventureId, [Op.or]: [{ userId }, { userId: null }] } as any });

    if (!adventure) {
      return res.status(403).json({ error: "Permissão negada para excluir esta escolha" });
    }

    await choice.destroy();
    return res.status(200).json({ message: "Escolha excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir escolha:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// ==================== DASHBOARD OVERVIEW & COMPÊNDIO ====================

export const getGmOverview = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    const isLeadMaster = userId === "37339df8-b042-458d-8d9c-d15cf18adbd8" || req.userRole === "ADMIN";

    let adventuresCount = 0;
    let nodesCount = 0;
    let missionsCount = 0;
    let npcsCount = 0;
    let playersCount = 0;
    let locationsCount = 0;
    let equipmentsCount = 0;

    try { adventuresCount = await DefinitionStoryAdventure.count(); } catch (e) {}
    try { nodesCount = await DefinitionStoryNode.count(); } catch (e) {}
    try { missionsCount = await DefinitionMissionIdle.count(); } catch (e) {}
    try { npcsCount = await CharacterVampire.count({ where: { isNpc: true } }); } catch (e) {}
    try { playersCount = await CharacterVampire.count({ where: { isNpc: false } }); } catch (e) {}
    try { locationsCount = await DefinitionLocation.count(); } catch (e) {}
    try { equipmentsCount = await DefinitionEquipment.count(); } catch (e) {}

    let recentLogs: any[] = [];
    try {
      recentLogs = await CharacterActivityLog.findAll({
        limit: 10,
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: CharacterVampire,
            as: "character",
            attributes: ["id", "name", "concept", "avatarUrl", "isNpc"]
          }
        ]
      });
    } catch (logErr) {
      console.warn("Aviso ao buscar logs recentes:", logErr);
    }

    return res.status(200).json({
      isLeadMaster,
      stats: {
        adventuresCount,
        nodesCount,
        missionsCount,
        npcsCount,
        playersCount,
        locationsCount,
        equipmentsCount
      },
      recentLogs
    });
  } catch (error) {
    console.error("Erro ao carregar overview do GM:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getCompendiumNpcs = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const npcs = await CharacterVampire.findAll({
      where: { isNpc: true },
      include: [
        {
          model: DefinitionClan,
          as: "clan",
          attributes: ["id", "name", "disciplines", "weakness"]
        }
      ],
      order: [["name", "ASC"]]
    });
    return res.status(200).json(npcs);
  } catch (error) {
    console.error("Erro ao buscar NPCs do compêndio:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getCompendiumLocations = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const locations = await DefinitionLocation.findAll({
      order: [["level", "ASC"], ["name", "ASC"]]
    });
    return res.status(200).json(locations);
  } catch (error) {
    console.error("Erro ao buscar locais do compêndio:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getCompendiumEquipments = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const equipments = await DefinitionEquipment.findAll({
      order: [["type", "ASC"], ["name", "ASC"]]
    });
    return res.status(200).json(equipments);
  } catch (error) {
    console.error("Erro ao buscar equipamentos do compêndio:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getPlayersOverview = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const players = await CharacterVampire.findAll({
      where: { isNpc: false },
      include: [
        {
          model: DefinitionClan,
          as: "clan",
          attributes: ["id", "name"]
        },
        {
          model: User,
          as: "user",
          attributes: ["id", "name", "email"]
        }
      ],
      order: [["updatedAt", "DESC"]]
    });
    return res.status(200).json(players);
  } catch (error) {
    console.error("Erro ao buscar jogadores para o GM:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};
