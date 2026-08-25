import { Request, Response } from 'express';
import { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction, CharacterVampireAttribute, DefinitionAttribute, CharacterVampireSkill, DefinitionSkill, DefinitionEquipment } from '../models';
import { Op } from 'sequelize';
import { CharacterService } from '../services/CharacterService';
import { NightCycleService } from '../services/NightCycleService';

export const listAvailableMissions = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const whereClause: any = {};
    if (category) {
      whereClause.category = category;
    }

    const missions = await DefinitionMissionIdle.findAll({
      where: whereClause,
      include: [
        {
          model: DefinitionMissionIdleAction,
          as: 'Actions',
          attributes: ['id', 'stepOrder', 'name', 'difficulty', 'attributeReq', 'skillReq', 'description']
        }
      ]
    });
    return res.status(200).json(missions);
  } catch (error) {
    console.error('Error fetching idle missions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const cancelMission = async (req: Request, res: Response) => {
  try {
    const { activeMissionId } = req.body;
    if (!activeMissionId) return res.status(400).json({ error: 'Active mission ID required' });

    const activeMission = await CharacterActiveMission.findByPk(activeMissionId);
    if (!activeMission) return res.status(404).json({ error: 'Active mission not found' });
    if (activeMission.status !== 'IN_PROGRESS') return res.status(400).json({ error: 'Only in-progress missions can be cancelled' });

    activeMission.status = 'CANCELLED';
    await activeMission.save();

    return res.status(200).json({ success: true, message: 'Mission cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling mission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getActiveMission = async (req: Request, res: Response) => {
  try {
    const { characterId } = req.params;
    
    if (!characterId) {
      return res.status(400).json({ error: 'Character ID is required' });
    }

    const activeMission = await CharacterActiveMission.findOne({
      where: {
        characterId,
        status: 'IN_PROGRESS'
      },
      include: [
        { model: DefinitionMissionIdle, as: 'DefinitionMissionIdle' }
      ]
    });

    if (!activeMission) return res.status(200).json(null);

    // Filter report logs based on time (hide future steps)
    const now = new Date();
    const startedAt = new Date(activeMission.startedAt);
    const expiresAt = new Date(activeMission.expiresAt);
    
    // Parse the report JSON
    let fullReport = null;
    if (activeMission.reportJson) {
      try {
        fullReport = JSON.parse(activeMission.reportJson);
      } catch (e) {
        console.error('Failed to parse reportJson');
      }
    }

    const responseMission: any = activeMission.toJSON();

    if (fullReport && fullReport.steps) {
      const isExpired = now >= expiresAt;
      const totalSteps = fullReport.steps.length;
      const totalDurationMs = Math.max(1000, expiresAt.getTime() - startedAt.getTime());
      const stepDurationMs = totalDurationMs / Math.max(1, totalSteps);

      const timelineSteps: any[] = [];
      let completedCount = 0;

      for (let i = 0; i < totalSteps; i++) {
        const rawStep = fullReport.steps[i];
        const stepEndTime = new Date(startedAt.getTime() + (i + 1) * stepDurationMs);
        const stepStartTime = new Date(startedAt.getTime() + i * stepDurationMs);

        if (now >= stepEndTime || isExpired) {
          // ETAPA CONCLUÍDA (REVELADA)
          completedCount++;
          timelineSteps.push({
            order: i + 1,
            actionName: rawStep.actionName,
            pool: rawStep.pool,
            status: 'COMPLETED',
            passed: rawStep.passed,
            rolls: rawStep.rolls,
            successes: rawStep.successes,
            narrative: rawStep.narrative
          });
        } else if (now >= stepStartTime) {
          // ETAPA ATUAL EM EXECUÇÃO
          timelineSteps.push({
            order: i + 1,
            actionName: rawStep.actionName,
            pool: rawStep.pool,
            status: 'IN_PROGRESS',
            narrative: 'O vampiro está atuando nas sombras desta etapa... Avaliando instintos e perícias.'
          });
        } else {
          // ETAPA FUTURA (BLOQUEADA)
          timelineSteps.push({
            order: i + 1,
            actionName: rawStep.actionName,
            pool: rawStep.pool,
            status: 'LOCKED',
            narrative: 'Aguardando conclusão da etapa anterior para iniciar.'
          });
        }
      }

      responseMission.currentReport = {
        title: fullReport.title,
        steps: timelineSteps,
        isSuccess: isExpired ? fullReport.isSuccess : null,
        finalChanges: isExpired ? fullReport.finalChanges : []
      };

      responseMission.currentStage = isExpired ? totalSteps : completedCount;
      responseMission.totalStages = totalSteps;

      if (isExpired) {
        responseMission.readyToResolve = true;
      }
    }

    return res.status(200).json(responseMission);
  } catch (error) {
    console.error('Error fetching active mission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const startMission = async (req: Request, res: Response) => {
  try {
    const { characterId, definitionMissionIdleId, forcedActionId } = req.body;

    if (!characterId || !definitionMissionIdleId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const existingActive = await CharacterActiveMission.findOne({
      where: {
        characterId,
        status: 'IN_PROGRESS'
      }
    });

    if (existingActive) {
      return res.status(400).json({ error: 'Character already has an active mission' });
    }

    const character = await CharacterVampire.findByPk(characterId, {
      include: [
        { model: CharacterVampireAttribute, include: [{ model: DefinitionAttribute }] },
        { model: CharacterVampireSkill, include: [{ model: DefinitionSkill }] }
      ]
    });
    if (!character) return res.status(404).json({ error: 'Character not found' });
    
    const getAttrVal = (name: string) => {
      const found = (character as any).CharacterVampireAttributes?.find((a: any) => a.DefinitionAttribute?.name === name);
      return found ? found.value : 1;
    };
    const getSkillVal = (name: string) => {
      const found = (character as any).CharacterVampireSkills?.find((a: any) => a.DefinitionSkill?.name === name);
      return found ? found.value : 0;
    };

    const missionDef = await DefinitionMissionIdle.findByPk(definitionMissionIdleId, {
      include: [{ model: DefinitionMissionIdleAction, as: 'Actions' }]
    });

    if (!missionDef) {
      return res.status(404).json({ error: 'Mission not found' });
    }

    if (missionDef.maxCompletions !== null && missionDef.maxCompletions > 0) {
      const completions = await CharacterService.getCompletionCount(characterId, 'IDLE_MISSION', definitionMissionIdleId);
      if (completions >= missionDef.maxCompletions) {
        return res.status(403).json({ error: 'Maximum completions reached for this mission' });
      }
    }

    let actions = (missionDef as any).Actions || [];
    actions.sort((a: any, b: any) => a.stepOrder - b.stepOrder);

    // If forcedActionId is provided (e.g. Hunting Predation choice), use ONLY that action.
    if (forcedActionId) {
      const specificAction = actions.find((a: any) => a.id === forcedActionId);
      if (specificAction) {
        actions = [specificAction];
      }
    }

    const totalActions = actions.length || 1;
    let stepDurationMinutes = (missionDef.durationMinutes * 60) / totalActions;
    if (stepDurationMinutes < 1) stepDurationMinutes = 1;

    // Calcula trânsito e tempo de jogo da missão
    const transit = await NightCycleService.calculateTransit(character.currentLocationId || null, missionDef.locationId || null);
    const missionInGameMinutes = NightCycleService.getMissionInGameMinutes(missionDef.baseDifficulty || 5, missionDef.durationMinutes);
    
    // Avança o relógio da noite do personagem
    const nightAdvance = await NightCycleService.advanceNightTime(
      character.id, 
      transit.transitMinutesInGame, 
      missionInGameMinutes, 
      missionDef.locationId || undefined
    );

    const report: any = {
      title: missionDef.title,
      isSuccess: true,
      transitMinutes: transit.transitMinutesInGame,
      missionInGameMinutes,
      departureLocation: transit.fromLocationName,
      targetLocation: transit.toLocationName,
      isSunHazardTriggered: nightAdvance.isSunHazardTriggered,
      steps: [],
      finalChanges: []
    };

    let missionFailed = false;
    let failedAtStep = 0;

    for (let i = 0; i < actions.length; i++) {
      const action = actions[i];
      // Dice pool calculation
      const attrVal = action.attributeReq ? getAttrVal(action.attributeReq) : 1;
      const skillVal = action.skillReq ? getSkillVal(action.skillReq) : 0;
      
      const numDice = attrVal + skillVal;
      const difficulty = action.difficulty || 6;
      let successes = 0;
      const diceRolls = [];
      
      for (let d = 0; d < numDice; d++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        diceRolls.push(roll);
        if (roll >= difficulty) successes++;
        if (roll === 10) successes++; // V5 simple critical bonus
      }

      const stepLog = {
        stepOrder: i + 1,
        actionName: action.name,
        pool: `${action.attributeReq} + ${action.skillReq} (${numDice} dados)`,
        rolls: diceRolls,
        successes,
        passed: successes > 0,
        narrative: successes > 0 ? action.successText : action.failureText
      };

      report.steps.push(stepLog);

      if (successes === 0) {
        missionFailed = true;
        failedAtStep = i + 1;
        report.isSuccess = false;
        break; // Stop simulating if failed
      }
    }

    // Set expiration based on failure or success
    const startedAt = new Date();
    const expiresAt = new Date(startedAt);
    
    if (missionFailed) {
      expiresAt.setMinutes(expiresAt.getMinutes() + (failedAtStep * stepDurationMinutes));
    } else {
      expiresAt.setMinutes(expiresAt.getMinutes() + missionDef.durationMinutes);
    }

    const newActiveMission = await CharacterActiveMission.create({
      characterId,
      definitionMissionIdleId,
      startedAt,
      expiresAt,
      status: 'IN_PROGRESS',
      stepDurationMinutes,
      reportJson: JSON.stringify(report)
    } as any);

    return res.status(201).json(newActiveMission);
  } catch (error) {
    console.error('Error starting mission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const resolveMission = async (req: Request, res: Response) => {
  try {
    const { activeMissionId } = req.body;

    if (!activeMissionId) return res.status(400).json({ error: 'Active mission ID required' });

    const activeMission = await CharacterActiveMission.findByPk(activeMissionId, {
      include: [
        { model: DefinitionMissionIdle, as: 'DefinitionMissionIdle' },
        { model: CharacterVampire, as: 'CharacterVampire' }
      ]
    });

    if (!activeMission) return res.status(404).json({ error: 'Active mission not found' });
    if (activeMission.status !== 'IN_PROGRESS') return res.status(400).json({ error: 'Mission is already resolved' });
    if (new Date() < new Date(activeMission.expiresAt)) return res.status(400).json({ error: 'Mission time has not expired yet' });

    const character = (activeMission as any).CharacterVampire as any;
    const missionDef = (activeMission as any).DefinitionMissionIdle as any;
    
    const report = activeMission.reportJson ? JSON.parse(activeMission.reportJson) : { isSuccess: true, finalChanges: [] };
    if (!report.finalChanges) report.finalChanges = [];

    const parseJson = (val: any) => {
      if (!val) return {};
      if (typeof val === 'object') return val;
      try {
        return JSON.parse(val);
      } catch (e) {
        return {};
      }
    };

    const rewards = parseJson(missionDef.rewardsJson);
    const penalties = parseJson(missionDef.penaltiesJson);

    if (report.isSuccess) {
      const impact: any = {};
      if (rewards.hunger) impact.hunger = Number(rewards.hunger);
      if (rewards.exp) impact.exp = Number(rewards.exp);
      if (rewards.healthDamageSuperficial) impact.healthDamageSuperficial = Number(rewards.healthDamageSuperficial);
      if (rewards.willpowerDamageSuperficial) impact.willpowerDamageSuperficial = Number(rewards.willpowerDamageSuperficial);
      if (rewards.humanity) impact.humanity = Number(rewards.humanity);
      if (rewards.money) impact.money = Number(rewards.money);
      if (rewards.equipmentDropId) impact.equipmentDropId = rewards.equipmentDropId;
      if (rewards.attributeBonus?.name && rewards.attributeBonus?.value) impact.attributeBonus = rewards.attributeBonus;
      if (rewards.skillBonus?.name && rewards.skillBonus?.value) impact.skillBonus = rewards.skillBonus;

      await CharacterService.applyImpact(character.id, impact);
      await character.reload();

      if (rewards.exp) report.finalChanges.push(`✨ Ganhou +${rewards.exp} XP.`);
      if (rewards.hunger) report.finalChanges.push(`🩸 Fome saciada em ${Math.abs(rewards.hunger)} ponto(s) (Atual: ${character.hunger}/5).`);
      if (rewards.money) report.finalChanges.push(`💵 Obteve R$ ${rewards.money} em recursos e espólio financeiro.`);
      if (rewards.equipmentDropId) {
        const dropItem = await DefinitionEquipment.findByPk(rewards.equipmentDropId);
        if (dropItem) {
          report.finalChanges.push(`🗡️ Item de Arsenal obtido: ${dropItem.name} (${dropItem.type})!`);
        }
      }
      if (rewards.willpowerDamageSuperficial) report.finalChanges.push(`🧠 Força de Vontade recuperada.`);
      if (rewards.humanity) report.finalChanges.push(`🕊️ Humanidade alterada (Atual: ${character.humanity}/10).`);
      if (rewards.attributeBonus?.name) report.finalChanges.push(`💪 +${rewards.attributeBonus.value} em ${rewards.attributeBonus.name}!`);
      if (rewards.skillBonus?.name) report.finalChanges.push(`🎯 +${rewards.skillBonus.value} em ${rewards.skillBonus.name}!`);
      
      activeMission.status = 'COMPLETED';
      await CharacterService.logActivity(character.id, 'IDLE_MISSION', missionDef.id, { success: true });
    } else {
      const impact: any = {};
      if (penalties.hunger) impact.hunger = Number(penalties.hunger);
      if (penalties.healthDamageSuperficial) impact.healthDamageSuperficial = Number(penalties.healthDamageSuperficial);
      if (penalties.healthDamageAggravated) impact.healthDamageAggravated = Number(penalties.healthDamageAggravated);
      if (penalties.willpowerDamageSuperficial) impact.willpowerDamageSuperficial = Number(penalties.willpowerDamageSuperficial);
      if (penalties.willpowerDamageAggravated) impact.willpowerDamageAggravated = Number(penalties.willpowerDamageAggravated);
      if (penalties.humanity) impact.humanity = Number(penalties.humanity);
      if (penalties.stains) impact.stains = Number(penalties.stains);
      if (penalties.money) impact.money = -Math.abs(Number(penalties.money));
      if (penalties.lostEquipmentId) impact.lostEquipmentId = penalties.lostEquipmentId;

      await CharacterService.applyImpact(character.id, impact);
      await character.reload();

      if (penalties.hunger) report.finalChanges.push(`🩸 A agitação da Besta aumentou a Fome em +${penalties.hunger} (Atual: ${character.hunger}/5).`);
      if (penalties.money) report.finalChanges.push(`💸 Teve R$ ${penalties.money} confiscados ou perdidos no recuo.`);
      if (penalties.lostEquipmentId) {
        const lostItem = await DefinitionEquipment.findByPk(penalties.lostEquipmentId);
        if (lostItem) {
          report.finalChanges.push(`⚠️ Perdeu o item do inventário: ${lostItem.name} (${lostItem.type})!`);
        }
      }
      if (penalties.healthDamageSuperficial) report.finalChanges.push(`💔 Sofreu ${penalties.healthDamageSuperficial} de dano superficial à Vitalidade.`);
      if (penalties.healthDamageAggravated) report.finalChanges.push(`☠️ Sofreu ${penalties.healthDamageAggravated} de DANO AGRAVADO à Vitalidade!`);
      if (penalties.willpowerDamageSuperficial) report.finalChanges.push(`🧠 Sofreu ${penalties.willpowerDamageSuperficial} de dano superficial à Força de Vontade.`);
      if (penalties.willpowerDamageAggravated) report.finalChanges.push(`💥 Sofreu ${penalties.willpowerDamageAggravated} de dano agravado à Força de Vontade.`);
      if (penalties.stains) report.finalChanges.push(`🥀 Recebeu +${penalties.stains} Mancha(s) na Humanidade.`);

      activeMission.status = 'FAILED';
      await CharacterService.logActivity(character.id, 'IDLE_MISSION', missionDef.id, { success: false });
    }

    activeMission.reportJson = JSON.stringify(report);
    await activeMission.save();

    return res.status(200).json({ 
      success: true, 
      report,
      character
    });

  } catch (error) {
    console.error('Error resolving mission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
