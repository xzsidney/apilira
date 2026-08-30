"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFamilySocket = initFamilySocket;
exports.notifyTaskApprovedRealTime = notifyTaskApprovedRealTime;
const models_1 = require("../models");
let ioInstance = null;
const onlineMembers = new Map(); // socketId -> OnlineMember
let activePartyLobby = []; // Membros atualmente no grupo
function parseBattleJson(battle) {
    if (!battle)
        return battle;
    const b = battle.toJSON ? battle.toJSON() : { ...battle };
    if (typeof b.currentTurnOrder === 'string') {
        try {
            b.currentTurnOrder = JSON.parse(b.currentTurnOrder);
        }
        catch (e) {
            b.currentTurnOrder = [];
        }
    }
    if (typeof b.battleLogs === 'string') {
        try {
            b.battleLogs = JSON.parse(b.battleLogs);
        }
        catch (e) {
            b.battleLogs = [];
        }
    }
    return b;
}
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
        socket.on('family:send_party_invite', (data) => {
            io.to('family_lira_room').emit('family:party_invite_received', {
                leaderName: data.leaderName,
                leaderId: data.leaderId,
                monsterName: data.monsterName || 'O Golem da Bagunça',
                timestamp: new Date().toISOString(),
            });
        });
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
        socket.on('family:leave_party_lobby', (data) => {
            activePartyLobby = activePartyLobby.filter(m => m.characterId !== data.characterId);
            io.to('family_lira_room').emit('family:party_lobby_updated', activePartyLobby);
        });
        // Iniciar a Batalha (Solo ou com quem aceitou no Grupo!)
        socket.on('family:start_party_battle', async (data) => {
            try {
                const party = data.partyMembers && data.partyMembers.length > 0 ? data.partyMembers : activePartyLobby;
                const participantIds = party.map(p => p.characterId);
                // Turnos: Ordem dos Heróis do grupo + Turno do Monstro
                const turnOrder = [...participantIds, 'MONSTER'];
                // Escala a vida do monstro de acordo com o tamanho do grupo
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
                    battle.title = party.length === 1 ? '⚔️ Expedição Solo contra o Golem' : `⚔️ Incursão em Grupo (${party.length} Heróis)`;
                    battle.currentTurnOrder = turnOrder;
                    battle.monsterHpMax = monsterHp;
                    battle.monsterHpCurrent = monsterHp;
                    battle.activeTurnIndex = 0;
                    battle.status = 'IN_PROGRESS';
                    battle.battleLogs = [
                        `⚔️ Batalha iniciada com ${party.map(p => p.name).join(', ')}!`,
                    ];
                    await battle.save();
                }
                const allCharacters = await models_1.FamilyCharacter.findAll();
                io.to('family_lira_room').emit('family:battle_party_started', {
                    battle: parseBattleJson(battle),
                    party,
                    characters: allCharacters,
                });
            }
            catch (err) {
                console.error('[Socket.IO] Erro ao iniciar batalha em grupo/solo:', err);
            }
        });
        // Ação de Batalha em Tempo Real
        socket.on('family:execute_battle_action', async (data) => {
            try {
                const battle = await models_1.FamilyBattle.findByPk(data.battleId);
                const char = await models_1.FamilyCharacter.findByPk(data.characterId);
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
                    try {
                        turnOrder = JSON.parse(turnOrder);
                    }
                    catch (e) {
                        turnOrder = [];
                    }
                }
                if (!Array.isArray(turnOrder) || turnOrder.length === 0) {
                    turnOrder = [char.id, 'MONSTER'];
                }
                let logs = battle.battleLogs;
                if (typeof logs === 'string') {
                    try {
                        logs = JSON.parse(logs);
                    }
                    catch (e) {
                        logs = [];
                    }
                }
                if (!Array.isArray(logs))
                    logs = [];
                let damageDealt = 0;
                let healAmount = 0;
                let logMessage = '';
                if (data.skillId) {
                    const { FamilyClassSkill } = await Promise.resolve().then(() => __importStar(require('../models')));
                    const skill = await FamilyClassSkill.findByPk(data.skillId);
                    if (skill) {
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
                        }
                        else if (skill.effectType === 'HEAL_ALL') {
                            healAmount = skill.power;
                            const allChars = await models_1.FamilyCharacter.findAll();
                            for (const c of allChars) {
                                if (c.hpCurrent > 0) {
                                    c.hpCurrent = Math.min(c.hpMax, c.hpCurrent + healAmount);
                                    await c.save();
                                }
                            }
                            logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** curando **+${healAmount} HP** para toda a família!`;
                        }
                        else if (skill.effectType === 'SHIELD') {
                            logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** erguendo um escudo sagrado impenetrável!`;
                        }
                        else {
                            damageDealt = skill.power + Math.floor(Math.random() * 12);
                            battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
                            logMessage = `${skill.icon} **${char.name}** usou **${skill.name}** causando **${damageDealt}** de dano!`;
                        }
                    }
                }
                else if (data.actionType === 'ATTACK') {
                    damageDealt = Math.max(15, (char.strength * 2) + Math.floor(Math.random() * 10));
                    battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
                    logMessage = `🗡️ **${char.name}** atacou **${battle.monsterName}** causando **${damageDealt}** de dano!`;
                }
                else if (data.actionType === 'DEFEND') {
                    logMessage = `🛡️ **${char.name}** assumiu postura defensiva com seu escudo!`;
                }
                else {
                    damageDealt = Math.max(20, (char.wisdom * 2) + Math.floor(Math.random() * 10));
                    battle.monsterHpCurrent = Math.max(0, battle.monsterHpCurrent - damageDealt);
                    logMessage = `⚡ **${char.name}** desferiu um ataque especial causando **${damageDealt}** de dano!`;
                }
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
                    const participantIds = turnOrder.filter(id => id !== 'MONSTER');
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
                        battle: parseBattleJson(battle),
                        rewardXp: battle.rewardXp,
                        rewardGold: battle.rewardGold,
                        message: `Vitória! A Masmorra foi conquistada!`,
                    });
                    return;
                }
                // Avançar o turno
                let nextIndex = (battle.activeTurnIndex + 1) % turnOrder.length;
                // Turno do Monstro se atingir a posição
                if (turnOrder[nextIndex] === 'MONSTER') {
                    const monsterDmg = Math.max(12, battle.monsterAttack + Math.floor(Math.random() * 12));
                    const heroIds = turnOrder.filter(id => id !== 'MONSTER');
                    const targetId = heroIds.length > 0 ? heroIds[Math.floor(Math.random() * heroIds.length)] : char.id;
                    if (targetId) {
                        const target = await models_1.FamilyCharacter.findByPk(targetId);
                        if (target) {
                            const newHp = target.hpCurrent - monsterDmg;
                            if (newHp <= 0) {
                                target.hpCurrent = 0;
                                target.inInfirmaryUntil = new Date(Date.now() + 60 * 60 * 1000); // 1 hora de tempo real
                                await target.save();
                                logs.unshift(`🚑 **${target.name}** foi atingido por **${monsterDmg}** de dano, desmaiou (0 HP) e foi levado para a **Enfermaria do Reino**!`);
                                io.to('family_lira_room').emit('family:hero_knocked_out', {
                                    characterId: target.id,
                                    characterName: target.name,
                                    inInfirmaryUntil: target.inInfirmaryUntil,
                                });
                            }
                            else {
                                target.hpCurrent = newHp;
                                await target.save();
                                logs.unshift(`🐲 **${battle.monsterName}** contra-atacou **${target.name}** causando **${monsterDmg}** de dano!`);
                            }
                        }
                    }
                    nextIndex = (nextIndex + 1) % turnOrder.length;
                }
                battle.activeTurnIndex = nextIndex;
                battle.currentTurnOrder = turnOrder;
                await battle.save();
                const allCharacters = await models_1.FamilyCharacter.findAll();
                io.to('family_lira_room').emit('family:battle_updated', {
                    battle: parseBattleJson(battle),
                    lastAction: logMessage,
                    characters: allCharacters,
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
