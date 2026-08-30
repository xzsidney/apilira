"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFamilySocket = initFamilySocket;
exports.notifyTaskApprovedRealTime = notifyTaskApprovedRealTime;
const models_1 = require("../models");
let ioInstance = null;
const onlineMembers = new Map(); // socketId -> OnlineMember
let activePartyLobby = []; // Membros atualmente no grupo de preparação da batalha
function initFamilySocket(io) {
    ioInstance = io;
    io.on('connection', (socket) => {
        console.log(`[Socket.IO] Cliente conectado: ${socket.id}`);
        // Entrar na Sala da Família Lira
        socket.on('family:join_room', async (data) => {
            socket.join('family_lira_room');
            if (data.characterId) {
                try {
                    const char = await models_1.FamilyCharacter.findByPk(data.characterId);
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
                }
                catch (e) {
                    console.error('[Socket.IO] Erro ao buscar char para presença:', e);
                }
            }
            broadcastPresence();
            // Envia status do lobby atual
            socket.emit('family:party_lobby_updated', activePartyLobby);
        });
        // Reações rápidas e emojis flutuantes
        socket.on('family:send_reaction', (data) => {
            io.to('family_lira_room').emit('family:reaction_received', {
                characterId: data.characterId,
                characterName: data.characterName,
                emoji: data.emoji,
                text: data.text || '',
                timestamp: new Date().toISOString(),
            });
        });
        // --- SISTEMA DE GRUPO & CONVITES DE BATALHA (SOLO OU EM GRUPO) ---
        // 1. Criar/Entrar no Lobby como Líder
        socket.on('family:create_party_lobby', (data) => {
            activePartyLobby = [{
                    characterId: data.leaderCharacter.id,
                    name: data.leaderCharacter.name,
                    characterClass: data.leaderCharacter.characterClass,
                    avatarUrl: data.leaderCharacter.avatarUrl,
                    isLeader: true,
                }];
            io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
        });
        // 2. Enviar Convite para Todos os Online
        socket.on('family:send_party_invite', (data) => {
            io.to('family_lira_room').emit('family:party_invite_received', {
                leaderName: data.leaderName,
                leaderId: data.leaderId,
                monsterName: data.monsterName || 'O Golem da Bagunça',
                timestamp: new Date().toISOString(),
            });
        });
        // 3. Membro aceita convite de batalha
        socket.on('family:accept_party_invite', (data) => {
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
        // 4. Membro sai do lobby
        socket.on('family:leave_party_lobby', (data) => {
            activePartyLobby = activePartyLobby.filter(m => m.characterId !== data.characterId);
            io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
        });
        // 5. Iniciar a Batalha (Solo ou com quem aceitou no Grupo!)
        socket.on('family:start_party_battle', async (data) => {
            try {
                const party = data.partyMembers && data.partyMembers.length > 0 ? data.partyMembers : activePartyLobby;
                const participantIds = party.map(p => p.characterId);
                // Turnos: Ordem dos Heróis do grupo + Turno do Monstro
                const turnOrder = [...participantIds, 'MONSTER'];
                // Escala a vida do monstro de acordo com o tamanho do grupo
                // 1 Jogador Solo = 250 HP | 2 Jogadores = 400 HP | 3+ Jogadores = 600 HP
                const monsterHp = party.length === 1 ? 250 : party.length === 2 ? 400 : 600;
                let battle = await models_1.FamilyBattle.findOne({
                    where: { status: 'IN_PROGRESS' },
                    order: [['createdAt', 'DESC']],
                });
                if (!battle) {
                    battle = await models_1.FamilyBattle.create({
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
                        battleLogs: [
                            `⚔️ Batalha iniciada com ${party.map(p => p.name).join(', ')}!`,
                        ],
                    });
                }
                else {
                    battle.currentTurnOrder = turnOrder;
                    battle.monsterHpMax = monsterHp;
                    battle.monsterHpCurrent = monsterHp;
                    battle.activeTurnIndex = 0;
                    battle.battleLogs = [
                        `⚔️ Batalha iniciada com ${party.map(p => p.name).join(', ')}!`,
                    ];
                    await battle.save();
                }
                // Transmite o início da batalha para toda a família
                io.to('family_lira_room').emit('family:battle_party_started', {
                    battle,
                    party,
                });
            }
            catch (err) {
                console.error('[Socket.IO] Erro ao iniciar batalha em grupo/solo:', err);
            }
        });
        // 6. Ação de Batalha em Tempo Real
        socket.on('family:execute_battle_action', async (data) => {
            try {
                const battle = await models_1.FamilyBattle.findByPk(data.battleId);
                const char = await models_1.FamilyCharacter.findByPk(data.characterId);
                if (!battle || !char || battle.status !== 'IN_PROGRESS') {
                    return;
                }
                let damageDealt = 0;
                let healAmount = 0;
                let logMessage = '';
                if (data.actionType === 'ATTACK') {
                    damageDealt = Math.max(15, (char.strength * 2) + Math.floor(Math.random() * 10));
                    battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
                    logMessage = `🗡️ **${char.name}** atacou **${battle.monsterName}** causando **${damageDealt}** de dano!`;
                }
                else if (data.actionType === 'SKILL') {
                    damageDealt = Math.max(25, (char.wisdom * 3) + Math.floor(Math.random() * 15));
                    battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
                    logMessage = `🔥 **${char.name}** usou **${data.skillName || 'Magia Especial'}** causando **${damageDealt}** de dano estrondoso!`;
                }
                else if (data.actionType === 'HEAL') {
                    healAmount = 30 + Math.floor(char.wisdom * 1.5);
                    const allChars = await models_1.FamilyCharacter.findAll();
                    for (const c of allChars) {
                        c.hpCurrent = Math.min(c.hpMax, c.hpCurrent + healAmount);
                        await c.save();
                    }
                    logMessage = `✨ **${char.name}** usou **Bênção da Luz** curando **+${healAmount} HP** para toda a família!`;
                }
                else if (data.actionType === 'DEFEND') {
                    logMessage = `🛡️ **${char.name}** assumiu postura defensiva com seu escudo!`;
                }
                const logs = Array.isArray(battle.battleLogs) ? [...battle.battleLogs] : [];
                logs.unshift(logMessage);
                if (logs.length > 20)
                    logs.pop();
                battle.battleLogs = logs;
                // Vitória
                if (battle.monsterHpCurrent <= 0) {
                    battle.status = 'VICTORY';
                    logs.unshift(`🏆 **VITÓRIA!** O chefe **${battle.monsterName}** foi derrotado! (+${battle.rewardXp} XP e +${battle.rewardGold} Ouro para o grupo!)`);
                    battle.battleLogs = logs;
                    await battle.save();
                    // Concede recompensas para os participantes ativos
                    const participantIds = Array.isArray(battle.currentTurnOrder)
                        ? battle.currentTurnOrder.filter(id => id !== 'MONSTER')
                        : [];
                    for (const pId of participantIds) {
                        const c = await models_1.FamilyCharacter.findByPk(pId);
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
                        battle,
                        rewardXp: battle.rewardXp,
                        rewardGold: battle.rewardGold,
                        message: `Vitória! A Masmorra foi conquistada!`,
                    });
                    return;
                }
                // Avançar o turno
                const turnOrder = Array.isArray(battle.currentTurnOrder) ? battle.currentTurnOrder : [];
                let nextIndex = (battle.activeTurnIndex + 1) % (turnOrder.length || 1);
                // Turno do Monstro se atingir a posição
                if (turnOrder[nextIndex] === 'MONSTER') {
                    const monsterDmg = Math.max(10, battle.monsterAttack + Math.floor(Math.random() * 10));
                    const heroIds = turnOrder.filter(id => id !== 'MONSTER');
                    const targetId = heroIds.length > 0 ? heroIds[Math.floor(Math.random() * heroIds.length)] : null;
                    if (targetId) {
                        const target = await models_1.FamilyCharacter.findByPk(targetId);
                        if (target) {
                            target.hpCurrent = Math.max(1, target.hpCurrent - monsterDmg);
                            await target.save();
                            logs.unshift(`🐲 **${battle.monsterName}** contra-atacou **${target.name}** causando **${monsterDmg}** de dano!`);
                        }
                    }
                    nextIndex = (nextIndex + 1) % turnOrder.length;
                }
                battle.activeTurnIndex = nextIndex;
                await battle.save();
                io.to('family_lira_room').emit('family:battle_updated', {
                    battle,
                    lastAction: logMessage,
                });
            }
            catch (err) {
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
    if (!ioInstance)
        return;
    const uniqueMembers = Array.from(onlineMembers.values());
    ioInstance.to('family_lira_room').emit('family:presence_update', uniqueMembers);
}
function notifyTaskApprovedRealTime(data) {
    if (!ioInstance)
        return;
    ioInstance.to('family_lira_room').emit('family:task_approved_event', {
        ...data,
        timestamp: new Date().toISOString(),
    });
}
