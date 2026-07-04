import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Dons e Níveis (WEREWOLF)...');

  const giftsData = [
    {
      name: 'Dons do Augúrio: Ahroun',
      description: 'Dons voltados para o combate direto, destruição da Wyrm e liderança em batalha. Foco: Físico.',
      levels: [
        { level: 1, name: 'Garras de Navalha / Sentir a Prata' },
        { level: 2, name: 'Escudo de Fúria / Espírito do Combate' },
        { level: 3, name: 'Coração de Vidro / Toque de Prata' },
        { level: 4, name: 'Golpe Dilacerante / Pele de Diamante' },
        { level: 5, name: 'Fúria de Gaia / Golpe do Apocalipse' },
      ]
    },
    {
      name: 'Dons do Augúrio: Philodox',
      description: 'Dons focados na aplicação das leis da Litania, verdade, ordem, liderança e resolução de disputas. Foco: Mental / Social.',
      levels: [
        { level: 1, name: 'Sabor da Verdade / Resistência à Dor' },
        { level: 2, name: 'Mandato do Rei / Sentir Linhas de Força' },
        { level: 3, name: 'Elo de Sangue / Olhar da Verdade' },
        { level: 4, name: 'Julgamento de Gaia / Elo Mental' },
        { level: 5, name: 'Geas (Impor uma missão mágica irrecusável) / Voz da Litania' },
      ]
    },
    {
      name: 'Dons do Augúrio: Galliard',
      description: 'Dons que manipulam emoções, inspiram aliados, preservam as lendas e usam a comunicação espiritual. Foco: Social.',
      levels: [
        { level: 1, name: 'Chamado Além da Névoa / Voz do Sentimento' },
        { level: 2, name: 'Distorcer Narrativa / Uivo do Lobo Caçador' },
        { level: 3, name: 'Olhar Paralisante / Canto de Guerra' },
        { level: 4, name: 'Presença Inspiradora / Sonho Compartilhado' },
        { level: 5, name: 'Uivo do Apocalipse / Canção da Criação' },
      ]
    },
    {
      name: 'Dons do Augúrio: Theurge',
      description: 'Dons voltados para a interação profunda com a Umbra, espíritos, rituais e cura. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentir Espíritos / Falar com Espíritos' },
        { level: 2, name: 'Comando Espiritual / Visão da Umbra' },
        { level: 3, name: 'Tecelão do Véu / Exorcismo' },
        { level: 4, name: 'Prender o Espírito / Tecelagem de Quintessência Metafísica' },
        { level: 5, name: 'Portal da Umbra / Invocar Avatar de Gaia' },
      ]
    },
    {
      name: 'Dons do Augúrio: Ragabash',
      description: 'Dons de furtividade, trapaça, subversão e questionamento das regras sociais e físicas. Foco: Físico / Mental.',
      levels: [
        { level: 1, name: 'Silêncio Absoluto / Desviar Olhar' },
        { level: 2, name: 'Passo Falso / Sombra Rastejante' },
        { level: 3, name: 'Mentira Perfeita / Abrir Fechaduras com a Mente' },
        { level: 4, name: 'Roubar o Dom / Desaparecimento Urbano' },
        { level: 5, name: 'Caos Completo / Rir da Morte' },
      ]
    },
    {
      name: 'Dons Universais da Cidade',
      description: 'Dons que todo lobisomem urbano em São Paulo pode aprender para lidar com a infraestrutura e a pobreza. Foco: Misto.',
      levels: [
        { level: 1, name: 'Sintonizar Tecnologia / Farejar o Lixo' },
        { level: 2, name: 'Controlar Máquinas Simples / Sobrevivência das Ruas' },
        { level: 3, name: 'Hackear o Consenso / Invocar Espírito do Asfalto' },
        { level: 4, name: 'Sobrecarga de Rede / Camuflagem entre a Massa' },
        { level: 5, name: 'Dominar a Infraestrutura Urbana / Maldição da Sucata' },
      ]
    }
  ];

  for (const gift of giftsData) {
    // 1. Criar ou atualizar a PowerDefinition (Dom)
    const powerDef = await prisma.powerDefinition.upsert({
      where: { name_gameStyle: { name: gift.name, gameStyle: 'WEREWOLF' } },
      update: { description: gift.description, type: 'GIFT' },
      create: {
        name: gift.name,
        gameStyle: 'WEREWOLF',
        type: 'GIFT',
        description: gift.description,
      },
    });

    // 2. Criar ou atualizar os PowerLevelDefinitions (Níveis 1 a 5)
    for (const level of gift.levels) {
      await prisma.powerLevelDefinition.upsert({
        where: {
          powerDefinitionId_level_name: {
            powerDefinitionId: powerDef.id,
            level: level.level,
            name: level.name,
          }
        },
        update: {},
        create: {
          powerDefinitionId: powerDef.id,
          level: level.level,
          name: level.name,
        }
      });
    }
  }

  console.log(`✔ Foram inseridos ${giftsData.length} categorias de Dons e todos os seus 5 níveis!`);
  console.log('Seed de Dons dos Garou concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
