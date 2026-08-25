import { 
  CharacterVampire, 
  DefinitionLocation, 
  CharacterHaven,
  CharacterActiveMission,
  CharacterVampireAttribute,
  DefinitionAttribute,
  CharacterVampireSkill,
  DefinitionSkill,
  CharacterVampireBackground,
  DefinitionBackground
} from '../models';
import { CharacterService } from './CharacterService';

export interface TransitCalculation {
  fromLocationName: string;
  toLocationName: string;
  transitMinutesInGame: number;
  isSameDistrict: boolean;
  isSameZone: boolean;
}

export interface NightStatusResponse {
  nightMinutesSpent: number; // 0 a 600
  currentHourFormatted: string; // Ex: "21:30"
  hoursRemaining: number; // Ex: 4.5
  isDaytime: boolean; // true se >= 600 (06:00)
  isRestingInHaven: boolean;
  emergencyHavenType: string;
  isSunHazardActive: boolean;
  currentLocation: {
    id: string;
    name: string;
    zoneName?: string;
  } | null;
  havenLocation: {
    id: string;
    name: string;
    zoneName?: string;
  } | null;
}

export class NightCycleService {
  /**
   * Converte minutos gastos na noite (0 = 20:00, 600 = 06:00) para string de hora formatada "HH:mm".
   */
  static formatNightHour(minutesSpent: number): string {
    if (minutesSpent >= 600) return '06:00';
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
  static getMissionInGameMinutes(baseDifficulty: number, durationMinutesReal: number): number {
    if (baseDifficulty <= 3) return 60;
    if (baseDifficulty <= 5) return 120;
    if (baseDifficulty === 6) return 180;
    if (baseDifficulty <= 9) return 300;
    return 480;
  }

  /**
   * Calcula o tempo de deslocamento entre dois bairros/locais no tempo de jogo.
   */
  static async calculateTransit(fromLocationId: string | null, toLocationId: string | null): Promise<TransitCalculation> {
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
      const loc = await DefinitionLocation.findByPk(toLocationId);
      return {
        fromLocationName: loc?.name || 'Local Atual',
        toLocationName: loc?.name || 'Local de Destino',
        transitMinutesInGame: 10,
        isSameDistrict: true,
        isSameZone: true
      };
    }

    const fromLoc = await DefinitionLocation.findByPk(fromLocationId);
    const toLoc = await DefinitionLocation.findByPk(toLocationId);

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
  static async getNightStatus(characterId: string): Promise<NightStatusResponse> {
    const character = await CharacterVampire.findByPk(characterId);
    if (!character) throw new Error('Personagem não encontrado');

    // Se não tiver refúgio registrado na tabela character_havens, cria o refúgio inicial
    let havenLocation = null;
    let haven = await CharacterHaven.findOne({ where: { characterId } });
    if (!haven) {
      // Busca bairro padrão (Belenzinho, Sé ou primeiro level 3)
      let defaultLoc = await DefinitionLocation.findOne({ where: { name: 'Belenzinho', level: 3 } });
      if (!defaultLoc) {
        defaultLoc = await DefinitionLocation.findOne({ where: { level: 3 } });
      }
      if (defaultLoc) {
        haven = await CharacterHaven.create({
          characterId,
          locationId: defaultLoc.id,
          name: 'Refúgio Pessoal Seguro',
          securityLevel: 1,
          luxuryLevel: 1
        } as any);
        havenLocation = defaultLoc;
      }
    } else {
      havenLocation = await DefinitionLocation.findByPk(haven.locationId);
    }

    if (!character.currentLocationId) {
      if (havenLocation) {
        character.currentLocationId = havenLocation.id;
      }
      character.isRestingInHaven = true;
      await character.save();
    }

    const currentLoc = character.currentLocationId ? await DefinitionLocation.findByPk(character.currentLocationId) : null;

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
  static async returnToHaven(characterId: string): Promise<NightStatusResponse> {
    const character = await CharacterVampire.findByPk(characterId);
    if (!character) throw new Error('Personagem não encontrado');

    const haven = await CharacterHaven.findOne({ where: { characterId } });
    if (haven && haven.locationId) {
      character.currentLocationId = haven.locationId;
    }
    character.isRestingInHaven = true;
    character.emergencyHavenType = 'NONE';
    await character.save();

    // Aborta missões ativas que o vampiro estivesse executando na rua
    const activeMissions = await CharacterActiveMission.findAll({
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
  static async advanceNightTime(
    characterId: string, 
    transitMinutes: number, 
    missionMinutes: number, 
    newLocationId?: string
  ): Promise<{ character: CharacterVampire; minutesAdded: number; isSunHazardTriggered: boolean }> {
    const character = await CharacterVampire.findByPk(characterId);
    if (!character) throw new Error('Personagem não encontrado');

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
  static async awakenNewNight(characterId: string): Promise<{ 
    character: CharacterVampire; 
    rouseSuccess: boolean; 
    diceRoll: number; 
    hungerIncreased: boolean;
    willpowerHealed: number;
  }> {
    const character = await CharacterVampire.findByPk(characterId);
    if (!character) throw new Error('Personagem não encontrado');

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
  static async applySunDamage(characterId: string): Promise<{ character: CharacterVampire; damageApplied: number; isTorpor: boolean }> {
    const character = await CharacterVampire.findByPk(characterId);
    if (!character) throw new Error('Personagem não encontrado');

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
  static async takeEmergencyShelter(
    characterId: string, 
    shelterType: 'GO_HOME' | 'BUY_MOTEL' | 'BREACH_SEWER' | 'ALLY_HAVEN'
  ): Promise<{ 
    success: boolean; 
    message: string; 
    damageTaken: number; 
    moneySpent: number; 
    character: CharacterVampire 
  }> {
    const character = await CharacterVampire.findByPk(characterId, {
      include: [
        { model: CharacterVampireAttribute, include: [{ model: DefinitionAttribute }] },
        { model: CharacterVampireSkill, include: [{ model: DefinitionSkill }] },
        { model: CharacterVampireBackground, include: [{ model: DefinitionBackground }] }
      ]
    });
    if (!character) throw new Error('Personagem não encontrado');

    let haven = await CharacterHaven.findOne({ where: { characterId } });
    const havenLocationId = haven?.locationId || character.currentLocationId;

    if (shelterType === 'GO_HOME') {
      // Retorno ao refúgio: calcula trânsito até a casa
      const transit = await this.calculateTransit(character.currentLocationId, havenLocationId);
      // Dano solar no caminho: 1 dano agravado para cada 20 min de trânsito
      const damageTaken = Math.max(1, Math.floor(transit.transitMinutesInGame / 20));
      character.healthDamageAggravated = Math.min(character.healthMax, character.healthDamageAggravated + damageTaken);
      character.currentLocationId = havenLocationId;
      character.isRestingInHaven = true;
      character.emergencyHavenType = 'NONE';
      await character.save();

      // Aborta missões ativas que o vampiro estivesse executando na rua
      const activeMissions = await CharacterActiveMission.findAll({
        where: { characterId, status: 'IN_PROGRESS' }
      });
      for (const m of activeMissions) {
        m.status = 'CANCELLED';
        await m.save();
      }

      return {
        success: true,
        message: `Você correu desesperadamente até o seu refúgio sob a luz do sol, sofrendo ${damageTaken} de Dano Agravado pela radiação solar. Operações na rua foram abortadas!`,
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
      const getAttr = (name: string) => {
        const found = (character as any).CharacterVampireAttributes?.find((a: any) => a.DefinitionAttribute?.name === name);
        return found ? found.value : 1;
      };
      const getSkill = (name: string) => {
        const found = (character as any).CharacterVampireSkills?.find((a: any) => a.DefinitionSkill?.name === name);
        return found ? found.value : 0;
      };

      const dicePool = getAttr('Força') + getSkill('Ladroagem');
      let successes = 0;
      for (let i = 0; i < dicePool; i++) {
        const roll = Math.floor(Math.random() * 10) + 1;
        if (roll >= 6) successes++;
      }

      if (successes > 0) {
        character.isRestingInHaven = true;
        character.emergencyHavenType = 'SEWER';
        await character.save();
        return {
          success: true,
          message: `Sucesso! Você arrancou o bueiro com força e escorregou para a escuridão úmida dos esgotos, a salvo do sol.`,
          damageTaken: 0,
          moneySpent: 0,
          character
        };
      } else {
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
      const backgrounds = (character as any).CharacterVampireBackgrounds || [];
      const hasAlly = backgrounds.some((b: any) => 
        ['Aliados', 'Mentor', 'Contatos'].includes(b.DefinitionBackground?.name) && b.value > 0
      );

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
}
