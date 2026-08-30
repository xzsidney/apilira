"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyController = void 0;
const models_1 = require("../models");
const familySocketService_1 = require("../services/familySocketService");
const sequelize_1 = require("sequelize");
class FamilyController {
    // Lista todos os heróis da família (para visualização no salão e guilda)
    static async getMembers(req, res) {
        try {
            const members = await models_1.FamilyCharacter.findAll({
                order: [['orderIndex', 'ASC'], ['createdAt', 'ASC']],
            });
            res.json({ success: true, members });
        }
        catch (error) {
            console.error('Erro ao buscar membros da família:', error);
            res.status(500).json({ error: 'Erro ao buscar membros da família' });
        }
    }
    // Lista EXCLUSIVAMENTE os personagens pertencentes ao usuário logado
    static async getMyCharacters(req, res) {
        try {
            const userId = req.userId || req.user?.id;
            if (!userId) {
                res.status(401).json({ error: 'Não autorizado' });
                return;
            }
            const myCharacters = await models_1.FamilyCharacter.findAll({
                where: { userId },
                order: [['createdAt', 'ASC']],
            });
            res.json({ success: true, characters: myCharacters });
        }
        catch (error) {
            console.error('Erro ao buscar personagens do usuário:', error);
            res.status(500).json({ error: 'Erro ao buscar personagens' });
        }
    }
    // Permite ao usuário logado vincular um herói existente ao seu perfil
    static async claimCharacter(req, res) {
        try {
            const userId = req.userId || req.user?.id;
            const { characterId } = req.body;
            if (!userId) {
                res.status(401).json({ error: 'Não autorizado' });
                return;
            }
            const character = await models_1.FamilyCharacter.findByPk(characterId);
            if (!character) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            // Permite se não tiver dono ou se já for dele
            if (character.userId && character.userId !== userId) {
                res.status(400).json({ error: 'Este personagem já pertence a outro usuário' });
                return;
            }
            character.userId = userId;
            await character.save();
            res.json({ success: true, message: `Personagem ${character.name} vinculado à sua conta!`, character });
        }
        catch (error) {
            console.error('Erro ao vincular personagem:', error);
            res.status(500).json({ error: 'Erro ao vincular personagem' });
        }
    }
    // Cria ou atualiza o personagem exclusivo do usuário logado (Regra: 1 Herói por Usuário)
    static async createCharacter(req, res) {
        try {
            const userId = req.userId || req.user?.id;
            const { name, characterClass, title, avatarUrl, isParent } = req.body;
            if (!userId) {
                res.status(401).json({ error: 'Não autorizado' });
                return;
            }
            const targetClass = characterClass || 'GUERREIRO';
            // Verifica se o usuário já possui um herói
            let char = await models_1.FamilyCharacter.findOne({ where: { userId } });
            if (char) {
                // Atualiza o herói existente
                char.name = name || char.name;
                char.characterClass = targetClass;
                char.title = title || char.title;
                if (avatarUrl)
                    char.avatarUrl = avatarUrl;
                if (isParent !== undefined)
                    char.isParent = !!isParent;
                await char.save();
            }
            else {
                // Cria o único herói do jogador
                char = await models_1.FamilyCharacter.create({
                    userId,
                    name: name || 'Novo Herói',
                    characterClass: targetClass,
                    title: title || 'Aventureiro da Família',
                    avatarUrl: avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60',
                    level: 1,
                    currentXp: 0,
                    nextLevelXp: 100,
                    gold: 10,
                    hpCurrent: 100,
                    hpMax: 100,
                    mpCurrent: 50,
                    mpMax: 50,
                    strength: 10,
                    vitality: 10,
                    agility: 10,
                    wisdom: 10,
                    heartBond: 10,
                    equippedWeapon: targetClass === 'ARQUEIRO' ? 'Arco de Caça' : targetClass === 'MAGO' ? 'Cajado Rúnico' : 'Espada de Madeira',
                    equippedArmor: 'Colete de Couro',
                    isParent: !!isParent,
                });
            }
            // Auto-desbloqueia habilidade Grau I da classe se ainda não tiver
            const starterSkill = await models_1.FamilyClassSkill.findOne({
                where: { characterClass: targetClass, tier: 1 },
            });
            if (starterSkill) {
                await models_1.FamilyCharacterSkill.findOrCreate({
                    where: { characterId: char.id, skillId: starterSkill.id },
                    defaults: {
                        characterId: char.id,
                        skillId: starterSkill.id,
                        isEquipped: true,
                    },
                });
            }
            res.json({ success: true, message: 'Personagem configurado com sucesso!', character: char });
        }
        catch (error) {
            console.error('Erro ao criar/atualizar personagem:', error);
            res.status(500).json({ error: 'Erro ao criar/atualizar personagem' });
        }
    }
    // Busca o personagem vinculado ao usuário autenticado ou pelo ID
    static async getCharacter(req, res) {
        try {
            const { id } = req.params;
            const userId = req.user?.id;
            let character = null;
            if (id) {
                character = await models_1.FamilyCharacter.findByPk(id);
            }
            else if (userId) {
                character = await models_1.FamilyCharacter.findOne({ where: { userId } });
            }
            if (!character) {
                character = await models_1.FamilyCharacter.findOne({ order: [['orderIndex', 'ASC']] });
            }
            res.json({ success: true, character });
        }
        catch (error) {
            console.error('Erro ao buscar personagem:', error);
            res.status(500).json({ error: 'Erro ao buscar personagem' });
        }
    }
    // Lista tarefas disponíveis e status do dia
    static async getTasks(req, res) {
        try {
            const { characterId } = req.query;
            const tasks = await models_1.FamilyTask.findAll({
                where: { isActive: true },
                order: [['category', 'ASC'], ['rewardXp', 'ASC']],
            });
            // Se passou characterId, busca logs recentes (últimas 24h)
            let recentLogs = [];
            if (characterId) {
                const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
                recentLogs = await models_1.FamilyTaskLog.findAll({
                    where: {
                        characterId: String(characterId),
                        requestedAt: { [sequelize_1.Op.gte]: since },
                    },
                });
            }
            res.json({ success: true, tasks, recentLogs });
        }
        catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            res.status(500).json({ error: 'Erro ao buscar tarefas' });
        }
    }
    // Filho solicita conclusão de tarefa
    static async requestCompleteTask(req, res) {
        try {
            const { characterId, taskId, notes } = req.body;
            if (!characterId || !taskId) {
                res.status(400).json({ error: 'characterId e taskId são obrigatórios' });
                return;
            }
            const character = await models_1.FamilyCharacter.findByPk(characterId);
            const task = await models_1.FamilyTask.findByPk(taskId);
            if (!character || !task) {
                res.status(404).json({ error: 'Personagem ou Tarefa não encontrados' });
                return;
            }
            const log = await models_1.FamilyTaskLog.create({
                characterId,
                taskId,
                status: 'PENDING_APPROVAL',
                requestedAt: new Date(),
                notes: notes || null,
            });
            res.json({
                success: true,
                message: 'Tarefa enviada para aprovação dos pais! Bom trabalho!',
                log,
            });
        }
        catch (error) {
            console.error('Erro ao solicitar conclusão de tarefa:', error);
            res.status(500).json({ error: 'Erro ao solicitar conclusão de tarefa' });
        }
    }
    // Pais listam tarefas pendentes de aprovação
    static async getPendingTasks(req, res) {
        try {
            const pendingLogs = await models_1.FamilyTaskLog.findAll({
                where: { status: 'PENDING_APPROVAL' },
                include: [
                    { model: models_1.FamilyCharacter, as: 'character' },
                    { model: models_1.FamilyTask, as: 'task' },
                ],
                order: [['requestedAt', 'DESC']],
            });
            res.json({ success: true, pendingLogs });
        }
        catch (error) {
            console.error('Erro ao buscar tarefas pendentes:', error);
            res.status(500).json({ error: 'Erro ao buscar tarefas pendentes' });
        }
    }
    // Pais aprovam tarefa -> concede XP, Ouro e dispara notificação WebSocket
    static async approveTask(req, res) {
        try {
            const { logId } = req.body;
            const approverUserId = req.user?.id || 'parent_master';
            const log = await models_1.FamilyTaskLog.findByPk(logId, {
                include: [
                    { model: models_1.FamilyCharacter, as: 'character' },
                    { model: models_1.FamilyTask, as: 'task' },
                ],
            });
            if (!log || log.status !== 'PENDING_APPROVAL') {
                res.status(404).json({ error: 'Registro de tarefa não encontrado ou já processado' });
                return;
            }
            const char = log.character;
            const task = log.task;
            // Credita XP e Ouro
            char.currentXp += task.rewardXp;
            char.gold += task.rewardGold;
            // Verifica Level Up
            let leveledUp = false;
            while (char.currentXp >= char.nextLevelXp) {
                char.level += 1;
                char.currentXp -= char.nextLevelXp;
                char.nextLevelXp = Math.floor(char.nextLevelXp * 1.5);
                char.hpMax += 20;
                char.hpCurrent = char.hpMax;
                char.strength += 2;
                char.wisdom += 2;
                char.vitality += 2;
                char.agility += 2;
                leveledUp = true;
            }
            await char.save();
            log.status = 'APPROVED';
            log.approvedAt = new Date();
            log.approvedByUserId = approverUserId;
            await log.save();
            // Dispara evento em tempo real para toda a família conectada no Socket.IO
            (0, familySocketService_1.notifyTaskApprovedRealTime)({
                characterId: char.id,
                characterName: char.name,
                taskTitle: task.title,
                rewardXp: task.rewardXp,
                rewardGold: task.rewardGold,
            });
            res.json({
                success: true,
                message: `Tarefa aprovada! ${char.name} ganhou ${task.rewardXp} XP e ${task.rewardGold} Ouro!`,
                character: char,
                leveledUp,
            });
        }
        catch (error) {
            console.error('Erro ao aprovar tarefa:', error);
            res.status(500).json({ error: 'Erro ao aprovar tarefa' });
        }
    }
    // Pais rejeitam tarefa
    static async rejectTask(req, res) {
        try {
            const { logId, notes } = req.body;
            const log = await models_1.FamilyTaskLog.findByPk(logId);
            if (!log) {
                res.status(404).json({ error: 'Registro não encontrado' });
                return;
            }
            log.status = 'REJECTED';
            log.notes = notes || 'Tarefa precisa de ajustes.';
            await log.save();
            res.json({ success: true, message: 'Tarefa rejeitada ou enviada para ajuste.' });
        }
        catch (error) {
            console.error('Erro ao rejeitar tarefa:', error);
            res.status(500).json({ error: 'Erro ao rejeitar tarefa' });
        }
    }
    // Cria nova tarefa customizada
    static async createTask(req, res) {
        try {
            const { title, description, category, rewardXp, rewardGold, icon } = req.body;
            const task = await models_1.FamilyTask.create({
                title,
                description,
                category: category || 'CHORE',
                rewardXp: Number(rewardXp) || 50,
                rewardGold: Number(rewardGold) || 10,
                icon: icon || '⭐',
            });
            res.json({ success: true, task });
        }
        catch (error) {
            console.error('Erro ao criar tarefa:', error);
            res.status(500).json({ error: 'Erro ao criar tarefa' });
        }
    }
    // Busca a batalha ativa ou a mais recente
    static async getActiveBattle(req, res) {
        try {
            let battle = await models_1.FamilyBattle.findOne({
                where: { status: 'IN_PROGRESS' },
                order: [['createdAt', 'DESC']],
            });
            // Se não houver em progresso, cria um monstro inicial piloto!
            if (!battle) {
                const members = await models_1.FamilyCharacter.findAll({ order: [['orderIndex', 'ASC']] });
                const turnOrder = members.map(m => m.id);
                turnOrder.push('MONSTER'); // Monstro joga no final da rodada
                battle = await models_1.FamilyBattle.create({
                    title: 'A Batalha do Quarto dos Brinquedos',
                    monsterName: 'O Golem da Bagunça',
                    monsterAvatar: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60',
                    monsterHpCurrent: 600,
                    monsterHpMax: 600,
                    monsterAttack: 25,
                    monsterDefense: 5,
                    rewardXp: 180,
                    rewardGold: 60,
                    status: 'IN_PROGRESS',
                    currentTurnOrder: turnOrder,
                    activeTurnIndex: 0,
                    battleLogs: ['⚔️ O terrível Golem da Bagunça desafia a Família Lira! Unam suas forças!'],
                });
            }
            const battleJson = battle.toJSON ? battle.toJSON() : { ...battle };
            if (typeof battleJson.currentTurnOrder === 'string') {
                try {
                    battleJson.currentTurnOrder = JSON.parse(battleJson.currentTurnOrder);
                }
                catch (e) {
                    battleJson.currentTurnOrder = [];
                }
            }
            if (typeof battleJson.battleLogs === 'string') {
                try {
                    battleJson.battleLogs = JSON.parse(battleJson.battleLogs);
                }
                catch (e) {
                    battleJson.battleLogs = [];
                }
            }
            res.json({ success: true, battle: battleJson });
        }
        catch (error) {
            console.error('Erro ao buscar batalha ativa:', error);
            res.status(500).json({ error: 'Erro ao buscar batalha ativa' });
        }
    }
    // Lista itens da loja (virtuais e reais)
    static async getShopItems(req, res) {
        try {
            const items = await models_1.FamilyShopItem.findAll({
                where: { isAvailable: true },
                order: [['itemType', 'ASC'], ['costGold', 'ASC']],
            });
            res.json({ success: true, items });
        }
        catch (error) {
            console.error('Erro ao buscar itens da loja:', error);
            res.status(500).json({ error: 'Erro ao buscar itens da loja' });
        }
    }
    // Compra item ou resgata recompensa real
    static async buyItem(req, res) {
        try {
            const { characterId, itemId } = req.body;
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            const item = await models_1.FamilyShopItem.findByPk(itemId);
            if (!char || !item) {
                res.status(404).json({ error: 'Personagem ou Item não encontrados' });
                return;
            }
            if (char.gold < item.costGold) {
                res.status(400).json({ error: 'Ouro insuficiente! Faça mais tarefas para juntar ouro.' });
                return;
            }
            char.gold -= item.costGold;
            // Aplica bônus de equipamento se for o caso
            if (item.itemType === 'GAME_EQUIPMENT') {
                char.equippedWeapon = item.name;
                char.strength += 3;
            }
            else if (item.itemType === 'GAME_PET') {
                char.equippedPet = item.name;
                char.wisdom += 2;
            }
            else if (item.itemType === 'GAME_POTION') {
                char.hpCurrent = char.hpMax;
                char.mpCurrent = char.mpMax;
            }
            await char.save();
            res.json({
                success: true,
                message: item.itemType === 'REAL_REWARD'
                    ? `🎉 Parabéns! Você resgatou o vale '${item.name}'! Mostre aos seus pais para aproveitar!`
                    : `🎉 Você comprou '${item.name}' com sucesso!`,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao comprar item:', error);
            res.status(500).json({ error: 'Erro ao processar compra' });
        }
    }
    // --- EXPANSÃO: FICHA & TALENTOS ---
    // Distribui pontos / melhora atributos do Herói
    static async updateCharacterStats(req, res) {
        try {
            const { characterId, attribute } = req.body;
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            // Custo de evolução em XP
            const costXp = 50;
            if (char.currentXp < costXp) {
                res.status(400).json({ error: `XP insuficiente! Você precisa de ${costXp} XP para aprimorar um atributo.` });
                return;
            }
            char.currentXp -= costXp;
            if (attribute === 'strength')
                char.strength += 1;
            else if (attribute === 'vitality') {
                char.vitality += 1;
                char.hpMax += 10;
                char.hpCurrent = char.hpMax;
            }
            else if (attribute === 'agility')
                char.agility += 1;
            else if (attribute === 'wisdom') {
                char.wisdom += 1;
                char.mpMax += 10;
                char.mpCurrent = char.mpMax;
            }
            else if (attribute === 'heartBond')
                char.heartBond += 1;
            await char.save();
            res.json({
                success: true,
                message: `Atributo ${attribute} aprimorado com sucesso!`,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao aprimorar atributo:', error);
            res.status(500).json({ error: 'Erro ao aprimorar atributo' });
        }
    }
    // Atualiza o avatar do herói
    static async updateAvatar(req, res) {
        try {
            const { characterId, avatarUrl } = req.body;
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            char.avatarUrl = avatarUrl;
            await char.save();
            res.json({
                success: true,
                message: 'Foto do herói atualizada com sucesso!',
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao atualizar avatar:', error);
            res.status(500).json({ error: 'Erro ao atualizar avatar' });
        }
    }
    // --- EXPANSÃO: RADAR DA CASA E VIZINHANÇA ---
    static async getLocations(req, res) {
        try {
            const locations = await models_1.FamilyLocation.findAll({
                where: { isUnlocked: true },
                order: [['orderIndex', 'ASC']],
            });
            res.json({ success: true, locations });
        }
        catch (error) {
            console.error('Erro ao buscar locais do radar:', error);
            res.status(500).json({ error: 'Erro ao buscar locais' });
        }
    }
    // --- EXPANSÃO: CENTRO DE FOCO & MISSÃO ATIVA AFK ---
    static async startActiveMission(req, res) {
        try {
            const { characterId, title, category, durationMinutes, rewardXp, rewardGold } = req.body;
            const duration = Number(durationMinutes) || 15;
            const startedAt = new Date();
            const endsAt = new Date(startedAt.getTime() + duration * 60 * 1000);
            // Cancela missões anteriores em progresso
            await models_1.FamilyActiveMission.update({ status: 'CANCELLED' }, { where: { characterId, status: 'IN_PROGRESS' } });
            const mission = await models_1.FamilyActiveMission.create({
                characterId,
                title: title || 'Sessão de Foco & Estudo',
                category: category || 'STUDY',
                durationMinutes: duration,
                startedAt,
                endsAt,
                status: 'IN_PROGRESS',
                rewardXp: Number(rewardXp) || duration * 4,
                rewardGold: Number(rewardGold) || Math.floor(duration * 1.5),
                focusScore: 100,
                stages: [
                    { minute: Math.floor(duration * 0.25), text: 'Concentração inicial ativada!', completed: false },
                    { minute: Math.floor(duration * 0.5), text: 'Metade do tempo! Ritmo excelente!', completed: false },
                    { minute: Math.floor(duration * 0.75), text: 'Reta final da dedicação!', completed: false },
                ],
            });
            res.json({ success: true, mission });
        }
        catch (error) {
            console.error('Erro ao iniciar missão ativa:', error);
            res.status(500).json({ error: 'Erro ao iniciar missão ativa' });
        }
    }
    static async getCurrentActiveMission(req, res) {
        try {
            const { characterId } = req.query;
            if (!characterId) {
                res.json({ success: true, mission: null });
                return;
            }
            const mission = await models_1.FamilyActiveMission.findOne({
                where: { characterId: String(characterId), status: 'IN_PROGRESS' },
                order: [['createdAt', 'DESC']],
            });
            res.json({ success: true, mission });
        }
        catch (error) {
            console.error('Erro ao buscar missão ativa:', error);
            res.status(500).json({ error: 'Erro ao buscar missão ativa' });
        }
    }
    static async completeActiveMission(req, res) {
        try {
            const { missionId } = req.body;
            const mission = await models_1.FamilyActiveMission.findByPk(missionId);
            if (!mission || mission.status !== 'IN_PROGRESS') {
                res.status(404).json({ error: 'Missão não encontrada ou já concluída' });
                return;
            }
            mission.status = 'COMPLETED';
            await mission.save();
            // Credita recompensas
            const char = await models_1.FamilyCharacter.findByPk(mission.characterId);
            if (char) {
                char.currentXp += mission.rewardXp;
                char.gold += mission.rewardGold;
                while (char.currentXp >= char.nextLevelXp) {
                    char.level += 1;
                    char.currentXp -= char.nextLevelXp;
                    char.nextLevelXp = Math.floor(char.nextLevelXp * 1.5);
                    char.hpMax += 15;
                    char.strength += 1;
                    char.wisdom += 1;
                }
                await char.save();
            }
            res.json({
                success: true,
                message: `🎉 Missão de foco concluída! Você ganhou ${mission.rewardXp} XP e ${mission.rewardGold} Ouro!`,
                mission,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao concluir missão ativa:', error);
            res.status(500).json({ error: 'Erro ao concluir missão ativa' });
        }
    }
    // --- EXPANSÃO: CONTOS & LIVRO-JOGO SOLO INFANTIL ---
    static async getStoryAdventures(req, res) {
        try {
            const adventures = await models_1.FamilyStoryAdventure.findAll({
                where: { isActive: true },
                order: [['recommendedLevel', 'ASC']],
            });
            res.json({ success: true, adventures });
        }
        catch (error) {
            console.error('Erro ao buscar contos da família:', error);
            res.status(500).json({ error: 'Erro ao buscar aventuras' });
        }
    }
    static async getStoryNode(req, res) {
        try {
            const { adventureId, nodeId } = req.params;
            const node = await models_1.FamilyStoryNode.findOne({
                where: { adventureId, nodeId },
                include: [{ model: models_1.FamilyStoryChoice, as: 'choices' }],
            });
            if (!node) {
                res.status(404).json({ error: 'Cena da história não encontrada' });
                return;
            }
            res.json({ success: true, node });
        }
        catch (error) {
            console.error('Erro ao buscar cena do livro-jogo:', error);
            res.status(500).json({ error: 'Erro ao buscar cena' });
        }
    }
    static async executeStoryChoice(req, res) {
        try {
            const { characterId, choiceId } = req.body;
            const choice = await models_1.FamilyStoryChoice.findByPk(choiceId);
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!choice || !char) {
                res.status(404).json({ error: 'Escolha ou Personagem não encontrados' });
                return;
            }
            let rollResult = null;
            let targetNodeId = choice.targetNodeId;
            // Se a escolha exigir teste de atributo
            if (choice.testAttribute && choice.difficulty > 0) {
                const d20 = Math.floor(Math.random() * 20) + 1;
                let attributeBonus = 0;
                if (choice.testAttribute === 'STRENGTH')
                    attributeBonus = char.strength;
                else if (choice.testAttribute === 'WISDOM')
                    attributeBonus = char.wisdom;
                else if (choice.testAttribute === 'AGILITY')
                    attributeBonus = char.agility;
                else if (choice.testAttribute === 'VITALITY')
                    attributeBonus = char.vitality;
                else if (choice.testAttribute === 'HEART_BOND')
                    attributeBonus = char.heartBond;
                const total = d20 + Math.floor(attributeBonus / 2);
                const passed = total >= choice.difficulty;
                rollResult = {
                    d20,
                    attributeBonus: Math.floor(attributeBonus / 2),
                    total,
                    difficulty: choice.difficulty,
                    passed,
                };
                targetNodeId = passed ? (choice.successNodeId || choice.targetNodeId) : (choice.failureNodeId || choice.targetNodeId);
            }
            // Busca o próximo nó
            const targetNode = await models_1.FamilyStoryNode.findOne({
                where: { nodeId: targetNodeId },
                include: [{ model: models_1.FamilyStoryChoice, as: 'choices' }],
            });
            // Se for final com recompensa
            if (targetNode?.isEnding && targetNode.rewardXp > 0) {
                char.currentXp += targetNode.rewardXp;
                char.gold += targetNode.rewardGold;
                await char.save();
            }
            res.json({
                success: true,
                rollResult,
                targetNode,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao executar escolha na história:', error);
            res.status(500).json({ error: 'Erro ao processar escolha' });
        }
    }
    // --- EXPANSÃO: MURAL DO CLÃ & CONQUISTAS ---
    static async getFamilyFeed(req, res) {
        try {
            const achievements = await models_1.FamilyAchievement.findAll({ order: [['rewardXp', 'ASC']] });
            const recentApprovedLogs = await models_1.FamilyTaskLog.findAll({
                where: { status: 'APPROVED' },
                include: [
                    { model: models_1.FamilyCharacter, as: 'character', attributes: ['id', 'name', 'avatarUrl', 'characterClass', 'level'] },
                    { model: models_1.FamilyTask, as: 'task', attributes: ['title', 'icon', 'rewardXp', 'rewardGold'] },
                ],
                order: [['reviewedAt', 'DESC']],
                limit: 15,
            });
            // Placar de heróis da família (Ranking de XP e Nível)
            const leaderboard = await models_1.FamilyCharacter.findAll({
                order: [['level', 'DESC'], ['currentXp', 'DESC'], ['gold', 'DESC']],
                attributes: ['id', 'name', 'avatarUrl', 'characterClass', 'title', 'level', 'currentXp', 'gold'],
            });
            res.json({
                success: true,
                achievements,
                feed: recentApprovedLogs,
                leaderboard,
            });
        }
        catch (error) {
            console.error('Erro ao buscar feed da família:', error);
            res.status(500).json({ error: 'Erro ao buscar feed' });
        }
    }
    // --- EXPANSÃO: ÁRVORE DE HABILIDADES POR GRAUS & BUILDS ---
    static async getSkillTree(req, res) {
        try {
            const characterId = req.query.characterId || req.body.characterId;
            if (!characterId) {
                res.status(400).json({ error: 'characterId é obrigatório' });
                return;
            }
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            // Busca todas as habilidades da classe atual do herói
            const classSkills = await models_1.FamilyClassSkill.findAll({
                where: { characterClass: char.characterClass },
                order: [['tier', 'ASC'], ['orderIndex', 'ASC']],
            });
            // Busca todas as habilidades já desbloqueadas pelo personagem
            const characterSkills = await models_1.FamilyCharacterSkill.findAll({
                where: { characterId: char.id },
            });
            const unlockedSkillIds = characterSkills.map(cs => cs.skillId);
            const equippedSkillIds = characterSkills.filter(cs => cs.isEquipped).map(cs => cs.skillId);
            res.json({
                success: true,
                characterClass: char.characterClass,
                skills: classSkills,
                unlockedSkillIds,
                equippedSkillIds,
                characterXp: char.currentXp,
            });
        }
        catch (error) {
            console.error('Erro ao buscar árvore de habilidades:', error);
            res.status(500).json({ error: 'Erro ao buscar árvore de habilidades' });
        }
    }
    static async buySkill(req, res) {
        try {
            const { characterId, skillId } = req.body;
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            const skill = await models_1.FamilyClassSkill.findByPk(skillId);
            if (!skill) {
                res.status(404).json({ error: 'Habilidade não encontrada' });
                return;
            }
            // Verifica se já possui
            const alreadyOwned = await models_1.FamilyCharacterSkill.findOne({
                where: { characterId: char.id, skillId: skill.id },
            });
            if (alreadyOwned) {
                res.status(400).json({ error: 'Você já possui esta habilidade desbloqueada!' });
                return;
            }
            // Validação de Pré-requisito (Grau anterior)
            if (skill.requiredSkillId) {
                const hasPrerequisite = await models_1.FamilyCharacterSkill.findOne({
                    where: { characterId: char.id, skillId: skill.requiredSkillId },
                });
                if (!hasPrerequisite) {
                    const reqSkill = await models_1.FamilyClassSkill.findByPk(skill.requiredSkillId);
                    res.status(400).json({
                        error: `Você precisa desbloquear "${reqSkill?.name || 'o Grau anterior'}" antes de comprar este grau!`,
                    });
                    return;
                }
            }
            // Validação de XP
            if (char.currentXp < skill.costXp) {
                res.status(400).json({
                    error: `XP insuficiente! Você precisa de ${skill.costXp} XP (Possui: ${char.currentXp} XP).`,
                });
                return;
            }
            // Debita o XP
            char.currentXp -= skill.costXp;
            await char.save();
            // Conta quantas estão equipadas atualmente
            const equippedCount = await models_1.FamilyCharacterSkill.count({
                where: { characterId: char.id, isEquipped: true },
            });
            // Se tiver menos de 3, equipa automaticamente
            const shouldAutoEquip = equippedCount < 3;
            await models_1.FamilyCharacterSkill.create({
                characterId: char.id,
                skillId: skill.id,
                unlockedAt: new Date(),
                isEquipped: shouldAutoEquip,
            });
            res.json({
                success: true,
                message: `Habilidade "${skill.name}" adquirida com sucesso!`,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao comprar habilidade:', error);
            res.status(500).json({ error: 'Erro ao comprar habilidade' });
        }
    }
    static async equipSkill(req, res) {
        try {
            const { characterId, skillId, equip } = req.body;
            const charSkill = await models_1.FamilyCharacterSkill.findOne({
                where: { characterId, skillId },
            });
            if (!charSkill) {
                res.status(404).json({ error: 'Habilidade não desbloqueada para este personagem' });
                return;
            }
            if (equip) {
                const equippedCount = await models_1.FamilyCharacterSkill.count({
                    where: { characterId, isEquipped: true },
                });
                if (equippedCount >= 3) {
                    res.status(400).json({ error: 'Você já possui o limite máximo de 3 habilidades ativas na sua build de combate!' });
                    return;
                }
                charSkill.isEquipped = true;
            }
            else {
                charSkill.isEquipped = false;
            }
            await charSkill.save();
            res.json({
                success: true,
                message: equip ? 'Habilidade equipada na build de combate!' : 'Habilidade desequipada da build.',
                charSkill,
            });
        }
        catch (error) {
            console.error('Erro ao equipar habilidade:', error);
            res.status(500).json({ error: 'Erro ao equipar habilidade' });
        }
    }
    // --- TROCA DE CLASSE DINÂMICA ---
    static async changeClass(req, res) {
        try {
            const { characterId, characterClass } = req.body;
            const validClasses = ['GUERREIRO', 'MAGO', 'PALADINO', 'CURANDEIRA', 'ARQUEIRO', 'LADINO'];
            if (!validClasses.includes(characterClass)) {
                res.status(400).json({ error: 'Classe inválida' });
                return;
            }
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            char.characterClass = characterClass;
            if (characterClass === 'ARQUEIRO') {
                char.equippedWeapon = 'Arco de Caça Épico';
                char.equippedArmor = 'Gibão de Couro Furtivo';
            }
            else if (characterClass === 'MAGO') {
                char.equippedWeapon = 'Cajado Rúnico de Cristal';
                char.equippedArmor = 'Manto Arcano Estelar';
            }
            else if (characterClass === 'CURANDEIRA') {
                char.equippedWeapon = 'Cajado de Luz Cósmica';
                char.equippedArmor = 'Manto Estelar Protetor';
            }
            else if (characterClass === 'PALADINO') {
                char.equippedWeapon = 'Martelo Sagrado da Justiça';
                char.equippedArmor = 'Armadura de Placas Dourada';
            }
            else if (characterClass === 'LADINO') {
                char.equippedWeapon = 'Adagas Gêmeas Sombrias';
                char.equippedArmor = 'Capa da Invisibilidade';
            }
            else {
                char.equippedWeapon = 'Espada Larga de Ferro Forjado';
                char.equippedArmor = 'Cota de Malha Real';
            }
            await char.save();
            // Desbloqueia e equipa a habilidade Grau I da nova classe
            const starterSkill = await models_1.FamilyClassSkill.findOne({
                where: { characterClass, tier: 1 },
            });
            if (starterSkill) {
                await models_1.FamilyCharacterSkill.findOrCreate({
                    where: { characterId: char.id, skillId: starterSkill.id },
                    defaults: {
                        characterId: char.id,
                        skillId: starterSkill.id,
                        isEquipped: true,
                    },
                });
            }
            res.json({
                success: true,
                message: `Classe alterada para ${characterClass} com sucesso!`,
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao trocar de classe:', error);
            res.status(500).json({ error: 'Erro ao trocar de classe' });
        }
    }
    // --- ENFERMARIA DO REINO ---
    static async recoverFromInfirmary(req, res) {
        try {
            const { characterId } = req.body;
            const char = await models_1.FamilyCharacter.findByPk(characterId);
            if (!char) {
                res.status(404).json({ error: 'Personagem não encontrado' });
                return;
            }
            if (char.inInfirmaryUntil) {
                const now = new Date();
                const diffMs = new Date(char.inInfirmaryUntil).getTime() - now.getTime();
                // Se ainda faltar tempo e não for override
                if (diffMs > 0 && req.body.force !== true) {
                    const minutesLeft = Math.ceil(diffMs / 60000);
                    res.status(400).json({
                        error: `O herói ainda está repousando na Enfermaria! Tempo restante: ${minutesLeft} minuto(s).`,
                    });
                    return;
                }
            }
            // Restaura 100% do HP e zera enfermaria
            char.inInfirmaryUntil = null;
            char.hpCurrent = char.hpMax;
            char.mpCurrent = char.mpMax;
            await char.save();
            res.json({
                success: true,
                message: '🎉 Herói recuperou 100% de Vida (HP) e recebeu alta da Enfermaria!',
                character: char,
            });
        }
        catch (error) {
            console.error('Erro ao recuperar da enfermaria:', error);
            res.status(500).json({ error: 'Erro ao recuperar da enfermaria' });
        }
    }
}
exports.FamilyController = FamilyController;
