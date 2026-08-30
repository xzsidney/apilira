import { Request, Response } from 'express';
import { 
  FamilyCharacter, 
  FamilyTask, 
  FamilyTaskLog, 
  FamilyBattle, 
  FamilyBattleParticipant, 
  FamilyShopItem,
  FamilyLocation,
  FamilyActiveMission,
  FamilyStoryAdventure,
  FamilyStoryNode,
  FamilyStoryChoice,
  FamilyAchievement
} from '../models';
import { notifyTaskApprovedRealTime } from '../services/familySocketService';
import { Op } from 'sequelize';

export class FamilyController {
  // Lista todos os heróis da família (para visualização no salão e guilda)
  public static async getMembers(req: Request, res: Response): Promise<void> {
    try {
      const members = await FamilyCharacter.findAll({
        order: [['orderIndex', 'ASC'], ['createdAt', 'ASC']],
      });
      res.json({ success: true, members });
    } catch (error: any) {
      console.error('Erro ao buscar membros da família:', error);
      res.status(500).json({ error: 'Erro ao buscar membros da família' });
    }
  }

  // Lista EXCLUSIVAMENTE os personagens pertencentes ao usuário logado
  public static async getMyCharacters(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).userId || (req as any).user?.id;
      if (!userId) {
        res.status(401).json({ error: 'Não autorizado' });
        return;
      }

      const myCharacters = await FamilyCharacter.findAll({
        where: { userId },
        order: [['createdAt', 'ASC']],
      });

      res.json({ success: true, characters: myCharacters });
    } catch (error: any) {
      console.error('Erro ao buscar personagens do usuário:', error);
      res.status(500).json({ error: 'Erro ao buscar personagens' });
    }
  }

  // Permite ao usuário logado vincular um herói existente ao seu perfil
  public static async claimCharacter(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).userId || (req as any).user?.id;
      const { characterId } = req.body;

      if (!userId) {
        res.status(401).json({ error: 'Não autorizado' });
        return;
      }

      const character = await FamilyCharacter.findByPk(characterId);
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
    } catch (error: any) {
      console.error('Erro ao vincular personagem:', error);
      res.status(500).json({ error: 'Erro ao vincular personagem' });
    }
  }

  // Cria um novo personagem personalizado para o usuário logado
  public static async createCharacter(req: Request, res: Response): Promise<void> {
    try {
      const userId = (req as any).userId || (req as any).user?.id;
      const { name, characterClass, title, avatarUrl, isParent } = req.body;

      if (!userId) {
        res.status(401).json({ error: 'Não autorizado' });
        return;
      }

      const newChar = await FamilyCharacter.create({
        userId,
        name: name || 'Novo Herói',
        characterClass: characterClass || 'GUERREIRO',
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
        equippedWeapon: 'Espada de Madeira',
        equippedArmor: 'Colete de Couro',
        isParent: !!isParent,
      });

      res.json({ success: true, message: 'Personagem criado com sucesso!', character: newChar });
    } catch (error: any) {
      console.error('Erro ao criar personagem:', error);
      res.status(500).json({ error: 'Erro ao criar personagem' });
    }
  }

  // Busca o personagem vinculado ao usuário autenticado ou pelo ID
  public static async getCharacter(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const userId = (req as any).user?.id;

      let character = null;
      if (id) {
        character = await FamilyCharacter.findByPk(id);
      } else if (userId) {
        character = await FamilyCharacter.findOne({ where: { userId } });
      }

      if (!character) {
        character = await FamilyCharacter.findOne({ order: [['orderIndex', 'ASC']] });
      }

      res.json({ success: true, character });
    } catch (error: any) {
      console.error('Erro ao buscar personagem:', error);
      res.status(500).json({ error: 'Erro ao buscar personagem' });
    }
  }

  // Lista tarefas disponíveis e status do dia
  public static async getTasks(req: Request, res: Response): Promise<void> {
    try {
      const { characterId } = req.query;

      const tasks = await FamilyTask.findAll({
        where: { isActive: true },
        order: [['category', 'ASC'], ['rewardXp', 'ASC']],
      });

      // Se passou characterId, busca logs recentes (últimas 24h)
      let recentLogs: any[] = [];
      if (characterId) {
        const since = new Date(Date.now() - 24 * 60 * 60 * 1000);
        recentLogs = await FamilyTaskLog.findAll({
          where: {
            characterId: String(characterId),
            requestedAt: { [Op.gte]: since },
          },
        });
      }

      res.json({ success: true, tasks, recentLogs });
    } catch (error: any) {
      console.error('Erro ao buscar tarefas:', error);
      res.status(500).json({ error: 'Erro ao buscar tarefas' });
    }
  }

  // Filho solicita conclusão de tarefa
  public static async requestCompleteTask(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, taskId, notes } = req.body;

      if (!characterId || !taskId) {
        res.status(400).json({ error: 'characterId e taskId são obrigatórios' });
        return;
      }

      const character = await FamilyCharacter.findByPk(characterId);
      const task = await FamilyTask.findByPk(taskId);

      if (!character || !task) {
        res.status(404).json({ error: 'Personagem ou Tarefa não encontrados' });
        return;
      }

      const log = await FamilyTaskLog.create({
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
    } catch (error: any) {
      console.error('Erro ao solicitar conclusão de tarefa:', error);
      res.status(500).json({ error: 'Erro ao solicitar conclusão de tarefa' });
    }
  }

  // Pais listam tarefas pendentes de aprovação
  public static async getPendingTasks(req: Request, res: Response): Promise<void> {
    try {
      const pendingLogs = await FamilyTaskLog.findAll({
        where: { status: 'PENDING_APPROVAL' },
        include: [
          { model: FamilyCharacter, as: 'character' },
          { model: FamilyTask, as: 'task' },
        ],
        order: [['requestedAt', 'DESC']],
      });

      res.json({ success: true, pendingLogs });
    } catch (error: any) {
      console.error('Erro ao buscar tarefas pendentes:', error);
      res.status(500).json({ error: 'Erro ao buscar tarefas pendentes' });
    }
  }

  // Pais aprovam tarefa -> concede XP, Ouro e dispara notificação WebSocket
  public static async approveTask(req: Request, res: Response): Promise<void> {
    try {
      const { logId } = req.body;
      const approverUserId = (req as any).user?.id || 'parent_master';

      const log = await FamilyTaskLog.findByPk(logId, {
        include: [
          { model: FamilyCharacter, as: 'character' },
          { model: FamilyTask, as: 'task' },
        ],
      });

      if (!log || log.status !== 'PENDING_APPROVAL') {
        res.status(404).json({ error: 'Registro de tarefa não encontrado ou já processado' });
        return;
      }

      const char = (log as any).character as FamilyCharacter;
      const task = (log as any).task as FamilyTask;

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
      notifyTaskApprovedRealTime({
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
    } catch (error: any) {
      console.error('Erro ao aprovar tarefa:', error);
      res.status(500).json({ error: 'Erro ao aprovar tarefa' });
    }
  }

  // Pais rejeitam tarefa
  public static async rejectTask(req: Request, res: Response): Promise<void> {
    try {
      const { logId, notes } = req.body;
      const log = await FamilyTaskLog.findByPk(logId);

      if (!log) {
        res.status(404).json({ error: 'Registro não encontrado' });
        return;
      }

      log.status = 'REJECTED';
      log.notes = notes || 'Tarefa precisa de ajustes.';
      await log.save();

      res.json({ success: true, message: 'Tarefa rejeitada ou enviada para ajuste.' });
    } catch (error: any) {
      console.error('Erro ao rejeitar tarefa:', error);
      res.status(500).json({ error: 'Erro ao rejeitar tarefa' });
    }
  }

  // Cria nova tarefa customizada
  public static async createTask(req: Request, res: Response): Promise<void> {
    try {
      const { title, description, category, rewardXp, rewardGold, icon } = req.body;

      const task = await FamilyTask.create({
        title,
        description,
        category: category || 'CHORE',
        rewardXp: Number(rewardXp) || 50,
        rewardGold: Number(rewardGold) || 10,
        icon: icon || '⭐',
      });

      res.json({ success: true, task });
    } catch (error: any) {
      console.error('Erro ao criar tarefa:', error);
      res.status(500).json({ error: 'Erro ao criar tarefa' });
    }
  }

  // Busca a batalha ativa ou a mais recente
  public static async getActiveBattle(req: Request, res: Response): Promise<void> {
    try {
      let battle = await FamilyBattle.findOne({
        where: { status: 'IN_PROGRESS' },
        order: [['createdAt', 'DESC']],
      });

      // Se não houver em progresso, cria um monstro inicial piloto!
      if (!battle) {
        const members = await FamilyCharacter.findAll({ order: [['orderIndex', 'ASC']] });
        const turnOrder = members.map(m => m.id);
        turnOrder.push('MONSTER'); // Monstro joga no final da rodada

        battle = await FamilyBattle.create({
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
        try { battleJson.currentTurnOrder = JSON.parse(battleJson.currentTurnOrder); } catch (e) { battleJson.currentTurnOrder = []; }
      }
      if (typeof battleJson.battleLogs === 'string') {
        try { battleJson.battleLogs = JSON.parse(battleJson.battleLogs); } catch (e) { battleJson.battleLogs = []; }
      }

      res.json({ success: true, battle: battleJson });
    } catch (error: any) {
      console.error('Erro ao buscar batalha ativa:', error);
      res.status(500).json({ error: 'Erro ao buscar batalha ativa' });
    }
  }

  // Lista itens da loja (virtuais e reais)
  public static async getShopItems(req: Request, res: Response): Promise<void> {
    try {
      const items = await FamilyShopItem.findAll({
        where: { isAvailable: true },
        order: [['itemType', 'ASC'], ['costGold', 'ASC']],
      });
      res.json({ success: true, items });
    } catch (error: any) {
      console.error('Erro ao buscar itens da loja:', error);
      res.status(500).json({ error: 'Erro ao buscar itens da loja' });
    }
  }

  // Compra item ou resgata recompensa real
  public static async buyItem(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, itemId } = req.body;

      const char = await FamilyCharacter.findByPk(characterId);
      const item = await FamilyShopItem.findByPk(itemId);

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
      } else if (item.itemType === 'GAME_PET') {
        char.equippedPet = item.name;
        char.wisdom += 2;
      } else if (item.itemType === 'GAME_POTION') {
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
    } catch (error: any) {
      console.error('Erro ao comprar item:', error);
      res.status(500).json({ error: 'Erro ao processar compra' });
    }
  }

  // --- EXPANSÃO: FICHA & TALENTOS ---

  // Distribui pontos / melhora atributos do Herói
  public static async updateCharacterStats(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, attribute } = req.body;
      const char = await FamilyCharacter.findByPk(characterId);

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

      if (attribute === 'strength') char.strength += 1;
      else if (attribute === 'vitality') {
        char.vitality += 1;
        char.hpMax += 10;
        char.hpCurrent = char.hpMax;
      }
      else if (attribute === 'agility') char.agility += 1;
      else if (attribute === 'wisdom') {
        char.wisdom += 1;
        char.mpMax += 10;
        char.mpCurrent = char.mpMax;
      }
      else if (attribute === 'heartBond') char.heartBond += 1;

      await char.save();

      res.json({
        success: true,
        message: `Atributo ${attribute} aprimorado com sucesso!`,
        character: char,
      });
    } catch (error: any) {
      console.error('Erro ao aprimorar atributo:', error);
      res.status(500).json({ error: 'Erro ao aprimorar atributo' });
    }
  }

  // Atualiza o avatar do herói
  public static async updateAvatar(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, avatarUrl } = req.body;
      const char = await FamilyCharacter.findByPk(characterId);

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
    } catch (error: any) {
      console.error('Erro ao atualizar avatar:', error);
      res.status(500).json({ error: 'Erro ao atualizar avatar' });
    }
  }

  // --- EXPANSÃO: RADAR DA CASA E VIZINHANÇA ---

  public static async getLocations(req: Request, res: Response): Promise<void> {
    try {
      const locations = await FamilyLocation.findAll({
        where: { isUnlocked: true },
        order: [['orderIndex', 'ASC']],
      });
      res.json({ success: true, locations });
    } catch (error: any) {
      console.error('Erro ao buscar locais do radar:', error);
      res.status(500).json({ error: 'Erro ao buscar locais' });
    }
  }

  // --- EXPANSÃO: CENTRO DE FOCO & MISSÃO ATIVA AFK ---

  public static async startActiveMission(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, title, category, durationMinutes, rewardXp, rewardGold } = req.body;
      const duration = Number(durationMinutes) || 15;
      const startedAt = new Date();
      const endsAt = new Date(startedAt.getTime() + duration * 60 * 1000);

      // Cancela missões anteriores em progresso
      await FamilyActiveMission.update(
        { status: 'CANCELLED' },
        { where: { characterId, status: 'IN_PROGRESS' } }
      );

      const mission = await FamilyActiveMission.create({
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
    } catch (error: any) {
      console.error('Erro ao iniciar missão ativa:', error);
      res.status(500).json({ error: 'Erro ao iniciar missão ativa' });
    }
  }

  public static async getCurrentActiveMission(req: Request, res: Response): Promise<void> {
    try {
      const { characterId } = req.query;
      if (!characterId) {
        res.json({ success: true, mission: null });
        return;
      }

      const mission = await FamilyActiveMission.findOne({
        where: { characterId: String(characterId), status: 'IN_PROGRESS' },
        order: [['createdAt', 'DESC']],
      });

      res.json({ success: true, mission });
    } catch (error: any) {
      console.error('Erro ao buscar missão ativa:', error);
      res.status(500).json({ error: 'Erro ao buscar missão ativa' });
    }
  }

  public static async completeActiveMission(req: Request, res: Response): Promise<void> {
    try {
      const { missionId } = req.body;
      const mission = await FamilyActiveMission.findByPk(missionId);

      if (!mission || mission.status !== 'IN_PROGRESS') {
        res.status(404).json({ error: 'Missão não encontrada ou já concluída' });
        return;
      }

      mission.status = 'COMPLETED';
      await mission.save();

      // Credita recompensas
      const char = await FamilyCharacter.findByPk(mission.characterId);
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
    } catch (error: any) {
      console.error('Erro ao concluir missão ativa:', error);
      res.status(500).json({ error: 'Erro ao concluir missão ativa' });
    }
  }

  // --- EXPANSÃO: CONTOS & LIVRO-JOGO SOLO INFANTIL ---

  public static async getStoryAdventures(req: Request, res: Response): Promise<void> {
    try {
      const adventures = await FamilyStoryAdventure.findAll({
        where: { isActive: true },
        order: [['recommendedLevel', 'ASC']],
      });
      res.json({ success: true, adventures });
    } catch (error: any) {
      console.error('Erro ao buscar contos da família:', error);
      res.status(500).json({ error: 'Erro ao buscar aventuras' });
    }
  }

  public static async getStoryNode(req: Request, res: Response): Promise<void> {
    try {
      const { adventureId, nodeId } = req.params;

      const node = await FamilyStoryNode.findOne({
        where: { adventureId, nodeId },
        include: [{ model: FamilyStoryChoice, as: 'choices' }],
      });

      if (!node) {
        res.status(404).json({ error: 'Cena da história não encontrada' });
        return;
      }

      res.json({ success: true, node });
    } catch (error: any) {
      console.error('Erro ao buscar cena do livro-jogo:', error);
      res.status(500).json({ error: 'Erro ao buscar cena' });
    }
  }

  public static async executeStoryChoice(req: Request, res: Response): Promise<void> {
    try {
      const { characterId, choiceId } = req.body;
      const choice = await FamilyStoryChoice.findByPk(choiceId);
      const char = await FamilyCharacter.findByPk(characterId);

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
        if (choice.testAttribute === 'STRENGTH') attributeBonus = char.strength;
        else if (choice.testAttribute === 'WISDOM') attributeBonus = char.wisdom;
        else if (choice.testAttribute === 'AGILITY') attributeBonus = char.agility;
        else if (choice.testAttribute === 'VITALITY') attributeBonus = char.vitality;
        else if (choice.testAttribute === 'HEART_BOND') attributeBonus = char.heartBond;

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
      const targetNode = await FamilyStoryNode.findOne({
        where: { nodeId: targetNodeId },
        include: [{ model: FamilyStoryChoice, as: 'choices' }],
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
    } catch (error: any) {
      console.error('Erro ao executar escolha na história:', error);
      res.status(500).json({ error: 'Erro ao processar escolha' });
    }
  }

  // --- EXPANSÃO: MURAL DO CLÃ & CONQUISTAS ---

  public static async getFamilyFeed(req: Request, res: Response): Promise<void> {
    try {
      const achievements = await FamilyAchievement.findAll({ order: [['rewardXp', 'ASC']] });
      const recentApprovedLogs = await FamilyTaskLog.findAll({
        where: { status: 'APPROVED' },
        include: [
          { model: FamilyCharacter, as: 'character', attributes: ['id', 'name', 'avatarUrl', 'characterClass', 'level'] },
          { model: FamilyTask, as: 'task', attributes: ['title', 'icon', 'rewardXp', 'rewardGold'] },
        ],
        order: [['reviewedAt', 'DESC']],
        limit: 15,
      });

      // Placar de heróis da família (Ranking de XP e Nível)
      const leaderboard = await FamilyCharacter.findAll({
        order: [['level', 'DESC'], ['currentXp', 'DESC'], ['gold', 'DESC']],
        attributes: ['id', 'name', 'avatarUrl', 'characterClass', 'title', 'level', 'currentXp', 'gold'],
      });

      res.json({
        success: true,
        achievements,
        feed: recentApprovedLogs,
        leaderboard,
      });
    } catch (error: any) {
      console.error('Erro ao buscar feed da família:', error);
      res.status(500).json({ error: 'Erro ao buscar feed' });
    }
  }
}
