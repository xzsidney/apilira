import { Response } from "express";
import { Op } from "sequelize";
import { AuthenticatedRequest } from "../middlewares/authMiddleware";
import { 
  DefinitionMissionIdle, 
  DefinitionMissionIdleAction 
} from "../models";

// ==================== MISSÕES / INCURSÕES ====================

export const listMissions = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    const whereCondition: any = userId ? { [Op.or]: [{ userId }, { userId: null }] } : {};
    const missions = await DefinitionMissionIdle.findAll({
      where: whereCondition,
      include: [
        {
          model: DefinitionMissionIdleAction,
          as: "Actions"
        }
      ],
      order: [["createdAt", "DESC"]]
    });
    return res.status(200).json(missions);
  } catch (error) {
    console.error("Erro ao listar missões do GM:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const getMissionDetail = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;
    const whereCondition: any = userId ? { id, [Op.or]: [{ userId }, { userId: null }] } : { id };

    const mission = await DefinitionMissionIdle.findOne({
      where: whereCondition,
      include: [
        {
          model: DefinitionMissionIdleAction,
          as: "Actions"
        }
      ],
      order: [[{ model: DefinitionMissionIdleAction, as: "Actions" }, "stepOrder", "ASC"]]
    });

    if (!mission) {
      return res.status(404).json({ error: "Missão não encontrada" });
    }

    return res.status(200).json(mission);
  } catch (error) {
    console.error("Erro ao buscar detalhes da missão:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const createMission = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { 
      title, 
      description, 
      durationMinutes, 
      baseDifficulty, 
      category, 
      allowedRequirements, 
      rewardsJson, 
      penaltiesJson, 
      maxCompletions 
    } = req.body;
    const userId = req.userId;

    if (!title || !description || durationMinutes === undefined) {
      return res.status(400).json({ error: "Título, descrição e duração em minutos são obrigatórios" });
    }

    const mission = await DefinitionMissionIdle.create({
      title,
      description,
      durationMinutes: parseInt(durationMinutes, 10) || 5,
      baseDifficulty: baseDifficulty ? parseInt(baseDifficulty, 10) : 6,
      category: category || "OPERATION",
      allowedRequirements: allowedRequirements || {},
      rewardsJson: rewardsJson || {},
      penaltiesJson: penaltiesJson || {},
      maxCompletions: maxCompletions !== undefined && maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null,
      userId
    });

    return res.status(201).json(mission);
  } catch (error) {
    console.error("Erro ao criar missão:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateMission = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { 
      title, 
      description, 
      durationMinutes, 
      baseDifficulty, 
      category, 
      allowedRequirements, 
      rewardsJson, 
      penaltiesJson, 
      maxCompletions 
    } = req.body;
    const userId = req.userId;

    const mission = await DefinitionMissionIdle.findOne({ where: { id, userId } });
    if (!mission) {
      return res.status(404).json({ error: "Missão não encontrada" });
    }

    mission.title = title ?? mission.title;
    mission.description = description ?? mission.description;
    mission.durationMinutes = durationMinutes !== undefined ? parseInt(durationMinutes, 10) : mission.durationMinutes;
    mission.baseDifficulty = baseDifficulty !== undefined ? parseInt(baseDifficulty, 10) : mission.baseDifficulty;
    mission.category = category ?? mission.category;
    mission.allowedRequirements = allowedRequirements !== undefined ? allowedRequirements : mission.allowedRequirements;
    mission.rewardsJson = rewardsJson !== undefined ? rewardsJson : mission.rewardsJson;
    mission.penaltiesJson = penaltiesJson !== undefined ? penaltiesJson : mission.penaltiesJson;
    mission.maxCompletions = maxCompletions !== undefined ? (maxCompletions !== "" && maxCompletions !== null ? parseInt(maxCompletions, 10) : null) : mission.maxCompletions;

    await mission.save();
    return res.status(200).json(mission);
  } catch (error) {
    console.error("Erro ao atualizar missão:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteMission = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    const mission = await DefinitionMissionIdle.findOne({ where: { id, userId } });
    if (!mission) {
      return res.status(404).json({ error: "Missão não encontrada" });
    }

    // Remove as ações ligadas a esta missão
    await DefinitionMissionIdleAction.destroy({ where: { missionId: id } });
    await mission.destroy();

    return res.status(200).json({ message: "Missão excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir missão:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

// ==================== AÇÕES / ETAPAS DA MISSÃO ====================

export const createAction = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { missionId } = req.params;
    const { 
      stepOrder, 
      name, 
      description, 
      difficulty, 
      attributeReq, 
      skillReq, 
      successText, 
      failureText 
    } = req.body;
    const userId = req.userId;

    if (!name || !description || !successText || !failureText) {
      return res.status(400).json({ error: "Nome, descrição e textos de desfecho são obrigatórios" });
    }

    const mission = await DefinitionMissionIdle.findOne({ where: { id: missionId, userId } });
    if (!mission) {
      return res.status(404).json({ error: "Missão não encontrada ou não pertence a este narrador" });
    }

    // Se stepOrder não foi fornecido, calcula o próximo número
    let order = stepOrder;
    if (order === undefined) {
      const count = await DefinitionMissionIdleAction.count({ where: { missionId } });
      order = count + 1;
    }

    const action = await DefinitionMissionIdleAction.create({
      missionId,
      stepOrder: parseInt(order, 10),
      name,
      description,
      difficulty: difficulty ? parseInt(difficulty, 10) : 6,
      attributeReq: attributeReq || null,
      skillReq: skillReq || null,
      successText,
      failureText
    } as any);

    return res.status(201).json(action);
  } catch (error) {
    console.error("Erro ao criar etapa da missão:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const updateAction = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { actionId } = req.params;
    const { 
      stepOrder, 
      name, 
      description, 
      difficulty, 
      attributeReq, 
      skillReq, 
      successText, 
      failureText 
    } = req.body;
    const userId = req.userId;

    const action = await DefinitionMissionIdleAction.findByPk(actionId);
    if (!action) {
      return res.status(404).json({ error: "Etapa não encontrada" });
    }

    const mission = await DefinitionMissionIdle.findOne({ where: { id: (action as any).missionId, userId } });
    if (!mission) {
      return res.status(403).json({ error: "Permissão negada para editar esta etapa" });
    }

    (action as any).stepOrder = stepOrder !== undefined ? parseInt(stepOrder, 10) : (action as any).stepOrder;
    (action as any).name = name ?? (action as any).name;
    (action as any).description = description ?? (action as any).description;
    (action as any).difficulty = difficulty !== undefined ? parseInt(difficulty, 10) : (action as any).difficulty;
    (action as any).attributeReq = attributeReq !== undefined ? (attributeReq || null) : (action as any).attributeReq;
    (action as any).skillReq = skillReq !== undefined ? (skillReq || null) : (action as any).skillReq;
    (action as any).successText = successText ?? (action as any).successText;
    (action as any).failureText = failureText ?? (action as any).failureText;

    await action.save();
    return res.status(200).json(action);
  } catch (error) {
    console.error("Erro ao atualizar etapa:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};

export const deleteAction = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { actionId } = req.params;
    const userId = req.userId;

    const action = await DefinitionMissionIdleAction.findByPk(actionId);
    if (!action) {
      return res.status(404).json({ error: "Etapa não encontrada" });
    }

    const mission = await DefinitionMissionIdle.findOne({ where: { id: (action as any).missionId, userId } });
    if (!mission) {
      return res.status(403).json({ error: "Permissão negada para excluir esta etapa" });
    }

    await action.destroy();
    return res.status(200).json({ message: "Etapa excluída com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir etapa:", error);
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
};
