import { Request, Response } from 'express';
import { 
  DefinitionStoryAdventure, 
  DefinitionStoryNode, 
  DefinitionStoryChoice, 
  CharacterStoryProgress, 
  CharacterVampire, 
  CharacterVampireAttribute, 
  DefinitionAttribute, 
  CharacterVampireSkill, 
  DefinitionSkill 
} from '../models';

export const listAdventures = async (req: Request, res: Response) => {
  try {
    const adventures = await DefinitionStoryAdventure.findAll();
    return res.status(200).json(adventures);
  } catch (error) {
    console.error('Error fetching adventures:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

import { CharacterService } from '../services/CharacterService';

export const getCharacterProgress = async (req: Request, res: Response) => {
  try {
    const { characterId, adventureId } = req.params;

    if (!characterId || !adventureId) {
      return res.status(400).json({ error: 'Character ID and Adventure ID are required' });
    }

    const adventure = await DefinitionStoryAdventure.findByPk(adventureId);
    if (!adventure) {
      return res.status(404).json({ error: 'Aventura não encontrada' });
    }

    // 1. Garante que temos um nó inicial real e existente no banco
    let startingNode = adventure.firstNodeId 
      ? await DefinitionStoryNode.findByPk(adventure.firstNodeId, {
          include: [{ model: DefinitionStoryChoice, as: 'choices' }]
        })
      : null;

    // Se o firstNodeId for nulo ou apontar para um nó que foi deletado, busca o primeiro nó válido da crônica
    if (!startingNode) {
      startingNode = await DefinitionStoryNode.findOne({
        where: { adventureId },
        include: [{ model: DefinitionStoryChoice, as: 'choices' }],
        order: [['createdAt', 'ASC']]
      });

      if (startingNode) {
        adventure.firstNodeId = startingNode.id;
        await adventure.save();
      } else {
        return res.status(400).json({ error: 'Esta crônica ainda não possui cenas cadastradas pelo Mestre.' });
      }
    }

    // 2. Busca ou cria o progresso do personagem
    let progress = await CharacterStoryProgress.findOne({
      where: { characterId, adventureId }
    });

    if (!progress) {
      // Check max completions before starting a new run
      if (adventure.maxCompletions !== null && adventure.maxCompletions > 0) {
        const completions = await CharacterService.getCompletionCount(characterId, 'STORY_ADVENTURE', adventureId);
        if (completions >= adventure.maxCompletions) {
          return res.status(403).json({ error: 'Limite de conclusões atingido para esta crônica' });
        }
      }

      progress = await CharacterStoryProgress.create({
        characterId,
        adventureId,
        currentNodeId: startingNode.id
      } as any);
    }

    // 3. Busca o nó atual do jogador
    let currentNode = progress.currentNodeId 
      ? await DefinitionStoryNode.findByPk(progress.currentNodeId, {
          include: [{ model: DefinitionStoryChoice, as: 'choices' }]
        })
      : null;

    // Se o nó onde o personagem parou não existe mais, reseta automaticamente para o nó inicial válido
    if (!currentNode) {
      currentNode = startingNode;
      progress.currentNodeId = startingNode.id;
      await progress.save();
    }

    return res.status(200).json({
      progress,
      currentNode
    });
  } catch (error) {
    console.error('Error fetching character progress:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const resetAdventure = async (req: Request, res: Response) => {
  try {
    const { characterId, adventureId } = req.body;
    
    if (!characterId || !adventureId) {
      return res.status(400).json({ error: 'Character ID and Adventure ID are required' });
    }

    const adventure = await DefinitionStoryAdventure.findByPk(adventureId);
    if (!adventure) {
      return res.status(404).json({ error: 'Adventure not found' });
    }

    // Valida nó inicial
    let startingNodeId = adventure.firstNodeId;
    const exists = startingNodeId ? await DefinitionStoryNode.findByPk(startingNodeId) : null;
    if (!exists) {
      const first = await DefinitionStoryNode.findOne({ where: { adventureId }, order: [['createdAt', 'ASC']] });
      if (first) {
        startingNodeId = first.id;
        adventure.firstNodeId = first.id;
        await adventure.save();
      }
    }

    if (!startingNodeId) {
      return res.status(400).json({ error: 'Crônica não possui cenas disponíveis para reinício' });
    }

    let progress = await CharacterStoryProgress.findOne({
      where: { characterId, adventureId }
    });

    if (progress) {
      progress.currentNodeId = startingNodeId;
      await progress.save();
    } else {
      progress = await CharacterStoryProgress.create({
        characterId,
        adventureId,
        currentNodeId: startingNodeId
      } as any);
    }

    return res.status(200).json({ success: true, progress });
  } catch (error) {
    console.error('Error resetting adventure:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const processChoice = async (req: Request, res: Response) => {
  try {
    const { characterId, adventureId, choiceId } = req.body;

    if (!characterId || !adventureId || !choiceId) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const progress = await CharacterStoryProgress.findOne({
      where: { characterId, adventureId }
    });

    if (!progress) {
      return res.status(404).json({ error: 'Progress not found' });
    }

    const choice = await DefinitionStoryChoice.findByPk(choiceId);
    if (!choice) {
      return res.status(404).json({ error: 'Choice not found' });
    }

    if (choice.nodeId !== progress.currentNodeId) {
      return res.status(400).json({ error: 'Choice does not belong to the current node' });
    }

    let isSuccess = true;
    let diceRolls: number[] = [];
    let totalSuccesses = 0;
    let nextNodeId = choice.successNodeId;
    let dicePool = 0;

    // Se houver requisito de teste
    if (choice.attributeReq || choice.skillReq) {
      const character = await CharacterVampire.findByPk(characterId, {
        include: [
          { model: CharacterVampireAttribute, include: [{ model: DefinitionAttribute }] },
          { model: CharacterVampireSkill, include: [{ model: DefinitionSkill }] }
        ]
      });

      if (!character) {
        return res.status(404).json({ error: 'Character not found' });
      }

      const getAttrVal = (name: string) => {
        const found = (character as any).CharacterVampireAttributes?.find((a: any) => a.DefinitionAttribute?.name === name);
        return found ? found.value : 1;
      };
      
      const getSkillVal = (name: string) => {
        const found = (character as any).CharacterVampireSkills?.find((a: any) => a.DefinitionSkill?.name === name);
        return found ? found.value : 0;
      };

      const attrVal = choice.attributeReq ? getAttrVal(choice.attributeReq) : 0;
      const skillVal = choice.skillReq ? getSkillVal(choice.skillReq) : 0;
      
      dicePool = attrVal + skillVal;
      const difficultyTarget = choice.difficulty || 1; // Default 1 success required

      for (let d = 0; d < dicePool; d++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        diceRolls.push(roll);
        if (roll >= 6) totalSuccesses++; // Standard V5 target number
        if (roll === 10) totalSuccesses++; // Simplistic V5 crit
      }

      isSuccess = totalSuccesses >= difficultyTarget;
      
      if (!isSuccess && choice.failureNodeId) {
        nextNodeId = choice.failureNodeId;
      } else if (!isSuccess && !choice.failureNodeId) {
        // Se falhou mas não tem fallback, forçamos successNodeId ou mantém.
        nextNodeId = choice.successNodeId;
      }
    }

    if (!nextNodeId) {
      return res.status(400).json({ error: 'Choice does not lead anywhere' });
    }

    const newNode = await DefinitionStoryNode.findByPk(nextNodeId, {
      include: [{ model: DefinitionStoryChoice, as: 'choices' }]
    });

    if (newNode && newNode.isEnding) {
      // Registrar conclusão e deletar progresso para liberar (se a aventura permitir replay)
      await CharacterService.logActivity(characterId, 'STORY_ADVENTURE', adventureId, {
        endingNodeId: newNode.id
      });
      await progress.destroy();
    } else {
      progress.currentNodeId = nextNodeId;
      await progress.save();
    }

    return res.status(200).json({
      success: isSuccess,
      diceRolls,
      totalSuccesses,
      dicePool,
      requiredSuccesses: choice.difficulty || 1,
      newNode,
      progress: newNode?.isEnding ? null : progress
    });

  } catch (error) {
    console.error('Error processing choice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
