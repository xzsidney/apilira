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

interface PartyMember {
  characterId: string;
  name: string;
  characterClass: string;
  avatarUrl: string;
  isLeader: boolean;
}

let ioInstance: SocketIOServer | null = null;
const onlineMembers = new Map<string, OnlineMember>(); // socketId -> OnlineMember
let activePartyLobby: PartyMember[] = []; // Membros atualmente no grupo

function parseBattleJson(battle: any) {
  if (!battle) return battle;
  const b = battle.toJSON ? battle.toJSON() : { ...battle };
  if (typeof b.currentTurnOrder === 'string') {
    try { b.currentTurnOrder = JSON.parse(b.currentTurnOrder); } catch (e) { b.currentTurnOrder = []; }
  }
  if (typeof b.battleLogs === 'string') {
    try { b.battleLogs = JSON.parse(b.battleLogs); } catch (e) { b.battleLogs = []; }
  }
  if (typeof b.gridPositions === 'string') {
    try { b.gridPositions = JSON.parse(b.gridPositions); } catch (e) { b.gridPositions = { monster: 6 }; }
  }
  if (!b.gridPositions || typeof b.gridPositions !== 'object') {
    b.gridPositions = { monster: 6 };
  }
  return b;
}

export function initFamilySocket(io: SocketIOServer) {
  ioInstance = io;

  io.on('connection', (socket: Socket) => {
    console.log(`[Socket.IO] Cliente conectado: ${socket.id}`);

    // Entrar na Sala da Família Lira
    socket.on('family:join_room', async (data: { characterId?: string; name?: string }) => {
      socket.join('family_lira_room');

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

      broadcastPresence();
      socket.emit('family:party_lobby_updated', activePartyLobby);
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

    // --- SISTEMA DE GRUPO & CONVITES DE BATALHA (SOLO OU EM GRUPO) ---

    socket.on('family:create_party_lobby', (data: { leaderCharacter: any }) => {
      activePartyLobby = [{
        characterId: data.leaderCharacter.id,
        name: data.leaderCharacter.name,
        characterClass: data.leaderCharacter.characterClass,
        avatarUrl: data.leaderCharacter.avatarUrl,
        isLeader: true,
      }];
      io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
    });

    socket.on('family:send_party_invite', (data: { leaderName: string; leaderId: string; monsterName: string }) => {
      io.to('family_lira_room').emit('family:party_invite_received', {
        leaderName: data.leaderName,
        leaderId: data.leaderId,
        monsterName: data.monsterName || 'O Golem da Bagunça',
        timestamp: new Date().toISOString(),
      });
    });

    socket.on('family:accept_party_invite', (data: { character: any }) => {
      if (!activePartyLobby.some(m => m.characterId === data.character.id)) {
        activePartyLobby.push({
          characterId: data.character.id,
          name: data.character.name,
          characterClass: data.character.characterClass,
          avatarUrl: data.character.avatarUrl,
          isLeader: false,
        });
      }
      io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
    });

    socket.on('family:leave_party_lobby', (data: { characterId: string }) => {
      activePartyLobby = activePartyLobby.filter(m => m.characterId !== data.characterId);
      io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
    });

    // Iniciar a Batalha (Solo ou com quem aceitou no Grupo!)
    socket.on('family:start_party_battle', async (data: { partyMembers: PartyMember[]; isSolo?: boolean }) => {
      try {
        const party = data.partyMembers && data.partyMembers.length > 0 ? data.partyMembers : activePartyLobby;
        const participantIds = party.map(p => p.characterId);
        
        // Turnos: Ordem dos Heróis do grupo + Turno do Monstro
        const turnOrder = [...participantIds, 'MONSTER'];

        // Escala a vida do monstro de acordo com o tamanho do grupo
        const monsterHp = party.length === 1 ? 250 : party.length === 2 ? 400 : 600;

        // Grid Inicial de 10 posições (0 a 9): Herói na posição 3 e Monstro na posição 6 (3 casas de distância)
        const gridPositions: Record<string, number> = { monster: 6 };
        for (const p of party) {
          gridPositions[p.characterId] = 3;
        }

        let battle = await FamilyBattle.findOne({
          where: { status: 'IN_PROGRESS' },
          order: [['createdAt', 'DESC']],
        });

        if (!battle) {
          battle = await FamilyBattle.create({
            title: party.length === 1 ? '⚔️ Expedição Solo contra o Golem' : `⚔️ Incursão em Grupo (${party.length} Heróis)`,
            monsterName: 'O Golem da Bagunça',
            monsterAvatar: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=500&auto=format&fit=crop&q=60',
            monsterHpCurrent: monsterHp,
            monsterHpMax: monsterHp,
            monsterAttack: party.length === 1 ? 15 : 25,
            monsterDefense: 5,
            rewardXp: party.length === 1 ? 100 : 180,
            rewardGold: party.length === 1 ? 30 : 60,
            status: 'IN_PROGRESS',
            currentTurnOrder: turnOrder,
            activeTurnIndex: 0,
            gridPositions,
            battleLogs: [
              `⚔️ Batalha iniciada com ${party.map(p => p.name).join(', ')}! Heróis posicionados na casa [3] e Monstro na casa [6].`,
            ],
          });
        } else {
          battle.title = party.length === 1 ? '⚔️ Expedição Solo contra o Golem' : `⚔️ Incursão em Grupo (${party.length} Heróis)`;
          battle.currentTurnOrder = turnOrder;
          battle.monsterHpMax = monsterHp;
          battle.monsterHpCurrent = monsterHp;
          battle.activeTurnIndex = 0;
          battle.status = 'IN_PROGRESS';
          battle.gridPositions = gridPositions;
          battle.battleLogs = [
            `⚔️ Batalha iniciada com ${party.map(p => p.name).join(', ')}! Heróis posicionados na casa [3] e Monstro na casa [6].`,
          ];
          await battle.save();
        }

        const allCharacters = await FamilyCharacter.findAll();

        io.to('family_lira_room').emit('family:battle_party_started', {
          battle: parseBattleJson(battle),
          party,
          characters: allCharacters,
        });

      } catch (err) {
        console.error('[Socket.IO] Erro ao iniciar batalha em grupo/solo:', err);
      }
    });

    // Ação de Batalha em Tempo Real (Movimento + Ataque)
    socket.on('family:execute_battle_action', async (data: {
      battleId: string;
      characterId: string;
      actionType: 'ATTACK' | 'SKILL' | 'DEFEND' | 'HEAL' | 'MOVE';
      moveAction?: 'LEFT' | 'RIGHT' | 'STAY';
      skillId?: string;
      skillName?: string;
    }) => {
      try {
        const battle = await FamilyBattle.findByPk(data.battleId);
        const char = await FamilyCharacter.findByPk(data.characterId);

        if (!battle || !char || battle.status !== 'IN_PROGRESS') {
          return;
        }

        // Verifica se o herói está na enfermaria
        if (char.hpCurrent <= 0 || (char.inInfirmaryUntil && new Date(char.inInfirmaryUntil) > new Date())) {
          socket.emit('family:action_error', { message: 'Seu herói está nocauteado na Enfermaria e precisa repousar!' });
          return;
        }

        let turnOrder = battle.currentTurnOrder;
        if (typeof turnOrder === 'string') {
          try { turnOrder = JSON.parse(turnOrder); } catch (e) { turnOrder = []; }
        }
        if (!Array.isArray(turnOrder) || turnOrder.length === 0) {
          turnOrder = [char.id, 'MONSTER'];
        }

        let logs = battle.battleLogs;
        if (typeof logs === 'string') {
          try { logs = JSON.parse(logs); } catch (e) { logs = []; }
        }
        if (!Array.isArray(logs)) logs = [];

        // Recupera e valida o Grid de 10 Posições (0 a 9)
        let gridPositions = battle.gridPositions;
        if (typeof gridPositions === 'string') {
          try { gridPositions = JSON.parse(gridPositions); } catch (e) { gridPositions = {}; }
        }
        if (!gridPositions || typeof gridPositions !== 'object') gridPositions = {};
        if (gridPositions.monster === undefined) gridPositions.monster = 6;
        if (gridPositions[char.id] === undefined) gridPositions[char.id] = 3;

        let heroPos = Number(gridPositions[char.id]);
        let monsterPos = Number(gridPositions.monster);

        // 1. Processa Ação de Movimento no Grid
        let moveLog = '';
        if (data.moveAction === 'LEFT') {
          if (heroPos > 0) {
            heroPos -= 1;
            moveLog = `🏃 **${char.name}** recuou para a posição [${heroPos}] no grid!`;
          } else {
            moveLog = `🛑 **${char.name}** está no limite esquerdo [0] e manteve a posição.`;
          }
        } else if (data.moveAction === 'RIGHT') {
          if (heroPos + 1 < monsterPos) {
            heroPos += 1;
            moveLog = `🏃 **${char.name}** avançou para a posição [${heroPos}] no grid!`;
          } else {
            moveLog = `🛑 **${char.name}** já está adjacente ao monstro na posição [${heroPos}]!`;
          }
        }
        gridPositions[char.id] = heroPos;
        if (moveLog) {
          logs.unshift(moveLog);
        }

        const distance = Math.abs(monsterPos - heroPos);
        let damageDealt = 0;
        let healAmount = 0;
        let logMessage = '';

        // 2. Processa Ação de Combate / Habilidade com Regra de Alcance
        if (data.actionType === 'MOVE') {
          logMessage = `🎯 **${char.name}** ajustou sua posição tática no campo de batalha!`;
        } else if (data.skillId) {
          const { FamilyClassSkill } = await import('../models');
          const skill = await FamilyClassSkill.findByPk(data.skillId);
          if (skill) {
            const isRangedSkill = skill.effectType?.includes('RANGED') || char.characterClass === 'ARQUEIRO';
            const isHealSkill = skill.effectType?.includes('HEAL') || char.characterClass === 'CURANDEIRA';
            const isMagicSkill = skill.effectType?.includes('MAGIC') || char.characterClass === 'MAGO';

            // Validação de Alcance Melee
            if (!isRangedSkill && !isHealSkill && !isMagicSkill && skill.effectType !== 'SHIELD' && distance > 1) {
              socket.emit('family:action_error', {
                message: `⚠️ Muito longe (${distance} casas)! Avance até a casa adjacente para atacar corpo a corpo.`,
              });
              return;
            }

            // Desconta Mana se tiver
            if (char.mpCurrent >= skill.costMp) {
              char.mpCurrent -= skill.costMp;
              await char.save();
            }

            if (skill.effectType === 'HEAL_SINGLE') {
              healAmount = skill.power;
              char.hpCurrent = Math.min(char.hpMax, char.hpCurrent + healAmount);
              await char.save();
              logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** recuperando **+${healAmount} HP**!`;
            } else if (skill.effectType === 'HEAL_ALL') {
              healAmount = skill.power;
              const allChars = await FamilyCharacter.findAll();
              for (const c of allChars) {
                if (c.hpCurrent > 0) {
                  c.hpCurrent = Math.min(c.hpMax, c.hpCurrent + healAmount);
                  await c.save();
                }
              }
              logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** curando **+${healAmount} HP** para toda a família!`;
            } else if (skill.effectType === 'SHIELD') {
              logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** erguendo um escudo sagrado impenetrável!`;
            } else {
              damageDealt = skill.power + Math.floor(Math.random() * 12);
              battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
              logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** à distância de [${distance} casas] causando **${damageDealt}** de dano!`;
            }
          }
        } else if (data.actionType === 'ATTACK') {
          // Ataque básico é corpo a corpo a menos que seja Arqueiro
          if (char.characterClass !== 'ARQUEIRO' && distance > 1) {
            socket.emit('family:action_error', {
              message: `⚠️ Muito longe (${distance} casas)! Avance para a casa adjacente no grid para golpear.`,
            });
            return;
          }
          damageDealt = Math.max(15, (char.strength * 2) + Math.floor(Math.random() * 10));
          battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
          logMessage = `🗡️ **${char.name}** atacou **${battle.monsterName}** causando **${damageDealt}** de dano!`;
        } else if (data.actionType === 'DEFEND') {
          logMessage = `🛡️ **${char.name}** assumiu postura defensiva na posição [${heroPos}]!`;
        } else {
          damageDealt = Math.max(20, (char.wisdom * 2) + Math.floor(Math.random() * 10));
          battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
          logMessage = `⚡ **${char.name}** desferiu poder especial causando **${damageDealt}** de dano!`;
        }

        if (logMessage) {
          logs.unshift(logMessage);
        }
        if (logs.length > 25) logs.pop();
        battle.battleLogs = logs;
        battle.gridPositions = gridPositions;

        // Vitória
        if (battle.monsterHpCurrent <= 0) {
          battle.status = 'VICTORY';
          logs.unshift(`🏆 **VITÓRIA!** O chefe **${battle.monsterName}** foi derrotado! (+${battle.rewardXp} XP e +${battle.rewardGold} Ouro para o grupo!)`);
          battle.battleLogs = logs;
          await battle.save();

          const participantIds = turnOrder.filter(id => id !== 'MONSTER');
          for (const pId of participantIds) {
            const c = await FamilyCharacter.findByPk(pId);
            if (c) {
              c.currentXp += battle.rewardXp;
              c.gold += battle.rewardGold;
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
          }

          io.to('family_lira_room').emit('family:battle_victory', {
            battle: parseBattleJson(battle),
            rewardXp: battle.rewardXp,
            rewardGold: battle.rewardGold,
            message: `Vitória! A Masmorra foi conquistada!`,
          });
          return;
        }

        // Avançar o turno
        let nextIndex = (battle.activeTurnIndex + 1) % turnOrder.length;

        // Turno do Monstro (IA com Movimentação no Grid de 10 Posições)
        if (turnOrder[nextIndex] === 'MONSTER') {
          let distToHero = Math.abs(monsterPos - heroPos);
          
          // Se o monstro estiver longe (dist > 1), ele AVANÇA 1 casa em direção ao herói!
          if (distToHero > 1) {
            monsterPos = Math.max(heroPos + 1, monsterPos - 1);
            gridPositions.monster = monsterPos;
            distToHero = Math.abs(monsterPos - heroPos);
            logs.unshift(`🐲 **${battle.monsterName}** avançou furioso para a posição [${monsterPos}] no grid!`);
          }

          // Se após o avanço estiver adjacente (dist === 1), desfere o golpe
          if (distToHero === 1) {
            const monsterDmg = Math.max(12, battle.monsterAttack + Math.floor(Math.random() * 12));
            const heroIds = turnOrder.filter(id => id !== 'MONSTER');
            const targetId = heroIds.length > 0 ? heroIds[Math.floor(Math.random() * heroIds.length)] : char.id;
            
            if (targetId) {
              const target = await FamilyCharacter.findByPk(targetId);
              if (target) {
                const newHp = target.hpCurrent - monsterDmg;
                if (newHp <= 0) {
                  target.hpCurrent = 0;
                  target.inInfirmaryUntil = new Date(Date.now() + 60 * 60 * 1000); // 1 hora de tempo real
                  await target.save();
                  logs.unshift(`🚑 **${target.name}** foi atingido por **${monsterDmg}** de dano (0 HP) e foi levado para a **Enfermaria do Reino**!`);
                  io.to('family_lira_room').emit('family:hero_knocked_out', {
                    characterId: target.id,
                    characterName: target.name,
                    inInfirmaryUntil: target.inInfirmaryUntil,
                  });
                } else {
                  target.hpCurrent = newHp;
                  await target.save();
                  logs.unshift(`🐲 **${battle.monsterName}** contra-atacou **${target.name}** causando **${monsterDmg}** de dano!`);
                }
              }
            }
          } else {
            logs.unshift(`🐲 **${battle.monsterName}** rugiu ferozmente na posição [${monsterPos}], preparando o próximo bote!`);
          }

          nextIndex = (nextIndex + 1) % turnOrder.length;
        }

        battle.activeTurnIndex = nextIndex;
        battle.currentTurnOrder = turnOrder;
        battle.gridPositions = gridPositions;
        await battle.save();

        const allCharacters = await FamilyCharacter.findAll();

        io.to('family_lira_room').emit('family:battle_updated', {
          battle: parseBattleJson(battle),
          lastAction: logMessage || moveLog,
          characters: allCharacters,
        });

      } catch (err) {
        console.error('[Socket.IO] Erro ao executar ação de batalha:', err);
      }
    });

    socket.on('disconnect', () => {
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
