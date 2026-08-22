import { Request, Response } from 'express';
import { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire, DefinitionMissionIdleAction } from '../models';
import { Op } from 'sequelize';

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
          attributes: ['id', 'stepOrder', 'name', 'difficulty', 'attributeReq', 'skillReq']
        }
      ]
    });
    return res.status(200).json(missions);
  } catch (error) {
    console.error('Error fetching idle missions:', error);
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

    return res.status(200).json(activeMission);
  } catch (error) {
    console.error('Error fetching active mission:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const startMission = async (req: Request, res: Response) => {
  try {
    const { characterId, missionId, selectedAttribute, selectedSkill } = req.body;

    if (!characterId || !missionId || !selectedAttribute || !selectedSkill) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    // Check if character already has an active mission
    const existingActive = await CharacterActiveMission.findOne({
      where: {
        characterId,
        status: 'IN_PROGRESS'
      }
    });

    if (existingActive) {
      return res.status(400).json({ error: 'Character already has an active mission' });
    }

    // Get mission duration
    const missionDef = await DefinitionMissionIdle.findByPk(missionId);
    if (!missionDef) {
      return res.status(404).json({ error: 'Mission not found' });
    }

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + missionDef.durationMinutes);

    const newActiveMission = await CharacterActiveMission.create({
      characterId,
      missionId,
      selectedAttribute,
      selectedSkill,
      expiresAt,
      status: 'IN_PROGRESS'
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

    if (!activeMissionId) {
      return res.status(400).json({ error: 'Active mission ID required' });
    }

    const { DefinitionMissionIdleAction } = require('../models');

    const activeMission = await CharacterActiveMission.findByPk(activeMissionId, {
      include: [
        { 
          model: DefinitionMissionIdle, 
          as: 'DefinitionMissionIdle',
          include: [
            {
              model: DefinitionMissionIdleAction,
              as: 'Actions'
            }
          ]
        },
        { model: CharacterVampire, as: 'CharacterVampire' }
      ]
    });

    if (!activeMission) {
      return res.status(404).json({ error: 'Active mission not found' });
    }

    if (activeMission.status !== 'IN_PROGRESS') {
      return res.status(400).json({ error: 'Mission is already resolved' });
    }

    if (new Date() < new Date(activeMission.expiresAt)) {
      return res.status(400).json({ error: 'Mission time has not expired yet' });
    }

    const character = (activeMission as any).CharacterVampire as any;
    const missionDef = (activeMission as any).DefinitionMissionIdle as any;
    const actions = missionDef.Actions || [];

    // Sort actions by stepOrder
    actions.sort((a: any, b: any) => a.stepOrder - b.stepOrder);

    const report: any = {
      isSuccess: false, // Assume failure until proven otherwise
      title: '',
      narrative: '',
      changes: [] as string[]
    };
    
    let missionFailed = false;

    for (const action of actions) {
      // Regra: "coloca sempre 3 dados d10 dif 6"
      // Simulador de Parada de Dados V5 (3 dados, Dificuldade 6)
      const numDice = 3;
      const difficulty = action.difficulty || 6;
      let successes = 0;
      
      for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * 10) + 1; // 1d10
        if (roll >= difficulty) successes++;
        // V5 rules normally count 10s as criticals, but we'll stick to simple successes for now
      }

      // Se falhar no teste (nenhum sucesso)
      if (successes === 0) {
        missionFailed = true;
        report.title = 'Operação Interrompida';
        report.isSuccess = false;
        report.changes.push(`❌ ${action.name}: Falha Crítica! (0 sucessos em ${numDice} dados)`);
        report.narrative += ` ${action.failureText}`;
        break; // Interrompe o loop, a missão falhou aqui!
      } else {
        // Passou no teste dessa etapa
        report.changes.push(`✅ ${action.name}: Sucesso! (${successes} sucessos)`);
        report.narrative += ` ${action.successText}`;
      }
    }

    const rewards = missionDef.rewardsJson || {};
    const penalties = missionDef.penaltiesJson || {};

    if (!missionFailed && actions.length > 0) {
      report.isSuccess = true;
      report.title = 'Operação Concluída com Sucesso';
      
      if (rewards.fome_mod) {
        const minimumHunger = 1; 
        const oldHunger = character.hunger;
        character.hunger = Math.max(minimumHunger, character.hunger + rewards.fome_mod);
        if (oldHunger !== character.hunger) {
          report.changes.push(`🩸 Fome reduzida de ${oldHunger} para ${character.hunger}.`);
        } else {
          report.changes.push(`🩸 Você já estava saciado o suficiente (Fome ${character.hunger}). Não baixou mais.`);
        }
      }
      if (rewards.xp) {
        character.experienceTotal += rewards.xp;
        report.changes.push(`🌟 Ganhou ${rewards.xp} XP.`);
      }
      activeMission.status = 'COMPLETED';
    } else if (missionFailed) {
      if (penalties.fome_mod) {
        const oldHunger = character.hunger;
        character.hunger = Math.min(5, character.hunger + penalties.fome_mod);
        report.changes.push(`⚠️ A confusão te custou vitae. Fome aumentou de ${oldHunger} para ${character.hunger}.`);
      }
      if (penalties.humanidade_mod) {
        character.humanity += penalties.humanidade_mod;
        report.changes.push(`😈 Sua Besta tomou as rédeas. Humanidade alterada: ${penalties.humanidade_mod}.`);
      }
      activeMission.status = 'FAILED';
    } else {
      // Nenhuma ação configurada na missão (Fallback antigo)
      report.title = 'Sucesso Automático';
      report.isSuccess = true;
      activeMission.status = 'COMPLETED';
    }

    // Salva o relatório no banco para histórico
    activeMission.reportJson = report;
    await character.save();
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
