import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando o Seed de Disciplinas e Níveis (Powers)...');

  const disciplinesData = [
    {
      name: 'Animalismo',
      description: 'Habilidade de se conectar, dominar e falar com a fauna urbana e a Besta interior de outros. Foco: Mental / Social.',
      levels: [
        { level: 1, name: 'Sentir a Besta / Vínculo de Sangue com Animais' },
        { level: 2, name: 'Conversar com Animais' },
        { level: 3, name: 'Acalmar a Besta / Dominar o Rebanho' },
        { level: 4, name: 'Atrair a Praga' },
        { level: 5, name: 'Possuir o Animal / Lançar a Besta' },
      ]
    },
    {
      name: 'Auspício',
      description: 'Sentidos sobrenaturais aguçados, percepção da aura e habilidades de ler pensamentos. Foco: Mental.',
      levels: [
        { level: 1, name: 'Sentidos Aguçados / Percepção de Aura' },
        { level: 2, name: 'Premonição' },
        { level: 3, name: 'Escanear a Mente / Vidência' },
        { level: 4, name: 'Toque do Espírito' },
        { level: 5, name: 'Projeção Psíquica' },
      ]
    },
    {
      name: 'Rapidez',
      description: 'Velocidade e reflexos sobrenaturais que desafiam as leis da física. Foco: Físico.',
      levels: [
        { level: 1, name: 'Reflexos Rápidos / Pés Ligeiros' },
        { level: 2, name: 'Esquiva Sobrenatural' },
        { level: 3, name: 'Piscar (Mover-se tão rápido que parece teletransporte visual)' },
        { level: 4, name: 'Agilidade Perfeita' },
        { level: 5, name: 'Estouro de Velocidade (Múltiplas ações)' },
      ]
    },
    {
      name: 'Dominação',
      description: 'A capacidade de quebrar a força de vontade de uma vítima e impor comandos diretos. Foco: Mental / Social.',
      levels: [
        { level: 1, name: 'Comando Vermelho / Hipnotizar' },
        { level: 2, name: 'Esquecimento (Apagar memórias recentes)' },
        { level: 3, name: 'Comando Racional / Deitar a Mente' },
        { level: 4, name: 'Condicionamento Crônico' },
        { level: 5, name: 'Possessão de Almas (Controlar corpos humanos)' },
      ]
    },
    {
      name: 'Fortitude',
      description: 'Resistência sobrenatural que permite ao vampiro ignorar tiros, quedas e até mitigar dano de fogo e luz solar. Foco: Físico.',
      levels: [
        { level: 1, name: 'Resiliência Física / Mente Inabalável' },
        { level: 2, name: 'Pele de Ferro' },
        { level: 3, name: 'Defender a Mente / Armadura de Sangue' },
        { level: 4, name: 'Ignorar a Dor' },
        { level: 5, name: 'Quebrar o Impacto / Imunidade Temporária' },
      ]
    },
    {
      name: 'Ofuscação',
      description: 'A habilidade de sumir da percepção das pessoas, alterando a mente de quem olha para parecer invisível ou outra pessoa. Foco: Mental / Físico.',
      levels: [
        { level: 1, name: 'Manto de Sombras / Silêncio Absoluto' },
        { level: 2, name: 'Passar Despercebido' },
        { level: 3, name: 'Máscara dos Mil Rostos (Mudar de aparência visual)' },
        { level: 4, name: 'Sumir da Visão' },
        { level: 5, name: 'Ocultar a Célula / Manto do Invisível' },
      ]
    },
    {
      name: 'Potência',
      description: 'Força física devastadora capaz de despedaçar metal e paredes de concreto com as mãos vazias. Foco: Físico.',
      levels: [
        { level: 1, name: 'Salto Sobrenatural / Impacto Brutal' },
        { level: 2, name: 'Punhos de Aço' },
        { level: 3, name: 'Arremesso Brutal' },
        { level: 4, name: 'Força Titânica' },
        { level: 5, name: 'Terremoto (Golpear o chão e derrubar oponentes)' },
      ]
    },
    {
      name: 'Presença',
      description: 'Atração e magnetismo sobrenaturais, gerando amor cego, fascínio ou pânico paralisante em quem olha. Foco: Social.',
      levels: [
        { level: 1, name: 'Olhar Aterrorizante / Fascínio' },
        { level: 2, name: 'Beijo do Vampiro (Gera êxtase na vítima)' },
        { level: 3, name: 'Transe Hipnótico / Voz de Comando' },
        { level: 4, name: 'Convocar (Fazer a vítima ir até você de qualquer lugar da cidade)' },
        { level: 5, name: 'Majestade (Ninguém consegue te atacar fisicamente)' },
      ]
    },
    {
      name: 'Feitiçaria de Sangue',
      description: 'Rituais arcanos e manipulação direta das propriedades místicas do sangue (antiga Taumaturgia). Foco: Mental.',
      levels: [
        { level: 1, name: 'Gosto do Sangue / Corrosão Ácida' },
        { level: 2, name: 'Extinguir Chamas / Sangue Envenenado' },
        { level: 3, name: 'Escudo de Sangue / Movimento do Sangue' },
        { level: 4, name: 'Roubo de Sangue à Distância' },
        { level: 5, name: 'Caldeirão de Sangue (Ferver o sangue nas veias do inimigo)' },
      ]
    },
    {
      name: 'Metamorfose',
      description: 'Capacidade de transformar a própria biologia, criando garras, fundindo-se à terra ou virando animais. Foco: Físico.',
      levels: [
        { level: 1, name: 'Olhos de Gato / Adaptação Biológica' },
        { level: 2, name: 'Garras Ferais (Dano agravado)' },
        { level: 3, name: 'Fusão com a Terra (Esconder-se no solo de SP durante o dia)' },
        { level: 4, name: 'Forma de Névoa / Forma de Lobo/Morcego' },
        { level: 5, name: 'Metamorfose Divina' },
      ]
    }
  ];

  for (const disc of disciplinesData) {
    // 1. Criar ou atualizar a PowerDefinition (Disciplina)
    const powerDef = await prisma.powerDefinition.upsert({
      where: { name_gameStyle: { name: disc.name, gameStyle: 'VAMPIRE' } },
      update: { description: disc.description, type: 'DISCIPLINE' },
      create: {
        name: disc.name,
        gameStyle: 'VAMPIRE',
        type: 'DISCIPLINE',
        description: disc.description,
      },
    });

    // 2. Criar ou atualizar os PowerLevelDefinitions (Níveis 1 a 5)
    for (const level of disc.levels) {
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

  console.log(`✔ Foram inseridas 10 Disciplinas e todos os seus 5 níveis!`);
  console.log('Seed de Poderes concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
