import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Esferas e Níveis (MAGE)...');

  const spheresData = [
    {
      name: 'Correspondência',
      description: 'Domínio sobre as distâncias, localizações, teletransporte e a ilusão do espaço físico. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentir Espaço / Localização Exata' },
        { level: 2, name: 'Linha de Visão Distante' },
        { level: 3, name: 'Co-localidade Simples / Teletransporte de Objetos Pequenos' },
        { level: 4, name: 'Teletransporte Humano / Abrir Portais Geográficos' },
        { level: 5, name: 'Co-presença Total' },
      ]
    },
    {
      name: 'Entropia',
      description: 'Manipulação do azar, da probabilidade, da decomposição da matéria e do destino. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentir Probabilidade / Ver Falhas Estruturais' },
        { level: 2, name: 'Controlar o Azar / Alterar Probabilidades' },
        { level: 3, name: 'Decomposição da Matéria' },
        { level: 4, name: 'Atrofia da Vida' },
        { level: 5, name: 'Manipular o Destino / Controlar Linhas de Caos Social' },
      ]
    },
    {
      name: 'Forças',
      description: 'Controle sobre os elementos físicos dinâmicos: eletricidade, fogo, gravidade, som e luz. Foco: Físico / Mental.',
      levels: [
        { level: 1, name: 'Sentir Energias / Rastrear Sinais de Rede' },
        { level: 2, name: 'Redirecionar Forças' },
        { level: 3, name: 'Transmutar Forças / Criar Fogo ou Eletricidade Básica' },
        { level: 4, name: 'Controlar Forças Maiores' },
        { level: 5, name: 'Tempestades de Energia Coletiva' },
      ]
    },
    {
      name: 'Matéria',
      description: 'Manipulação de substâncias sólidas, líquidas e gasosas que não possuem vida. Foco: Físico.',
      levels: [
        { level: 1, name: 'Analisar Estrutura Atômica / Detectar Substâncias Ocultas' },
        { level: 2, name: 'Transmutar Forma da Matéria' },
        { level: 3, name: 'Alterar Propriedades' },
        { level: 4, name: 'Transmutar Elementos Complexos' },
        { level: 5, name: 'Criar Matéria Sólida que Desafia as Leis Físicas' },
      ]
    },
    {
      name: 'Mente',
      description: 'Leitura, controle, projeção e alteração da psique humana e sobrenatural. Foco: Social / Mental.',
      levels: [
        { level: 1, name: 'Sentir Emoções / Escudo Mental Básico' },
        { level: 2, name: 'Ler Pensamentos Superficiais / Impulsionar Emoções Básicas' },
        { level: 3, name: 'Projeção Psíquica / Ilusões Mentais Diretas' },
        { level: 4, name: 'Controlar a Vontade / Alterar Memórias de Longo Prazo' },
        { level: 5, name: 'Criar uma Mente Nova / Possessão Psíquica Completa' },
      ]
    },
    {
      name: 'Primórdio',
      description: 'Manipulação da energia mágica pura que molda o universo e alimenta a realidade. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentir Quintessência / Ver o Invisível Mágico' },
        { level: 2, name: 'Canalizar Energia / Encantar Armas e Objetos Mundanos' },
        { level: 3, name: 'Materializar Quintessência / Absorver Energia de Fontes Sagradas' },
        { level: 4, name: 'Criar Artefatos Mágicos Permanentes / Drenar Magia Alheia' },
        { level: 5, name: 'Alterar o Fluxo Universal / Destruir a Essência Mística de um Alvo' },
      ]
    },
    {
      name: 'Espírito',
      description: 'Interação e controle sobre o mundo espiritual (a Umbra) e as entidades que nele habitam. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentir o Véu / Ver Espíritos ao Redor' },
        { level: 2, name: 'Tocar Espíritos / Manipular Objetos Efêmeros' },
        { level: 3, name: 'Atravessar a Película' },
        { level: 4, name: 'Invocar e Prender Espíritos Poderosos / Selar Portais Espirituais' },
        { level: 5, name: 'Criar ou Destruir Reinos Espirituais Inteiros' },
      ]
    },
    {
      name: 'Tempo',
      description: 'Percepção, dilatação e manipulação da linha do tempo e da velocidade dos eventos. Foco: Mental.',
      levels: [
        { level: 1, name: 'Percepção Temporal Perfeita / Ver o Passado Recente' },
        { level: 2, name: 'Premonições do Futuro / Dilatação Temporal Leve' },
        { level: 3, name: 'Acelerar ou Desacelerar o Tempo' },
        { level: 4, name: 'Âncoras Temporais / Congelar um Alvo no Tempo' },
        { level: 5, name: 'Viagem Temporal Própria / Criar Bolhas de Tempo Isoladas' },
      ]
    },
    {
      name: 'Vida',
      description: 'Controle sobre organismos vivos, plantas, animais, corpos humanos e a própria cura. Foco: Físico.',
      levels: [
        { level: 1, name: 'Sentir Doenças e Saúde / Analisar DNA' },
        { level: 2, name: 'Curar Pequenas Feridas / Alterar Traços Físicos Leves' },
        { level: 3, name: 'Transformar Organismos Simples / Curar Danos Graves' },
        { level: 4, name: 'Transmutação Humana Completa' },
        { level: 5, name: 'Criar Vida Do Zero / Mutações Biológicas Permanentes' },
      ]
    }
  ];

  for (const sphere of spheresData) {
    // Como usamos o upsert, ele atualizará as definições se já existirem e não vai duplicar
    const powerDef = await prisma.powerDefinition.upsert({
      where: { name_gameStyle: { name: sphere.name, gameStyle: 'MAGE' } },
      update: { description: sphere.description, type: 'SPHERE' },
      create: {
        name: sphere.name,
        gameStyle: 'MAGE',
        type: 'SPHERE',
        description: sphere.description,
      },
    });

    for (const level of sphere.levels) {
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

  console.log(`✔ Foram inseridas/atualizadas ${spheresData.length} Esferas e todos os seus 5 níveis sem repetição!`);
  console.log('Seed de Esferas dos Magos concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
