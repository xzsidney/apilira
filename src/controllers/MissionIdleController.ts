import { Request, Response } from 'express';
import { DefinitionMissionIdle, CharacterActiveMission, CharacterVampire } from '../models';
import { Op } from 'sequelize';

export const listAvailableMissions = async (req: Request, res: Response) => {
  try {
    const missions = await DefinitionMissionIdle.findAll();
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

    const activeMission = await CharacterActiveMission.findByPk(activeMissionId, {
      include: [
        { model: DefinitionMissionIdle, as: 'DefinitionMissionIdle' },
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

    // SIMULAÇÃO DE ROLAGEM DE DADOS (50% chance para testes iniciais)
    // No futuro, isso usaria: character[selectedAttribute] + character[selectedSkill] vs baseDifficulty
    const rollResult = Math.random() > 0.3; // 70% chance de sucesso
    const isSuccess = rollResult;

    const report: any = {
      isSuccess,
      title: isSuccess ? 'Sucesso na Operação' : 'Falha Crítica',
      narrative: '',
      changes: [] as string[]
    };
    
    const rewards = missionDef.rewardsJson || {};
    const penalties = missionDef.penaltiesJson || {};

    if (isSuccess) {
      report.narrative = 'Seus instintos foram certeiros. A noite lhe sorriu e seus esforços renderam frutos suculentos.';
      if (rewards.fome_mod) {
        // Regra Oficial V5: Caçada normal não zera a fome, o mínimo é 1.
        const minimumHunger = 1; 
        const oldHunger = character.hunger;
        character.hunger = Math.max(minimumHunger, character.hunger + rewards.fome_mod);
        if (oldHunger !== character.hunger) {
          report.changes.push(`Fome reduzida de ${oldHunger} para ${character.hunger}.`);
        } else {
          report.changes.push(`Você já estava saciado o suficiente (Fome ${character.hunger}). Não baixou mais.`);
        }
      }
      if (rewards.xp) {
        character.experienceTotal += rewards.xp;
        report.changes.push(`Ganhou ${rewards.xp} XP.`);
      }
      activeMission.status = 'COMPLETED';
    } else {
      report.narrative = 'As coisas saíram do controle. Uma complicação na rua forçou você a gastar recursos e fugir.';
      if (penalties.fome_mod) {
        const oldHunger = character.hunger;
        character.hunger = Math.min(5, character.hunger + penalties.fome_mod);
        report.changes.push(`A confusão te custou vitae. Fome aumentou de ${oldHunger} para ${character.hunger}.`);
      }
      if (penalties.humanidade_mod) {
        character.humanity += penalties.humanidade_mod;
        report.changes.push(`Sua Besta tomou as rédeas. Humanidade alterada: ${penalties.humanidade_mod}.`);
      }
      activeMission.status = 'FAILED';
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
