import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionResonance, DefinitionResonance } from '../src/models/DefinitionResonance';
initDefinitionResonance(sequelize);

const resonancesData = [
  {
    name: 'Colérica',
    description: 'O humor amarelo da bile. Sangue temperado por sentimentos de Raiva, Violência, Agressividade, Inveja e Frustração.',
    disciplines: 'Rapidez, Potência',
    gameStyle: 'VAMPIRE'
  },
  {
    name: 'Melancólica',
    description: 'O humor negro da bile. Sangue temperado por sentimentos de Tristeza, Medo, Depressão, Luto e Pânico.',
    disciplines: 'Fortitude, Ofuscação',
    gameStyle: 'VAMPIRE'
  },
  {
    name: 'Fleumática',
    description: 'O humor do catarro (Phlegm). Sangue temperado por sentimentos de Calma, Apatia, Preguiça, Tédio e Controle.',
    disciplines: 'Auspícios, Dominação',
    gameStyle: 'VAMPIRE'
  },
  {
    name: 'Sanguínea',
    description: 'O humor do puro sangue. Sangue temperado por sentimentos de Alegria, Luxúria, Paixão, Entusiasmo e Amor.',
    disciplines: 'Feitiçaria de Sangue (Taumaturgia), Presença',
    gameStyle: 'VAMPIRE'
  },
  {
    name: 'Animal',
    description: 'O sangue de bestas e animais de rua. Instinto puro, sobrevivência e selvageria muda.',
    disciplines: 'Animalismo, Metamorfose',
    gameStyle: 'VAMPIRE'
  },
  {
    name: 'Vazia (Bolsa/Cadáver)',
    description: 'Sangue frio de banco de sangue, ou sangue retirado de um cadáver em decomposição. Não carrega nenhuma emoção e sacia mal a Besta.',
    disciplines: 'Nenhuma',
    gameStyle: 'VAMPIRE'
  }
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionResonance...');
    await sequelize.sync({ alter: true });

    console.log(`Populando ${resonancesData.length} Ressonâncias...`);
    for (const res of resonancesData) {
      await DefinitionResonance.findOrCreate({
        where: { name: res.name },
        defaults: res as any
      });
    }

    console.log(`✅ Seed de Ressonâncias finalizado com sucesso no Hostinger!`);
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
