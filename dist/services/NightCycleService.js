"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NightCycleService = void 0;
const models_1 = require("../models");
class NightCycleService {
    /**
     * Converte minutos gastos na noite (0 = 20:00, 600 = 06:00) para string de hora formatada "HH:mm".
     */
    static formatNightHour(minutesSpent) {
        if (minutesSpent >= 600)
            return '06:00';
        const startHour = 20; // 20:00
        const totalMinutes = (startHour * 60) + Math.max(0, minutesSpent);
        const hour = Math.floor((totalMinutes / 60) % 24);
        const min = totalMinutes % 60;
        return `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
    }
    /**
     * Converte a duração de uma missão em minutos de jogo (Noite de Nocturna).
     * Dificuldade 1-3 (1 min real) -> 60 min de jogo (1 hora)
     * Dificuldade 4-5 (3 min real) -> 120 min de jogo (2 horas)
     * Dificuldade 6 (5 min real) -> 180 min de jogo (3 horas)
     * Dificuldade 7-9 (10 min real) -> 300 min de jogo (5 horas)
     * Dificuldade 10 (30 min real) -> 480 min de jogo (8 horas)
     */
    static getMissionInGameMinutes(baseDifficulty, durationMinutesReal) {
        if (baseDifficulty <= 3)
            return 60;
        if (baseDifficulty <= 5)
            return 120;
        if (baseDifficulty === 6)
            return 180;
        if (baseDifficulty <= 9)
            return 300;
        return 600; // Dificuldade 10: 600 min (10 horas completas, atingindo 06:00 e disparando o Amanhecer/Alerta Solar)
    }
    /**
     * Calcula o tempo de deslocamento entre dois bairros/locais no tempo de jogo.
     */
    static async calculateTransit(fromLocationId, toLocationId) {
        if (!toLocationId) {
            return {
                fromLocationName: 'Desconhecido',
                toLocationName: 'Desconhecido',
                transitMinutesInGame: 10,
                isSameDistrict: true,
                isSameZone: true
            };
        }
        if (!fromLocationId || fromLocationId === toLocationId) {
            const loc = await models_1.DefinitionLocation.findByPk(toLocationId);
            return {
                fromLocationName: loc?.name || 'Local Atual',
                toLocationName: loc?.name || 'Local de Destino',
                transitMinutesInGame: 10,
                isSameDistrict: true,
                isSameZone: true
            };
        }
        const fromLoc = await models_1.DefinitionLocation.findByPk(fromLocationId);
        const toLoc = await models_1.DefinitionLocation.findByPk(toLocationId);
        if (!fromLoc || !toLoc) {
            return {
                fromLocationName: fromLoc?.name || 'Local de Partida',
                toLocationName: toLoc?.name || 'Local de Destino',
                transitMinutesInGame: 20,
                isSameDistrict: false,
                isSameZone: false
            };
        }
        // Mesmo Bairro
        if (fromLoc.id === toLoc.id) {
            return {
                fromLocationName: fromLoc.name,
                toLocationName: toLoc.name,
                transitMinutesInGame: 10,
                isSameDistrict: true,
                isSameZone: true
            };
        }
        // Mesma Zona (mesmo parentId)
        if (fromLoc.parentId && toLoc.parentId && fromLoc.parentId === toLoc.parentId) {
            return {
                fromLocationName: fromLoc.name,
                toLocationName: toLoc.name,
                transitMinutesInGame: 20,
                isSameDistrict: false,
                isSameZone: true
            };
        }
        // Zonas Diferentes
        // Distâncias conhecidas entre Zonas em Nocturna (Centro, Oeste, Sul, Leste, Norte)
        return {
            fromLocationName: fromLoc.name,
            toLocationName: toLoc.name,
            transitMinutesInGame: 40,
            isSameDistrict: false,
            isSameZone: false
        };
    }
    /**
     * Obtém o status completo da noite e localização do personagem.
     */
    static async getNightStatus(characterId) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        // Se não tiver refúgio registrado na tabela character_havens, cria o refúgio inicial
        let havenLocation = null;
        let haven = await models_1.CharacterHaven.findOne({ where: { characterId } });
        if (!haven) {
            // Busca bairro padrão (Belenzinho, Sé ou primeiro level 3)
            let defaultLoc = await models_1.DefinitionLocation.findOne({ where: { name: 'Belenzinho', level: 3 } });
            if (!defaultLoc) {
                defaultLoc = await models_1.DefinitionLocation.findOne({ where: { level: 3 } });
            }
            if (defaultLoc) {
                haven = await models_1.CharacterHaven.create({
                    characterId,
                    locationId: defaultLoc.id,
                    name: 'Refúgio Pessoal Seguro',
                    securityLevel: 1,
                    luxuryLevel: 1
                });
                havenLocation = defaultLoc;
            }
        }
        else {
            havenLocation = await models_1.DefinitionLocation.findByPk(haven.locationId);
        }
        if (!character.currentLocationId) {
            if (havenLocation) {
                character.currentLocationId = havenLocation.id;
            }
            character.isRestingInHaven = true;
            await character.save();
        }
        const currentLoc = character.currentLocationId ? await models_1.DefinitionLocation.findByPk(character.currentLocationId) : null;
        const minutesSpent = character.nightMinutesSpent || 0;
        const isDaytime = minutesSpent >= 600; // 600 min = 10 horas úteis (06:00 da manhã)
        const hoursRemaining = Math.max(0, (600 - minutesSpent) / 60);
        const isSunHazardActive = isDaytime && !character.isRestingInHaven;
        return {
            nightMinutesSpent: minutesSpent,
            currentHourFormatted: this.formatNightHour(minutesSpent),
            hoursRemaining: Number(hoursRemaining.toFixed(1)),
            isDaytime,
            isRestingInHaven: character.isRestingInHaven,
            emergencyHavenType: character.emergencyHavenType || 'NONE',
            isSunHazardActive,
            currentLocation: currentLoc ? { id: currentLoc.id, name: currentLoc.name } : null,
            havenLocation: havenLocation ? { id: havenLocation.id, name: havenLocation.name } : null
        };
    }
    /**
     * Retorna o personagem com segurança para o seu Refúgio.
     */
    static async returnToHaven(characterId) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        const haven = await models_1.CharacterHaven.findOne({ where: { characterId } });
        if (haven && haven.locationId) {
            character.currentLocationId = haven.locationId;
        }
        // Se estiver retornando durante o dia / alerta solar (>= 600 min), aplica a penalidade tripla
        if ((character.nightMinutesSpent || 0) >= 600) {
            character.healthDamageAggravated = Math.min(character.healthMax, character.healthDamageAggravated + 1);
            character.hunger = Math.min(5, character.hunger + 1);
            character.willpowerDamageSuperficial = Math.min(character.willpowerMax, character.willpowerDamageSuperficial + 1);
        }
        character.isRestingInHaven = true;
        character.emergencyHavenType = 'NONE';
        await character.save();
        // Aborta automaticamente qualquer missão ativa em andamento
        const activeMissions = await models_1.CharacterActiveMission.findAll({
            where: { characterId, status: 'IN_PROGRESS' }
        });
        for (const m of activeMissions) {
            m.status = 'CANCELLED';
            await m.save();
        }
        return this.getNightStatus(characterId);
    }
    /**
     * Avança o tempo noturno do personagem e atualiza a localização física.
     */
    static async advanceNightTime(characterId, transitMinutes, missionMinutes, newLocationId) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        const totalMinutes = transitMinutes + missionMinutes;
        character.nightMinutesSpent = (character.nightMinutesSpent || 0) + totalMinutes;
        character.isRestingInHaven = false; // Personagem foi para a rua agir
        if (newLocationId) {
            character.currentLocationId = newLocationId;
        }
        const isSunHazardTriggered = character.nightMinutesSpent >= 600;
        await character.save();
        return {
            character,
            minutesAdded: totalMinutes,
            isSunHazardTriggered
        };
    }
    /**
     * Desperta o vampiro para uma nova noite (Rouse Check do V5).
     */
    static async awakenNewNight(characterId) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        // Rola Rouse Check (1d10, 6 ou mais é sucesso)
        const diceRoll = Math.floor(Math.random() * 10) + 1;
        const rouseSuccess = diceRoll >= 6;
        let hungerIncreased = false;
        if (!rouseSuccess) {
            if (character.hunger < 5) {
                character.hunger += 1;
                hungerIncreased = true;
            }
        }
        // Regra V5: Recupera 1 ponto de Força de Vontade Superficial por noite de sono
        let willpowerHealed = 0;
        if (character.willpowerDamageSuperficial > 0) {
            character.willpowerDamageSuperficial = Math.max(0, character.willpowerDamageSuperficial - 1);
            willpowerHealed = 1;
        }
        // Reseta o relógio noturno para as 20:00 (0 minutos gastos)
        character.nightMinutesSpent = 0;
        character.isRestingInHaven = true;
        character.emergencyHavenType = 'NONE';
        character.lastNightCycleDate = new Date();
        character.isAwake = true;
        await character.save();
        return {
            character,
            rouseSuccess,
            diceRoll,
            hungerIncreased,
            willpowerHealed
        };
    }
    /**
     * Aplica Dano Agravado Solar caso o vampiro esteja na rua após as 06:00.
     */
    static async applySunDamage(characterId) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        // Aplica 1 Dano Agravado de Vitalidade
        character.healthDamageAggravated = Math.min(character.healthMax, character.healthDamageAggravated + 1);
        // Checa se a vida toda foi consumida por dano agravado
        const isTorpor = character.healthDamageAggravated >= character.healthMax;
        await character.save();
        return {
            character,
            damageApplied: 1,
            isTorpor
        };
    }
    /**
     * Executa uma Ação de Abrigo de Emergência contra o Sol.
     */
    static async takeEmergencyShelter(characterId, shelterType) {
        const character = await models_1.CharacterVampire.findByPk(characterId, {
            include: [
                { model: models_1.CharacterVampireAttribute, include: [{ model: models_1.DefinitionAttribute }] },
                { model: models_1.CharacterVampireSkill, include: [{ model: models_1.DefinitionSkill }] },
                { model: models_1.CharacterVampireBackground, include: [{ model: models_1.DefinitionBackground }] }
            ]
        });
        if (!character)
            throw new Error('Personagem não encontrado');
        let haven = await models_1.CharacterHaven.findOne({ where: { characterId } });
        const havenLocationId = haven?.locationId || character.currentLocationId;
        if (shelterType === 'GO_HOME') {
            // Retorno ao refúgio: calcula trânsito até a casa
            const transit = await this.calculateTransit(character.currentLocationId, havenLocationId);
            // Dano solar no caminho: 1 dano agravado para cada 20 min de trânsito (mínimo 1)
            const damageTaken = Math.max(1, Math.floor(transit.transitMinutesInGame / 20));
            character.healthDamageAggravated = Math.min(character.healthMax, character.healthDamageAggravated + damageTaken);
            character.hunger = Math.min(5, character.hunger + 1);
            character.willpowerDamageSuperficial = Math.min(character.willpowerMax, character.willpowerDamageSuperficial + 1);
            character.currentLocationId = havenLocationId;
            character.isRestingInHaven = true;
            character.emergencyHavenType = 'NONE';
            await character.save();
            // Aborta missões ativas que o vampiro estivesse executando na rua
            const activeMissions = await models_1.CharacterActiveMission.findAll({
                where: { characterId, status: 'IN_PROGRESS' }
            });
            for (const m of activeMissions) {
                m.status = 'CANCELLED';
                await m.save();
            }
            return {
                success: true,
                message: `Fuga Desesperada ao Refúgio: Você correu pelas ruas sob o sol da manhã. Sofreu ${damageTaken} Dano Agravado, aumentou sua Fome (+1) pelo esforço e perdeu -1 Força de Vontade pelo pânico do Rötschreck!`,
                damageTaken,
                moneySpent: 0,
                character
            };
        }
        if (shelterType === 'BUY_MOTEL') {
            const motelCost = 400;
            if (character.money < motelCost) {
                return {
                    success: false,
                    message: `Dinheiro insuficiente! Você precisa de R$ ${motelCost} para alugar um quarto com blackout de emergência.`,
                    damageTaken: 0,
                    moneySpent: 0,
                    character
                };
            }
            character.money -= motelCost;
            character.isRestingInHaven = true;
            character.emergencyHavenType = 'MOTEL';
            await character.save();
            // Aborta missões ativas na rua
            const activeMissions = await models_1.CharacterActiveMission.findAll({
                where: { characterId, status: 'IN_PROGRESS' }
            });
            for (const m of activeMissions) {
                m.status = 'CANCELLED';
                await m.save();
            }
            return {
                success: true,
                message: `Você pagou R$ ${motelCost} em uma suíte fechada com cortinas grossas. Está protegido do sol até o anoitecer.`,
                damageTaken: 0,
                moneySpent: motelCost,
                character
            };
        }
        if (shelterType === 'BREACH_SEWER') {
            // Teste de Força + Ladroagem vs Dificuldade 6
            const getAttr = (name) => {
                const found = character.CharacterVampireAttributes?.find((a) => a.DefinitionAttribute?.name === name);
                return found ? found.value : 1;
            };
            const getSkill = (name) => {
                const found = character.CharacterVampireSkills?.find((a) => a.DefinitionSkill?.name === name);
                return found ? found.value : 0;
            };
            const dicePool = getAttr('Força') + getSkill('Ladroagem');
            let successes = 0;
            for (let i = 0; i < dicePool; i++) {
                const roll = Math.floor(Math.random() * 10) + 1;
                if (roll >= 6)
                    successes++;
            }
            if (successes > 0) {
                character.isRestingInHaven = true;
                character.emergencyHavenType = 'SEWER';
                await character.save();
                // Aborta missões ativas na rua
                const activeMissions = await models_1.CharacterActiveMission.findAll({
                    where: { characterId, status: 'IN_PROGRESS' }
                });
                for (const m of activeMissions) {
                    m.status = 'CANCELLED';
                    await m.save();
                }
                return {
                    success: true,
                    message: `Sucesso! Você arrancou o bueiro com força e escorregou para a escuridão úmida dos esgotos, a salvo do sol.`,
                    damageTaken: 0,
                    moneySpent: 0,
                    character
                };
            }
            else {
                // Falhou: queima sob o sol e toma 1 dano agravado
                character.healthDamageAggravated = Math.min(character.healthMax, character.healthDamageAggravated + 1);
                await character.save();
                return {
                    success: false,
                    message: `Falha! A tampa de ferro estava travada e os raios solares queimaram sua pele (+1 Dano Agravado). Tente novamente ou busque outra saída!`,
                    damageTaken: 1,
                    moneySpent: 0,
                    character
                };
            }
        }
        if (shelterType === 'ALLY_HAVEN') {
            // Busca se tem Aliados, Contatos ou Mentor
            const backgrounds = character.CharacterVampireBackgrounds || [];
            const hasAlly = backgrounds.some((b) => ['Aliados', 'Mentor', 'Contatos'].includes(b.DefinitionBackground?.name) && b.value > 0);
            if (!hasAlly) {
                return {
                    success: false,
                    message: `Você não possui Aliados ou Mentores influentes neste distrito para acolhê-lo durante o dia.`,
                    damageTaken: 0,
                    moneySpent: 0,
                    character
                };
            }
            character.isRestingInHaven = true;
            character.emergencyHavenType = 'ALLY';
            await character.save();
            // Aborta missões ativas na rua
            const activeMissions = await models_1.CharacterActiveMission.findAll({
                where: { characterId, status: 'IN_PROGRESS' }
            });
            for (const m of activeMissions) {
                m.status = 'CANCELLED';
                await m.save();
            }
            return {
                success: true,
                message: `Seu aliado abriu as portas do porão privativo. Você descansa seguro sob os cuidados de sua rede de contatos.`,
                damageTaken: 0,
                moneySpent: 0,
                character
            };
        }
        return {
            success: false,
            message: 'Tipo de abrigo inválido.',
            damageTaken: 0,
            moneySpent: 0,
            character
        };
    }
    /**
     * Aluga um quarto de hotel/motel de 1 a 5 estrelas.
     */
    static async bookHotel(characterId, stars) {
        const character = await models_1.CharacterVampire.findByPk(characterId);
        if (!character)
            throw new Error('Personagem não encontrado');
        const HOTEL_TIERS = {
            1: { name: 'Pensão "O Repouso das Sombras"', cost: 150, willpowerHeal: 1, hungerBonus: 0, desc: 'Quarto simples com cortinas velhas e tranca de metal.' },
            2: { name: 'Motel Neon Blackout', cost: 350, willpowerHeal: 2, hungerBonus: 0, desc: 'Persiana blackout reforçada, sem janelas para a avenida.' },
            3: { name: 'Grand Hotel Nocturna', cost: 800, willpowerHeal: 3, hungerBonus: 0, desc: 'Suíte executiva com isolamento acústico e serviço discreto.' },
            4: { name: 'Palace Boutique Hotel', cost: 1800, willpowerHeal: 4, hungerBonus: 0, desc: 'Suíte de luxo com cortinas automatizadas à prova de luz.' },
            5: { name: 'The Elysium Royal Suite', cost: 4000, willpowerHeal: 10, hungerBonus: 1, desc: 'Suíte presidencial blindada em cobertura, com cofre e bolsa de sangue O-negativo fresca.' }
        };
        const tier = HOTEL_TIERS[stars] || HOTEL_TIERS[2];
        if (character.money < tier.cost) {
            return {
                success: false,
                message: `Saldo insuficiente! Você tem R$ ${character.money} e o ${tier.name} custa R$ ${tier.cost}.`,
                hotelName: tier.name,
                moneySpent: 0,
                willpowerHealed: 0,
                hungerReduced: 0,
                character
            };
        }
        character.money -= tier.cost;
        character.isRestingInHaven = true;
        character.emergencyHavenType = 'MOTEL';
        // Cura Força de Vontade
        let healedWp = 0;
        if (tier.willpowerHeal > 0 && character.willpowerDamageSuperficial > 0) {
            healedWp = Math.min(character.willpowerDamageSuperficial, tier.willpowerHeal);
            character.willpowerDamageSuperficial -= healedWp;
        }
        // Bônus de Sangue (Suíte 5 estrelas)
        let hungerReduced = 0;
        if (tier.hungerBonus > 0 && character.hunger > 1) {
            character.hunger = Math.max(1, character.hunger - tier.hungerBonus);
            hungerReduced = tier.hungerBonus;
        }
        await character.save();
        // Aborta missões ativas na rua
        const activeMissions = await models_1.CharacterActiveMission.findAll({
            where: { characterId, status: 'IN_PROGRESS' }
        });
        for (const m of activeMissions) {
            m.status = 'CANCELLED';
            await m.save();
        }
        return {
            success: true,
            message: `Quarto reservado no ${tier.name}! Você está seguro contra os raios de sol.`,
            hotelName: tier.name,
            moneySpent: tier.cost,
            willpowerHealed: healedWp,
            hungerReduced,
            character
        };
    }
    /**
     * Caçada de emergência de ratos nos esgotos.
     */
    static async huntSewerRats(characterId) {
        const character = await models_1.CharacterVampire.findByPk(characterId, {
            include: [
                { model: models_1.CharacterVampireAttribute, include: [{ model: models_1.DefinitionAttribute }] },
                { model: models_1.CharacterVampireSkill, include: [{ model: models_1.DefinitionSkill }] }
            ]
        });
        if (!character)
            throw new Error('Personagem não encontrado');
        const getAttr = (name) => {
            const found = character.CharacterVampireAttributes?.find((a) => a.DefinitionAttribute?.name === name);
            return found ? found.value : 1;
        };
        const getSkill = (name) => {
            const found = character.CharacterVampireSkills?.find((a) => a.DefinitionSkill?.name === name);
            return found ? found.value : 0;
        };
        // Parada: Destreza + Furtividade
        const pool = Math.max(2, getAttr('Destreza') + getSkill('Furtividade'));
        const rolls = [];
        let successes = 0;
        for (let i = 0; i < pool; i++) {
            const roll = Math.floor(Math.random() * 10) + 1;
            rolls.push(roll);
            if (roll >= 6)
                successes++;
        }
        let hungerReduced = false;
        let msg = '';
        if (successes > 0) {
            // Regra V5: Sangue animal só sacia até Fome 4. Se Fome for 5, reduz para 4.
            if (character.hunger >= 5) {
                character.hunger = 4;
                hungerReduced = true;
                msg = 'Você capturou e drenou uma ninhada de ratos gordos no lodo. O sangue animal saciou o frenesi imediato (Fome reduziu para 4).';
            }
            else {
                msg = 'Você capturou alguns ratos, mas o sangue frio de roedores não é suficiente para saciar um vampiro com Fome menor que 5.';
            }
        }
        else {
            msg = 'Os ratos fugiram pelas fendas dos canos antes que você pudesse pegá-los.';
        }
        character.isRestingInHaven = true;
        character.emergencyHavenType = 'SEWER';
        await character.save();
        // Aborta missões ativas na rua
        const activeMissions = await models_1.CharacterActiveMission.findAll({
            where: { characterId, status: 'IN_PROGRESS' }
        });
        for (const m of activeMissions) {
            m.status = 'CANCELLED';
            await m.save();
        }
        return {
            success: successes > 0,
            message: msg,
            hungerReduced,
            diceRolls: rolls,
            successes,
            character
        };
    }
}
exports.NightCycleService = NightCycleService;
