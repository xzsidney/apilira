import { Server as SocketIOServer, Socket } from 'socket.io';
import { FamilyCharacter, FamilyBattle, FamilyBattleParticipant } from '../models';

interface OnlineMember {
  socketId: string;
  characterId: string;
  name: string;
  characterClass: string;
  avatarUrl: string;
  isParent: boolean;
  hpCurrent: number;
  hpMax: number;
}

let ioInstance: SocketIOServer | null = null;
const onlineMembers = new Map<string, OnlineMember>(); // socketId -> OnlineMember

export function initFamilySocket(io: SocketIOServer) {
  ioInstance = io;

  io.on('connection', (socket: Socket) => {
    console.log(`[Socket.IO] Cliente conectado: ${socket.id}`);

    // Entrar na Sala da Família Lira
    socket.on('family:join_room', async (data: { characterId?: string; name?: string }) => {
      socket.join('family_lira_room');
      console.log(`[Socket.IO] ${socket.id} entrou na family_lira_room com char: ${data.characterId}`);

      if (data.characterId) {
        try {
          const char = await FamilyCharacter.findByPk(data.characterId);
          if (char) {
            onlineMembers.set(socket.id, {
              socketId: socket.id,
              characterId: char.id,
              name: char.name,
              characterClass: char.characterClass,
              avatarUrl: char.avatarUrl || '',
              isParent: char.isParent,
              hpCurrent: char.hpCurrent,
              hpMax: char.hpMax,
            });
          }
        } catch (e) {
          console.error('[Socket.IO] Erro ao buscar char para presença:', e);
        }
      }

      // Transmite lista de membros online para todos na sala
      broadcastPresence();
    });

    // Reações rápidas e emojis flutuantes
    socket.on('family:send_reaction', (data: { characterId: string; characterName: string; emoji: string; text?: string }) => {
      io.to('family_lira_room').emit('family:reaction_received', {
        characterId: data.characterId,
        characterName: data.characterName,
        emoji: data.emoji,
        text: data.text || '',
        timestamp: new Date().toISOString(),
      });
    });

    // Ação de Batalha em Tempo Real
    socket.on('family:execute_battle_action', async (data: {
      battleId: string;
      characterId: string;
      actionType: 'ATTACK' | 'SKILL' | 'DEFEND' | 'HEAL';
      skillName?: string;
    }) => {
      try {
        const battle = await FamilyBattle.findByPk(data.battleId);
        const char = await FamilyCharacter.findByPk(data.characterId);

        if (!battle || !char || battle.status !== 'IN_PROGRESS') {
          return;
        }

        let damageDealt = 0;
        let healAmount = 0;
        let logMessage = '';

        if (data.actionType === 'ATTACK') {
          // Dano básico baseado na Força + nível
          damageDealt = Math.max(15, (char.strength * 2) + Math.floor(Math.random() * 10));
          battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
          logMessage = `🗡️ **${char.name}** atacou **${battle.monsterName}** causando **${damageDealt}** de dano!`;
        } else if (data.actionType === 'SKILL') {
          // Habilidade mágica / elemental
          damageDealt = Math.max(25, (char.wisdom * 3) + Math.floor(Math.random() * 15));
          battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
          logMessage = `🔥 **${char.name}** usou **${data.skillName || 'Poder Mágico'}** causando **${damageDealt}** de dano estrondoso!`;
        } else if (data.actionType === 'HEAL') {
          // Cura para toda a família
          healAmount = 30 + Math.floor(char.wisdom * 1.5);
          // Curar todos os personagens
          const allChars = await FamilyCharacter.findAll();
          for (const c of allChars) {
            c.hpCurrent = Math.min(c.hpMax, c.hpCurrent + healAmount);
            await c.save();
          }
          logMessage = `✨ **${char.name}** usou **Bênção da Luz** curando **+${healAmount} HP** para toda a família!`;
        } else if (data.actionType === 'DEFEND') {
          logMessage = `🛡️ **${char.name}** assumiu postura defensiva com seu escudo!`;
        }

        // Adiciona log de batalha
        const logs = Array.isArray(battle.battleLogs) ? [...battle.battleLogs] : [];
        logs.unshift(logMessage);
        if (logs.length > 20) logs.pop();
        battle.battleLogs = logs;

        // Verifica vitória
        if (battle.monsterHpCurrent <= 0) {
          battle.status = 'VICTORY';
          logs.unshift(`🏆 **VITÓRIA!** O chefe **${battle.monsterName}** foi derrotado pela união da Família Lira! (+${battle.rewardXp} XP e +${battle.rewardGold} Ouro para todos!)`);
          battle.battleLogs = logs;
          await battle.save();

          // Distribuir recompensas para todos
          const allChars = await FamilyCharacter.findAll();
          for (const c of allChars) {
            c.currentXp += battle.rewardXp;
            c.gold += battle.rewardGold;
            // Level up check
            while (c.currentXp >= c.nextLevelXp) {
              c.level += 1;
              c.currentXp -= c.nextLevelXp;
              c.nextLevelXp = Math.floor(c.nextLevelXp * 1.5);
              c.hpMax += 20;
              c.hpCurrent = c.hpMax;
              c.strength += 2;
              c.wisdom += 2;
              c.vitality += 2;
              c.agility += 2;
            }
            await c.save();
          }

          io.to('family_lira_room').emit('family:battle_victory', {
            battle,
            rewardXp: battle.rewardXp,
            rewardGold: battle.rewardGold,
            message: `Vitória! A Família Lira venceu ${battle.monsterName}!`,
          });
          return;
        }

        // Avançar o turno
        const turnOrder = Array.isArray(battle.currentTurnOrder) ? battle.currentTurnOrder : [];
        let nextIndex = (battle.activeTurnIndex + 1) % (turnOrder.length || 1);

        // Turno do Monstro se atingir a posição
        if (turnOrder[nextIndex] === 'MONSTER') {
          const monsterDmg = Math.max(10, battle.monsterAttack + Math.floor(Math.random() * 10));
          // Ataca um herói aleatório
          const targets = await FamilyCharacter.findAll({ where: { isParent: false } });
          const target = targets.length > 0 ? targets[Math.floor(Math.random() * targets.length)] : null;
          if (target) {
            target.hpCurrent = Math.max(1, target.hpCurrent - monsterDmg);
            await target.save();
            logs.unshift(`🐲 **${battle.monsterName}** contra-atacou **${target.name}** causando **${monsterDmg}** de dano!`);
          }
          nextIndex = (nextIndex + 1) % turnOrder.length;
        }

        battle.activeTurnIndex = nextIndex;
        await battle.save();

        // Notifica todos na sala com o estado atualizado da batalha
        io.to('family_lira_room').emit('family:battle_updated', {
          battle,
          lastAction: logMessage,
        });

      } catch (err) {
        console.error('[Socket.IO] Erro ao executar ação de batalha:', err);
      }
    });

    // Desconexão
    socket.on('disconnect', () => {
      console.log(`[Socket.IO] Cliente desconectado: ${socket.id}`);
      onlineMembers.delete(socket.id);
      broadcastPresence();
    });
  });
}

function broadcastPresence() {
  if (!ioInstance) return;
  const uniqueMembers = Array.from(onlineMembers.values());
  ioInstance.to('family_lira_room').emit('family:presence_update', uniqueMembers);
}

// Emite alerta quando uma tarefa for aprovada pelo Pai/Mãe
export function notifyTaskApprovedRealTime(data: {
  characterName: string;
  taskTitle: string;
  rewardXp: number;
  rewardGold: number;
  characterId: string;
}) {
  if (!ioInstance) return;
  ioInstance.to('family_lira_room').emit('family:task_approved_event', {
    ...data,
    timestamp: new Date().toISOString(),
  });
}
