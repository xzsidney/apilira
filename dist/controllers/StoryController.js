"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processChoice = exports.resetAdventure = exports.getCharacterProgress = exports.listAdventures = void 0;
const models_1 = require("../models");
const CharacterService_1 = require("../services/CharacterService");
const listAdventures = async (req, res) => {
    try {
        const { characterId } = req.query;
        const adventures = await models_1.DefinitionStoryAdventure.findAll({
            order: [['createdAt', 'ASC']]
        });
        const enrichedAdventures = await Promise.all(adventures.map(async (adv) => {
            const advJson = adv.toJSON();
            // Contagem de nós para estimar tamanho
            const nodeCount = await models_1.DefinitionStoryNode.count({ where: { adventureId: adv.id } });
            advJson.totalNodes = nodeCount;
            if (characterId && typeof characterId === 'string') {
                const progress = await models_1.CharacterStoryProgress.findOne({
                    where: { characterId, adventureId: adv.id }
                });
                const completionCount = await CharacterService_1.CharacterService.getCompletionCount(characterId, 'STORY_ADVENTURE', adv.id);
                advJson.hasActiveProgress = !!progress;
                advJson.currentNodeId = progress ? progress.currentNodeId : null;
                advJson.completionCount = completionCount;
                advJson.isCompleted = completionCount > 0;
            }
            return advJson;
        }));
        return res.status(200).json(enrichedAdventures);
    }
    catch (error) {
        console.error('Error fetching adventures:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.listAdventures = listAdventures;
const getCharacterProgress = async (req, res) => {
    try {
        const { characterId, adventureId } = req.params;
        if (!characterId || !adventureId) {
            return res.status(400).json({ error: 'Character ID and Adventure ID are required' });
        }
        const adventure = await models_1.DefinitionStoryAdventure.findByPk(adventureId);
        if (!adventure) {
            return res.status(404).json({ error: 'Aventura não encontrada' });
        }
        // 1. Garante que temos um nó inicial real e existente no banco
        let startingNode = adventure.firstNodeId
            ? await models_1.DefinitionStoryNode.findByPk(adventure.firstNodeId, {
                include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
            })
            : null;
        // Se o firstNodeId for nulo ou apontar para um nó que foi deletado, busca o primeiro nó válido da crônica
        if (!startingNode) {
            startingNode = await models_1.DefinitionStoryNode.findOne({
                where: { adventureId },
                include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }],
                order: [['createdAt', 'ASC']]
            });
            if (startingNode) {
                adventure.firstNodeId = startingNode.id;
                await adventure.save();
            }
            else {
                return res.status(400).json({ error: 'Esta crônica ainda não possui cenas cadastradas pelo Mestre.' });
            }
        }
        // 2. Busca ou cria o progresso do personagem
        let progress = await models_1.CharacterStoryProgress.findOne({
            where: { characterId, adventureId }
        });
        if (!progress) {
            // Check max completions before starting a new run
            if (adventure.maxCompletions !== null && adventure.maxCompletions > 0) {
                const completions = await CharacterService_1.CharacterService.getCompletionCount(characterId, 'STORY_ADVENTURE', adventureId);
                if (completions >= adventure.maxCompletions) {
                    return res.status(403).json({ error: 'Limite de conclusões atingido para esta crônica' });
                }
            }
            progress = await models_1.CharacterStoryProgress.create({
                characterId,
                adventureId,
                currentNodeId: startingNode.id
            });
        }
        // 3. Busca o nó atual do jogador
        let currentNode = progress.currentNodeId
            ? await models_1.DefinitionStoryNode.findByPk(progress.currentNodeId, {
                include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
            })
            : null;
        // Se o nó onde o personagem parou não existe mais, reseta automaticamente para o nó inicial válido
        if (!currentNode) {
            currentNode = startingNode;
            progress.currentNodeId = startingNode.id;
            await progress.save();
        }
        return res.status(200).json({
            adventure,
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
        // Valida nó inicial
        let startingNodeId = adventure.firstNodeId;
        const exists = startingNodeId ? await models_1.DefinitionStoryNode.findByPk(startingNodeId) : null;
        if (!exists) {
            const first = await models_1.DefinitionStoryNode.findOne({ where: { adventureId }, order: [['createdAt', 'ASC']] });
            if (first) {
                startingNodeId = first.id;
                adventure.firstNodeId = first.id;
                await adventure.save();
            }
        }
        if (!startingNodeId) {
            return res.status(400).json({ error: 'Crônica não possui cenas disponíveis para reinício' });
        }
        let progress = await models_1.CharacterStoryProgress.findOne({
            where: { characterId, adventureId }
        });
        if (progress) {
            progress.currentNodeId = startingNodeId;
            await progress.save();
        }
        else {
            progress = await models_1.CharacterStoryProgress.create({
                characterId,
                adventureId,
                currentNodeId: startingNodeId
            });
        }
        const currentNode = await models_1.DefinitionStoryNode.findByPk(startingNodeId, {
            include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
        });
        return res.status(200).json({ success: true, progress, currentNode });
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
        const adventure = await models_1.DefinitionStoryAdventure.findByPk(adventureId);
        if (!adventure) {
            return res.status(404).json({ error: 'Adventure not found' });
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
        let nextNodeId = choice.successNodeId;
        let rollDetails = null;
        // Buscar personagem para estatísticas vitais e atributos/perícias
        const character = await models_1.CharacterVampire.findByPk(characterId, {
            include: [
                { model: models_1.CharacterVampireAttribute, include: [{ model: models_1.DefinitionAttribute }] },
                { model: models_1.CharacterVampireSkill, include: [{ model: models_1.DefinitionSkill }] }
            ]
        });
        if (!character) {
            return res.status(404).json({ error: 'Character not found' });
        }
        // Se houver requisito de teste de dados V5
        if (choice.attributeReq || choice.skillReq) {
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
            const totalPool = Math.max(1, attrVal + skillVal);
            const difficultyTarget = choice.difficulty || 1;
            const hunger = Math.max(0, Math.min(5, character.hunger ?? 1));
            // Distribuição de Dados: Fome vs Normais
            const hungerDiceCount = Math.min(hunger, totalPool);
            const regularDiceCount = Math.max(0, totalPool - hungerDiceCount);
            const regularRolls = [];
            const hungerRolls = [];
            let regularSuccesses = 0;
            let regularTens = 0;
            let hungerSuccesses = 0;
            let hungerTens = 0;
            let hungerOnes = 0;
            // Rolagem dos dados regulares
            for (let i = 0; i < regularDiceCount; i++) {
                const roll = Math.floor(Math.random() * 10) + 1;
                regularRolls.push(roll);
                if (roll >= 6)
                    regularSuccesses++;
                if (roll === 10)
                    regularTens++;
            }
            // Rolagem dos dados de fome
            for (let i = 0; i < hungerDiceCount; i++) {
                const roll = Math.floor(Math.random() * 10) + 1;
                hungerRolls.push(roll);
                if (roll >= 6)
                    hungerSuccesses++;
                if (roll === 10)
                    hungerTens++;
                if (roll === 1)
                    hungerOnes++;
            }
            const totalTens = regularTens + hungerTens;
            const critPairs = Math.floor(totalTens / 2);
            const critBonusSuccesses = critPairs * 2;
            const totalSuccesses = regularSuccesses + hungerSuccesses + critBonusSuccesses;
            const isVictory = totalSuccesses >= difficultyTarget;
            const hasCritical = critPairs > 0;
            const hasMessyCritical = hasCritical && isVictory && hungerTens > 0;
            const hasBestialFailure = !isVictory && hungerOnes > 0;
            let verdictType = 'FAILURE';
            let verdictTitle = 'Falha no Teste';
            let verdictSubtitle = `Você obteve ${totalSuccesses} de ${difficultyTarget} sucessos necessários.`;
            if (hasMessyCritical) {
                verdictType = 'MESSY_CRITICAL';
                verdictTitle = 'Crítico Bestial! (Messy Critical)';
                verdictSubtitle = 'A Besta se libertou momentaneamente para assegurar a vitória com força descomunal ou selvageria!';
            }
            else if (hasCritical && isVictory) {
                verdictType = 'CRITICAL';
                verdictTitle = 'Sucesso Crítico!';
                verdictSubtitle = 'Uma demonstração impecável de maestria e controle vampírico.';
            }
            else if (isVictory) {
                verdictType = 'SUCCESS';
                verdictTitle = 'Sucesso no Teste';
                verdictSubtitle = `Você atingiu a dificuldade ${difficultyTarget} com maestria.`;
            }
            else if (hasBestialFailure) {
                verdictType = 'BESTIAL_FAILURE';
                verdictTitle = 'Falha Bestial! (Bestial Failure)';
                verdictSubtitle = 'A Fome sabotou suas ações, atraindo atenção indesejada ou caos sangrento!';
            }
            rollDetails = {
                poolName: `${choice.attributeReq || ''}${choice.attributeReq && choice.skillReq ? ' + ' : ''}${choice.skillReq || ''}`.trim(),
                totalDicePool: totalPool,
                difficulty: difficultyTarget,
                regularDice: regularRolls,
                hungerDice: hungerRolls,
                totalSuccesses,
                critPairs,
                isVictory,
                hasCritical,
                hasMessyCritical,
                hasBestialFailure,
                verdictType,
                verdictTitle,
                verdictSubtitle
            };
            if (isVictory) {
                nextNodeId = choice.successNodeId || choice.failureNodeId;
            }
            else {
                nextNodeId = choice.failureNodeId || choice.successNodeId;
            }
        }
        if (!nextNodeId) {
            return res.status(400).json({ error: 'A escolha não aponta para nenhum nó de destino' });
        }
        const newNode = await models_1.DefinitionStoryNode.findByPk(nextNodeId, {
            include: [{ model: models_1.DefinitionStoryChoice, as: 'choices' }]
        });
        let rewardsSummary = null;
        if (newNode && newNode.isEnding) {
            // Recompensas de conclusão da crônica
            const impact = {
                exp: 8,
                money: 800,
                hunger: -1 // Alimentação da noite de triunfo
            };
            await CharacterService_1.CharacterService.applyImpact(characterId, impact);
            rewardsSummary = {
                exp: impact.exp,
                money: impact.money,
                hunger: impact.hunger
            };
            // Registrar histórico no diário do personagem para aparecer no Hub
            await CharacterService_1.CharacterService.logActivity(characterId, 'STORY_ADVENTURE', adventureId, {
                title: adventure.title,
                endingNodeId: newNode.id,
                success: true,
                endingText: newNode.narrativeText,
                rewards: rewardsSummary,
                lastTest: rollDetails ? {
                    actionName: rollDetails.poolName,
                    pool: `${rollDetails.totalDicePool} dados (Fome: ${rollDetails.hungerDice.length})`,
                    rolls: [...rollDetails.regularDice, ...rollDetails.hungerDice],
                    successes: rollDetails.totalSuccesses,
                    passed: rollDetails.isVictory,
                    verdictTitle: rollDetails.verdictTitle
                } : null
            });
            // Deletar o progresso em andamento para liberar novo playthrough
            await progress.destroy();
        }
        else {
            progress.currentNodeId = nextNodeId;
            await progress.save();
        }
        // Buscar personagem atualizado
        const updatedCharacter = await models_1.CharacterVampire.findByPk(characterId);
        return res.status(200).json({
            success: rollDetails ? rollDetails.isVictory : true,
            rollDetails,
            newNode,
            rewards: rewardsSummary,
            progress: newNode?.isEnding ? null : progress,
            character: updatedCharacter
        });
    }
    catch (error) {
        console.error('Error processing choice:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
exports.processChoice = processChoice;
