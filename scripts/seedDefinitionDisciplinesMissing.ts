import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionDiscipline, DefinitionDiscipline } from '../src/models/DefinitionDiscipline';
import { initDefinitionDisciplinePower, DefinitionDisciplinePower } from '../src/models/DefinitionDisciplinePower';

initDefinitionDiscipline(sequelize);
initDefinitionDisciplinePower(sequelize);

// Estabelecendo relacionamentos para o Seed
DefinitionDiscipline.hasMany(DefinitionDisciplinePower, { foreignKey: 'definitionDisciplineId' });
DefinitionDisciplinePower.belongsTo(DefinitionDiscipline, { foreignKey: 'definitionDisciplineId' });

const missingDisciplines = [
  {
    name: 'Animalismo',
    description: 'Comandar a Besta interior e controlar criaturas selvagens.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Sussurros Animais', level: 1, description: 'Comunicação verbal e empática básica com animais comuns.', costType: 'Livre', costAmount: 0, duration: 'Uma Cena', dicePool: 'Carisma + Animalismo', systemNotes: '' },
      { name: 'Sentido da Besta', level: 1, description: 'Permite sintonizar temporariamente os sentidos com uma criatura próxima.', costType: 'Livre', costAmount: 0, duration: 'Uma Cena', dicePool: 'Determinação + Animalismo', systemNotes: '' },
      { name: 'Acalmar a Besta', level: 2, description: 'Aplaca mentes agitadas de mortais ou atrasa o Frenesi de outros membros.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Imediato', dicePool: 'Carisma + Animalismo', systemNotes: '' },
      { name: 'Suco de Rato', level: 3, description: 'O sangue de pequenos animais passa a nutrir mais do que o normal.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: '' },
      { name: 'Comandar a Besta', level: 3, description: 'Dita ordens mentais e comportamentais diretas para animais.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Manipulação + Animalismo', systemNotes: '' },
      { name: 'Comunhão de Espíritos', level: 4, description: 'Possuir o corpo físico de um animal, controlando suas ações.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Manipulação + Animalismo', systemNotes: '' },
      { name: 'Peste Animal', level: 5, description: 'Convoca uma horda massiva de pragas urbanas (ratos, pombos, cães) para ataque.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: 'Carisma + Animalismo', systemNotes: '' },
    ]
  },
  {
    name: 'Proteano / Metamorfose',
    description: 'Moldar a própria estrutura física, manifestar armas biológicas e assumir formas selvagens.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Olhos da Besta', level: 1, description: 'Permite enxergar perfeitamente na ausência total de luz com olhos vermelhos brilhantes.', costType: 'Livre', costAmount: 0, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Garras Ferais', level: 2, description: 'Manifesta garras negras alongadas nas pontas dos dedos que causam ferimentos agravados.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Fusão com a Terra', level: 3, description: 'Permite afundar e mesclar-se ao solo firme para descansar protegido do sol durante o dia.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Dia', dicePool: '-', systemNotes: '' },
      { name: 'Forma de Névoa', level: 4, description: 'Transforma o corpo material em uma nuvem gasosa capaz de passar por frestas e trancas.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Forma de Fera', level: 5, description: 'Metamorfose total em um lobo de caça ou em um morcego grande de dispersão.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
    ]
  },
  {
    name: 'Feitiçaria de Sangue',
    description: 'Manipulação mística da vitae para execução de efeitos alquímicos e rituais arcanos.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Gosto pelo Sangue', level: 1, description: 'Permite descobrir o Clã, Geração e Potência de Sangue provando apenas uma gota de vitae.', costType: 'Livre', costAmount: 0, duration: 'Instantâneo', dicePool: 'Raciocínio + Feitiçaria de Sangue', systemNotes: '' },
      { name: 'Sangue Corrosivo', level: 2, description: 'Transforma a própria vitae em um ácido altamente corrosivo ao toque.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Caldeirão de Sangue', level: 3, description: 'Superaquece o sangue nas veias de uma vítima à distância, causando danos internos gravíssimos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Turno', dicePool: 'Determinação + Feitiçaria de Sangue', systemNotes: '' },
      { name: 'Furto de Vitae', level: 4, description: 'Extrai o sangue do corpo da vítima pelo ar, puxando-o até a boca do conjurador.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Um Turno', dicePool: 'Raciocínio + Feitiçaria de Sangue', systemNotes: '' },
      { name: 'Maldição do Sangue Ralo', level: 5, description: 'Altera temporariamente as propriedades místicas do sangue de um rival antigo, enfraquecendo-o.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Noite Inteira', dicePool: 'Inteligência + Feitiçaria de Sangue', systemNotes: '' },
    ]
  },
  {
    name: 'Esquecimento',
    description: 'Manipulação das sombras físicas, necromancia e emanações vindas do Abismo.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Braços de Sombra', level: 1, description: 'Conjura tentáculos de escuridão sólida a partir das sombras locais para agarrar ou açoitar inimigos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Raciocínio + Esquecimento', systemNotes: '' },
      { name: 'Mortalha do Abismo', level: 2, description: 'Gera uma névoa sufocante de escuridão total que anula luzes e prejudica a respiração de mortais.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Inteligência + Esquecimento', systemNotes: '' },
      { name: 'Caminhar nas Sombras', level: 3, description: 'Permite entrar em uma massa de sombra e emergir instantaneamente em outra no mesmo bairro.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Instantâneo', dicePool: '-', systemNotes: '' },
      { name: 'Invocar o Fantasma', level: 4, description: 'Arrasta e prende temporariamente o espectro de um morto para interrogatórios místico-necromânticos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: 'Determinação + Esquecimento', systemNotes: '' },
      { name: 'Estatística da Morte', level: 5, description: 'Transforma a anatomia do usuário em uma projeção sombria intangível e espectral.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
    ]
  },
  {
    name: 'Alquimia do Sangue Ralo',
    description: 'Exclusiva para Sangues-Ralos (Potência 0). Destilação de sangue, emoções e químicos mundanos.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Sondar Sangue', level: 1, description: 'Descobre a ressonância exata de uma presa próxima sem a necessidade de contato físico.', costType: 'Livre', costAmount: 0, duration: 'Instantâneo', dicePool: '-', systemNotes: '' },
      { name: 'Fórmula Espelho', level: 1, description: 'Replica sinteticamente qualquer poder de nível 1 pertencente a uma Disciplina padrão.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Injetar Habilidade', level: 2, description: 'Concede temporariamente 1 ponto em uma Perícia que o personagem possua valor zerado.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Mente Enevoada', level: 2, description: 'Gás destilado volátil que apaga memórias recentes de qualquer um que inalar o composto.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Instantâneo', dicePool: '-', systemNotes: '' },
      { name: 'Desviar da Lâmina', level: 3, description: 'Torna a derme emborrachada, mitigando danos recebidos por impactos de armas brancas.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Fórmula Mutante', level: 3, description: 'Replica sinteticamente um poder de nível 2 ou 3 pertencente a uma Disciplina padrão.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Fuga de Gás', level: 4, description: 'Dissolve o próprio corpo em uma fumaça altamente cáustica e defensiva para escapar de cercos.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'Despertar o Sangue', level: 5, description: 'Elixir lendário que concede temporariamente o status de Potência de Sangue 1 e um Clã real.', costType: 'Custo em Sangue', costAmount: 3, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
    ]
  },
  {
    name: 'Sanguinitária',
    description: 'Sintonização neural, compartilhamento de recursos místico-vitais e vínculos coletivos de bando.',
    gameStyle: 'VAMPIRE',
    powers: [
      { name: 'Sintonia do Círculo', level: 1, description: 'Permite monitorar passivamente a geolocalização e os níveis exatos de Fome dos aliados do bando.', costType: 'Livre', costAmount: 0, duration: 'Passivo', dicePool: '-', systemNotes: '' },
      { name: 'Conforto Partilhado', level: 2, description: 'Transfere pontos de Força de Vontade do usuário para estabilizar a saúde mental de um aliado.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Instantâneo', dicePool: '-', systemNotes: '' },
      { name: 'Empréstimo de Vitae', level: 3, description: 'Transfere níveis de Fome/Saciedade através do toque, alimentando um aliado debilitado.', costType: 'Livre', costAmount: 0, duration: 'Instantâneo', dicePool: '-', systemNotes: '' },
      { name: 'Mente de Colmeia', level: 4, description: 'Sintoniza os reflexos do grupo. O bando compartilha a percepção visual e sensorial em tempo real.', costType: 'Checagem de Fome', costAmount: 1, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
      { name: 'União da Besta', level: 5, description: 'Permite que o bando una dados de resistência contra o Frenesi. O sucesso de um auxilia a conter os outros.', costType: 'Checagem de Fome', costAmount: 2, duration: 'Uma Cena', dicePool: '-', systemNotes: '' },
    ]
  }
];

async function seed() {
  try {
    console.log('Populando Disciplinas ausentes...');
    
    for (const disc of missingDisciplines) {
      // Cria a disciplina principal
      const [disciplineModel] = await DefinitionDiscipline.findOrCreate({
        where: { name: disc.name },
        defaults: {
          name: disc.name,
          description: disc.description,
          gameStyle: disc.gameStyle as any
        }
      });

      // Cria os poderes atrelados
      for (const power of disc.powers) {
        await DefinitionDisciplinePower.findOrCreate({
          where: { 
            definitionDisciplineId: disciplineModel.id,
            name: power.name 
          },
          defaults: {
            definitionDisciplineId: disciplineModel.id,
            name: power.name,
            level: power.level,
            description: power.description,
            costType: power.costType,
            costAmount: power.costAmount,
            duration: power.duration,
            dicePool: power.dicePool,
            systemNotes: power.systemNotes,
            gameStyle: disc.gameStyle as any
          }
        });
      }
    }

    // Amálgamas
    const obfuscate = await DefinitionDiscipline.findOne({ where: { name: 'Ofuscação' } });
    if (obfuscate) {
        await DefinitionDisciplinePower.findOrCreate({
            where: { definitionDisciplineId: obfuscate.id, name: 'Quimerismo' },
            defaults: {
                definitionDisciplineId: obfuscate.id,
                name: 'Quimerismo',
                level: 2,
                description: 'Cria ilusões visuais e auditivas breves que enganam os sentidos.',
                costType: 'Checagem de Fome',
                costAmount: 1,
                duration: 'Um Turno',
                dicePool: '-',
                systemNotes: 'Requer Presença 1. Amálgama de Ofuscação.',
                gameStyle: 'VAMPIRE'
            }
        });
    }

    const protean = await DefinitionDiscipline.findOne({ where: { name: 'Proteano / Metamorfose' } });
    if (protean) {
        await DefinitionDisciplinePower.findOrCreate({
            where: { definitionDisciplineId: protean.id, name: 'Vicissitude' },
            defaults: {
                definitionDisciplineId: protean.id,
                name: 'Vicissitude',
                level: 2,
                description: 'Altera fisicamente ossos, pele e músculos do próprio usuário ou de terceiros sob toque.',
                costType: 'Checagem de Fome',
                costAmount: 1,
                duration: 'Permanente',
                dicePool: 'Inteligência + Medicina',
                systemNotes: 'Requer Potência 2. Amálgama de Metamorfose.',
                gameStyle: 'VAMPIRE'
            }
        });
    }

    console.log(`✅ Novas disciplinas e amálgamas populadas com sucesso!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
