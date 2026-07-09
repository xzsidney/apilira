import fs from 'fs';
import path from 'path';
import { sequelize } from './models';
import { Character } from './models/Character';
import { VampireClaDefinition } from './models/VampireClaDefinition';
import { WerewolfTribeDefinition } from './models/WerewolfTribeDefinition';
import { MageTraditionDefinition } from './models/MageTraditionDefinition';
import { HunterCreedDefinition } from './models/HunterCreedDefinition';
import { AttributeDefinition } from './models/AttributeDefinition';
import { SkillDefinition } from './models/SkillDefinition';
import { StatusDefinition } from './models/StatusDefinition';
import { CharacterAttribute } from './models/CharacterAttribute';
import { CharacterSkill } from './models/CharacterSkill';
import { CharacterStatus } from './models/CharacterStatus';
import { GameStyle } from './types/enums';

const USER_ID = 'cf1cc44d-11bf-41f6-b620-5c6c1a0fc977';
const DOC_PATH = path.join(__dirname, '../../../documentos/personagem');

// Função auxiliar para rodar arquivos JS como módulo e extrair o array
function loadCharactersFile(filename: string, arrayName: string): any[] {
  try {
    const filePath = path.join(DOC_PATH, filename);
    const content = fs.readFileSync(filePath, 'utf-8');
    // Gambiarra segura para extrair a constante do JS sem precisar de export
    const script = content + `\nreturn ${arrayName};`;
    const getChars = new Function(script);
    return getChars();
  } catch (error) {
    console.error(`Erro ao carregar ${filename}:`, error);
    return [];
  }
}

async function getOrCreateDefinition(Model: any, name: string, extraDefaults: any = {}) {
  // Try exact match
  let record = await Model.findOne({ where: { name } });
  if (!record) {
    console.log(`Criando nova definição: ${name} em ${Model.name}`);
    record = await Model.create({ name, description: 'Gerado automaticamente', ...extraDefaults });
  }
  return record.id;
}

async function seedVampires() {
  const chars = loadCharactersFile('characters.js', 'CHARACTERS');
  console.log(`Encontrados ${chars.length} Vampiros.`);

  for (const c of chars) {
    const claId = await getOrCreateDefinition(VampireClaDefinition, c.cla || 'Desconhecido', {
      nickname: 'TBD',
      sectAlignment: c.seita || 'TBD',
      mainDisciplines: 'TBD',
      weaknessName: c.fraqueza?.nome || 'TBD',
      weaknessDescription: c.fraqueza?.descricao || 'TBD'
    });
    
    const charRecord = await Character.create({
      name: c.nome,
      gameStyle: GameStyle.VAMPIRE,
      userId: USER_ID,
      vampireClaId: claId,
      concept: c.conceito,
      nature: c.natureza,
      demeanor: c.comportamento,
      history: c.historico,
      roleplayHints: c.dicas,
      health: 7,
      maxHealth: 7,
      willpower: c.status?.forca_de_vontade || 1,
      maxWillpower: 10,
      energy: c.status?.pontos_de_sangue || 10,
      maxEnergy: 10,
      avatarUrl: c.retrato,
      isNpc: true,
      isTemplate: true
    });

    // Atributos
    if (c.atributos) {
      for (const cat of ['fisicos', 'sociais', 'mentais']) {
        if (c.atributos[cat]) {
          for (const [attrName, val] of Object.entries(c.atributos[cat])) {
            const attrId = await getOrCreateDefinition(AttributeDefinition, attrName, { type: cat.toUpperCase() });
            await CharacterAttribute.create({ characterId: charRecord.id, attributeId: attrId, value: val as number });
          }
        }
      }
    }

    // Perícias
    if (c.habilidades) {
      for (const cat of ['talentos', 'pericias', 'conhecimentos']) {
        if (c.habilidades[cat]) {
          for (const [skillName, val] of Object.entries(c.habilidades[cat])) {
            const skillId = await getOrCreateDefinition(SkillDefinition, skillName, { type: cat.toUpperCase() });
            await CharacterSkill.create({ characterId: charRecord.id, skillId: skillId, value: val as number });
          }
        }
      }
    }

    // Status: Humanidade
    if (c.status?.humanidade) {
      const humId = await getOrCreateDefinition(StatusDefinition, 'Humanidade');
      await CharacterStatus.create({ characterId: charRecord.id, statusId: humId, value: c.status.humanidade });
    }

    console.log(`Vampiro inserido: ${c.nome}`);
  }
}

async function seedWerewolves() {
  const chars = loadCharactersFile('characters_lobo.js', 'CHARACTERS_LOBO');
  console.log(`Encontrados ${chars.length} Lobisomens.`);

  for (const c of chars) {
    const basic = c.informacoes_basicas || {};
    const tribeId = await getOrCreateDefinition(WerewolfTribeDefinition, basic.tribo || 'Desconhecido', {
      englishName: 'TBD',
      nationAlignment: 'TBD',
      psychologicalFlawName: 'TBD',
      psychologicalFlawDescription: c.interdicao_da_tribo?.descricao || 'TBD',
      tribeFlaw: c.interdicao_da_tribo?.descricao || 'TBD',
      mainGifts: 'TBD',
      initialRenown: 'TBD'
    });
    
    const charRecord = await Character.create({
      name: basic.nome || 'Lobisomem Desconhecido',
      gameStyle: GameStyle.WEREWOLF,
      userId: USER_ID,
      werewolfTribeId: tribeId,
      concept: basic.conceito,
      history: c.historico?.resumo,
      roleplayHints: c.historico?.dicas_de_interpretacao,
      health: 7,
      maxHealth: 7,
      willpower: c.status_garou?.forca_de_vontade || 1,
      maxWillpower: 10,
      energy: c.status_garou?.furia_inicial || 1,
      maxEnergy: 10,
      avatarUrl: c.retrato,
      isNpc: true,
      isTemplate: true
    });

    if (c.atributos) {
      for (const cat of ['fisicos', 'sociais', 'mentais']) {
        if (c.atributos[cat]) {
          for (const [attrName, val] of Object.entries(c.atributos[cat])) {
            const attrId = await getOrCreateDefinition(AttributeDefinition, attrName, { type: cat.toUpperCase() });
            await CharacterAttribute.create({ characterId: charRecord.id, attributeId: attrId, value: val as number });
          }
        }
      }
    }

    if (c.status_garou?.gnose) {
      const id = await getOrCreateDefinition(StatusDefinition, 'Gnose');
      await CharacterStatus.create({ characterId: charRecord.id, statusId: id, value: c.status_garou.gnose });
    }

    console.log(`Lobisomem inserido: ${charRecord.name}`);
  }
}

async function seedMages() {
  const chars = loadCharactersFile('characters_mago.js', 'CHARACTERS_MAGO');
  console.log(`Encontrados ${chars.length} Magos.`);

  for (const c of chars) {
    const basic = c.informacoes_basicas || {};
    const tradId = await getOrCreateDefinition(MageTraditionDefinition, basic.afiliacao || 'Desconhecido', {
      englishName: 'TBD',
      affinitySphere: 'TBD',
      focusInstruments: 'TBD',
      paradigmFlawName: 'TBD',
      paradigmFlawDescription: 'TBD'
    });
    
    const charRecord = await Character.create({
      name: basic.nome || 'Mago Desconhecido',
      gameStyle: GameStyle.MAGE,
      userId: USER_ID,
      mageTraditionId: tradId,
      concept: basic.conceito,
      nature: basic.natureza,
      demeanor: basic.comportamento,
      health: 7,
      maxHealth: 7,
      willpower: c.status_mago?.forca_de_vontade || 1,
      maxWillpower: 10,
      energy: c.status_mago?.quintessencia || 1,
      maxEnergy: 10,
      avatarUrl: c.retrato,
      isNpc: true,
      isTemplate: true
    });

    if (c.atributos) {
      for (const cat of Object.keys(c.atributos)) {
        for (const [attrName, val] of Object.entries(c.atributos[cat] as Record<string, number>)) {
          const attrId = await getOrCreateDefinition(AttributeDefinition, attrName, { type: cat.toUpperCase() });
          await CharacterAttribute.create({ characterId: charRecord.id, attributeId: attrId, value: val });
        }
      }
    }

    if (c.habilidades) {
      for (const cat of Object.keys(c.habilidades)) {
        for (const [skillName, val] of Object.entries(c.habilidades[cat] as Record<string, number>)) {
          const skillId = await getOrCreateDefinition(SkillDefinition, skillName, { type: cat.toUpperCase() });
          await CharacterSkill.create({ characterId: charRecord.id, skillId: skillId, value: val });
        }
      }
    }

    if (c.status_mago?.arete) {
      const id = await getOrCreateDefinition(StatusDefinition, 'Arete');
      await CharacterStatus.create({ characterId: charRecord.id, statusId: id, value: c.status_mago.arete });
    }

    console.log(`Mago inserido: ${charRecord.name}`);
  }
}

async function seedHunters() {
  const chars = loadCharactersFile('characters_cacador.js', 'CHARACTERS_CACADOR');
  console.log(`Encontrados ${chars.length} Caçadores.`);

  for (const c of chars) {
    const basic = c.informacoes_basicas || {};
    const creedId = await getOrCreateDefinition(HunterCreedDefinition, basic.credo || 'Desconhecido', {
      englishName: 'TBD',
      mainEdges: 'TBD',
      afflictionTriggerName: 'TBD',
      afflictionTriggerDescription: 'TBD'
    });
    
    const charRecord = await Character.create({
      name: basic.nome || 'Caçador Desconhecido',
      gameStyle: GameStyle.HUNTER,
      userId: USER_ID,
      hunterCreedId: creedId,
      concept: basic.conceito,
      health: 7,
      maxHealth: 7,
      willpower: c.status_cacador?.forca_de_vontade || 1,
      maxWillpower: 10,
      energy: c.status_cacador?.conviccao || 1,
      maxEnergy: 10,
      avatarUrl: c.retrato,
      isNpc: true,
      isTemplate: true
    });

    if (c.atributos) {
      for (const cat of Object.keys(c.atributos)) {
        for (const [attrName, val] of Object.entries(c.atributos[cat] as Record<string, number>)) {
          const attrId = await getOrCreateDefinition(AttributeDefinition, attrName, { type: cat.toUpperCase() });
          await CharacterAttribute.create({ characterId: charRecord.id, attributeId: attrId, value: val });
        }
      }
    }

    if (c.habilidades) {
      for (const cat of Object.keys(c.habilidades)) {
        for (const [skillName, val] of Object.entries(c.habilidades[cat] as Record<string, number>)) {
          const skillId = await getOrCreateDefinition(SkillDefinition, skillName, { type: cat.toUpperCase() });
          await CharacterSkill.create({ characterId: charRecord.id, skillId: skillId, value: val });
        }
      }
    }

    console.log(`Caçador inserido: ${charRecord.name}`);
  }
}

async function runSeed() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao banco para Seed.');
    // Force sync models
    await sequelize.sync({ alter: false }); 
    
    await seedVampires();
    await seedWerewolves();
    await seedMages();
    await seedHunters();

    console.log('Seed Finalizado!');
    process.exit(0);
  } catch (error) {
    console.error('Erro no seed:', error);
    process.exit(1);
  }
}

runSeed();
