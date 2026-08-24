"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processChoice = exports.resetAdventure = exports.getCharacterProgress = exports.listAdventures = void 0;
const models_1 = require("../models");
const listAdventures = async (req, res) => {
    try {
        const adventures = await models_1.DefinitionStoryAdventure.findAll();
        return res.status(200).json(adventures);
    }
    catch (error) {
        console.error('Error fetching adventures:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listAdventures = listAdventures;
const CharacterService_1 = require("../services/CharacterService");
const getCharacterProgress = async (req, res) => {
    try {
        const { characterId, adventureId } = req.params;
        if (!characterId || !adventureId) {
            return res.status(400).json({ error: 'Character ID and Adventure ID are required' });
        }
        const adventure = await models_1.DefinitionStoryAdventure.findByPk(adventureId);
        if (!adventure) {
            return res.status(404).json({ error: 'Adventure not found' });
        }
        let progress = await models_1.CharacterStoryProgress.findOne({
            where: { characterId, adventureId }
        });
        if (!progress) {
            // Check max completions before starting a new run
            if (adventure.maxCompletions !== null && adventure.maxCompletions > 0) {
                const completions = await CharacterService_1.CharacterService.getCompletionCount(characterId, 'STORY_ADVENTURE', adventureId);
                if (completions >= adventure.maxCompletions) {
                    return res.status(403).json({ error: 'Maximum completions reached for this adventure' });
                }
            }
            if (!adventure.firstNodeId) {
                return res.status(400).json({ error: 'Adventure does not have a starting node' });
            }
            progress = await models_1.CharacterStoryProgress.create({
                characterId,
                adventureId,
                currentNodeId: adventure.firstNodeId
            });
        }
        const currentNode = await models_1.DefinitionStoryNode.findByPk(progress.currentNodeId, {
            include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
        });
        return res.status(200).json({
            progress,
            currentNode
        });
    }
    catch (error) {
        console.error('Error fetching character progress:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getCharacterProgress = getCharacterProgress;
const resetAdventure = async (req, res) => {
    try {
        const { characterId, adventureId } = req.body;
        if (!characterId || !adventureId) {
            return res.status(400).json({ error: 'Character ID and Adventure ID are required' });
        }
        const adventure = await models_1.DefinitionStoryAdventure.findByPk(adventureId);
        if (!adventure) {
            return res.status(404).json({ error: 'Adventure not found' });
        }
        let progress = await models_1.CharacterStoryProgress.findOne({
            where: { characterId, adventureId }
        });
        if (progress) {
            progress.currentNodeId = adventure.firstNodeId;
            await progress.save();
        }
        else {
            progress = await models_1.CharacterStoryProgress.create({
                characterId,
                adventureId,
                currentNodeId: adventure.firstNodeId
            });
        }
        return res.status(200).json({ success: true, progress });
    }
    catch (error) {
        console.error('Error resetting adventure:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.resetAdventure = resetAdventure;
const processChoice = async (req, res) => {
    try {
        const { characterId, adventureId, choiceId } = req.body;
        if (!characterId || !adventureId || !choiceId) {
            return res.status(400).json({ error: 'Missing required parameters' });
        }
        const progress = await models_1.CharacterStoryProgress.findOne({
            where: { characterId, adventureId }
        });
        if (!progress) {
            return res.status(404).json({ error: 'Progress not found' });
        }
        const choice = await models_1.DefinitionStoryChoice.findByPk(choiceId);
        if (!choice) {
            return res.status(404).json({ error: 'Choice not found' });
        }
        if (choice.nodeId !== progress.currentNodeId) {
            return res.status(400).json({ error: 'Choice does not belong to the current node' });
        }
        let isSuccess = true;
        let diceRolls = [];
        let totalSuccesses = 0;
        let nextNodeId = choice.successNodeId;
        let dicePool = 0;
        // Se houver requisito de teste
        if (choice.attributeReq || choice.skillReq) {
            const character = await models_1.CharacterVampire.findByPk(characterId, {
                include: [
                    { model: models_1.CharacterVampireAttribute, include: [{ model: models_1.DefinitionAttribute }] },
                    { model: models_1.CharacterVampireSkill, include: [{ model: models_1.DefinitionSkill }] }
                ]
            });
            if (!character) {
                return res.status(404).json({ error: 'Character not found' });
            }
            const getAttrVal = (name) => {
                const found = character.CharacterVampireAttributes?.find((a) => a.DefinitionAttribute?.name === name);
                return found ? found.value : 1;
            };
            const getSkillVal = (name) => {
                const found = character.CharacterVampireSkills?.find((a) => a.DefinitionSkill?.name === name);
                return found ? found.value : 0;
            };
            const attrVal = choice.attributeReq ? getAttrVal(choice.attributeReq) : 0;
            const skillVal = choice.skillReq ? getSkillVal(choice.skillReq) : 0;
            dicePool = attrVal + skillVal;
            const difficultyTarget = choice.difficulty || 1; // Default 1 success required
            for (let d = 0; d < dicePool; d++) {
                const roll = Math.floor(Math.random() * 10) + 1;
                diceRolls.push(roll);
                if (roll >= 6)
                    totalSuccesses++; // Standard V5 target number
                if (roll === 10)
                    totalSuccesses++; // Simplistic V5 crit
            }
            isSuccess = totalSuccesses >= difficultyTarget;
            if (!isSuccess && choice.failureNodeId) {
                nextNodeId = choice.failureNodeId;
            }
            else if (!isSuccess && !choice.failureNodeId) {
                // Se falhou mas não tem fallback, forçamos successNodeId ou mantém.
                nextNodeId = choice.successNodeId;
            }
        }
        if (!nextNodeId) {
            return res.status(400).json({ error: 'Choice does not lead anywhere' });
        }
        const newNode = await models_1.DefinitionStoryNode.findByPk(nextNodeId, {
            include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
        });
        if (newNode && newNode.isEnding) {
            // Registrar conclusão e deletar progresso para liberar (se a aventura permitir replay)
            await CharacterService_1.CharacterService.logActivity(characterId, 'STORY_ADVENTURE', adventureId, {
                endingNodeId: newNode.id
            });
            await progress.destroy();
        }
        else {
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
    }
    catch (error) {
        console.error('Error processing choice:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.processChoice = processChoice;
