import { Request, Response } from 'express';
import { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction, CharacterVampireAttribute, DefinitionAttribute, CharacterVampireSkill, DefinitionSkill } from '../models';
import { Op } from 'sequelize';
import { CharacterService } from '../services/CharacterService';

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

    const report: any = {
      title: missionDef.title,
      isSuccess: true,
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

    const rewards = missionDef.rewardsJson || {};
    const penalties = missionDef.penaltiesJson || {};

    if (report.isSuccess) {
      if (rewards.hunger || rewards.exp) {
        await CharacterService.applyImpact(character.id, {
          hunger: rewards.hunger,
          exp: rewards.exp
        });
        
        // Refresh character to get new values for final report
        await character.reload();
        
        if (rewards.hunger) report.finalChanges.push(`🩸 Fome alterada para ${character.hunger}.`);
        if (rewards.exp) report.finalChanges.push(`✨ Ganhou ${rewards.exp} XP.`);
      }
      activeMission.status = 'COMPLETED';
      await CharacterService.logActivity(character.id, 'IDLE_MISSION', missionDef.id, { success: true });
    } else {
      if (penalties.hunger || penalties.willpower || penalties.health) {
        // Here we just map health to willpower Aggravated as health isn't fully implemented in CharacterService yet
        await CharacterService.applyImpact(character.id, {
          hunger: penalties.hunger,
          willpowerSuperficial: penalties.willpower
        });
        
        await character.reload();
        
        if (penalties.hunger) report.finalChanges.push(`🩸 A confusão custou vitae. Fome alterada para ${character.hunger}.`);
        if (penalties.willpower) report.finalChanges.push(`🧠 Perdeu força de vontade.`);
        if (penalties.health) report.finalChanges.push(`💔 Sofreu dano!`);
      }
      activeMission.status = 'FAILED';
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
