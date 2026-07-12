import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionPredator, DefinitionPredator } from '../src/models/DefinitionPredator';
initDefinitionPredator(sequelize);

const predatorsData = [
  {
    name: 'Beco Escuro (Alleycat)',
    description: 'Você pega sangue à força ou com ameaças, frequentemente assaltando pessoas em vielas escuras. O medo tempera o seu sangue.',
    huntingPool: 'Força + Briga ou Destreza + Briga',
    modifiers: '• Adicione uma especialidade: Intimidação (Assalto) ou Briga (Agarrar)\n• Ganhe um ponto de Disciplina em Rapidez ou Potência\n• Perca 1 ponto de Humanidade\n• Ganhe a Vantagem Contatos 3 (Criminosos)'
  },
  {
    name: 'Consensual',
    description: 'Você nunca se alimenta contra a vontade da vítima. Você se apresenta como um doador de sangue peculiar, um fetiche, ou se aproveita do movimento de trabalhadores sexuais, revelando parte do seu segredo.',
    huntingPool: 'Manipulação + Persuasão',
    modifiers: '• Adicione uma especialidade: Medicina (Flebomista) ou Persuasão (Vítimas)\n• Ganhe um ponto de Disciplina em Auspícios ou Fortitude\n• Ganhe 1 ponto de Humanidade\n• Ganhe o Defeito Segredo Sombrio 1 (Quebrador de Máscara)'
  },
  {
    name: 'Fazendeiro (Farmer)',
    description: 'Você bebe de animais porque o sangue humano o apavora ou enoja. Você sobrevive atacando cães de rua, gatos, bois ou zoológicos, sofrendo o gosto ruim para não perder a alma.',
    huntingPool: 'Autocontrole + Trato com Animais',
    modifiers: '• Adicione uma especialidade: Trato com Animais (Animais de Rua) ou Sobrevivência (Caça)\n• Ganhe um ponto de Disciplina em Animalismo ou Metamorfose\n• Ganhe 1 ponto de Humanidade\n• Ganhe o Defeito Exclusão de Presa 2 (Apenas Animais)'
  },
  {
    name: 'Gato de Rua (Cleaver)',
    description: 'Você se infiltra em uma família humana, ou rouba a vida de alguém, se alimentando de amigos e parentes. A intimidade é o seu tempero.',
    huntingPool: 'Manipulação + Lábia',
    modifiers: '• Adicione uma especialidade: Persuasão (Sua "família") ou Lábia (Esconder o que você é)\n• Ganhe um ponto de Disciplina em Dominação ou Animalismo\n• Ganhe a Vantagem Rebanho 2 (A família)\n• Ganhe o Defeito Segredo Sombrio 1 (Sua família secreta)'
  },
  {
    name: 'Sanguessuga (Blood Leech)',
    description: 'Você bebe o sangue de outros vampiros, rejeitando a raça mortal. Talvez você seja moralista, talvez apenas goste do poder proibido do Diablerie.',
    huntingPool: 'Destreza + Furtividade ou Força + Briga',
    modifiers: '• Adicione uma especialidade: Briga (Kindred) ou Furtividade (Contra Membros)\n• Ganhe um ponto de Disciplina em Rapidez ou Metamorfose\n• Perca 1 ponto de Humanidade\n• Aumente sua Potência de Sangue em 1 ou Ganhe o Defeito Inimigo 2'
  },
  {
    name: 'Sandman',
    description: 'Você suga o sangue das vítimas enquanto elas dormem. A furtividade é essencial, e você raramente machuca alguém de forma permanente se não for necessário.',
    huntingPool: 'Destreza + Furtividade',
    modifiers: '• Adicione uma especialidade: Medicina (Anestesia) ou Furtividade (Invasão)\n• Ganhe um ponto de Disciplina em Auspícios ou Ofuscação\n• Ganhe a Vantagem Recursos 1 (Roubando a carteira das vítimas adormecidas)'
  },
  {
    name: 'Sirene',
    description: 'Você finge ser um parceiro sexual ou romântico. Você seduz na pista de dança, no Tinder ou em bares escuros, alimentando-se no auge do êxtase da vítima.',
    huntingPool: 'Carisma + Lábia ou Carisma + Persuasão',
    modifiers: '• Adicione uma especialidade: Persuasão (Sedução) ou Lábia (Fingir interesse)\n• Ganhe um ponto de Disciplina em Fortitude ou Presença\n• Ganhe a Vantagem Aparência Lisonjeira (Beautiful) ou Inimigo 1 (Amante desprezado)'
  },
  {
    name: 'Osíris',
    description: 'Você caça entre um grupo de mortais devotos que o reverenciam como uma divindade, ídolo pop, líder de culto ou mestre espiritual.',
    huntingPool: 'Manipulação + Lábia ou Carisma + Liderança',
    modifiers: '• Adicione uma especialidade: Liderança (Culto) ou Performance (Discursos)\n• Ganhe um ponto de Disciplina em Presença ou Taumaturgia (Feitiçaria de Sangue)\n• Ganhe a Vantagem Rebanho 3 e Status 1\n• Ganhe o Defeito Inimigo 2 (Caçador de Cultos ou a Igreja)'
  }
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionPredator...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${predatorsData.length} Tipos de Predador...`);
    for (const pred of predatorsData) {
      await DefinitionPredator.findOrCreate({
        where: { name: pred.name },
        defaults: pred as any
      });
    }

    console.log(`✅ Seed de Tipos de Predador finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
