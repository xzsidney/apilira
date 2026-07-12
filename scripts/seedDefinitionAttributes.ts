import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

import { initDefinitionAttribute, DefinitionAttribute } from '../src/models/DefinitionAttribute';
initDefinitionAttribute(sequelize);

const attributesData = [
  // Físicos
  { name: 'Força', description: 'Capacidade física e força bruta.', type: 'FISICO', gameStyle: 'TODOS' },
  { name: 'Destreza', description: 'Agilidade, velocidade e reflexos.', type: 'FISICO', gameStyle: 'TODOS' },
  { name: 'Vigor', description: 'Resistência a danos e cansaço.', type: 'FISICO', gameStyle: 'TODOS' },
  // Sociais
  { name: 'Carisma', description: 'Charme natural e poder de atração.', type: 'SOCIAL', gameStyle: 'TODOS' },
  { name: 'Manipulação', description: 'Capacidade de enganar e convencer os outros.', type: 'SOCIAL', gameStyle: 'TODOS' },
  { name: 'Aparência', description: 'Atração física (V20/Antigos).', type: 'SOCIAL', gameStyle: 'TODOS' }, // Ou Autocontrole no V5
  { name: 'Autocontrole', description: 'Capacidade de manter a calma sob pressão (V5).', type: 'SOCIAL', gameStyle: 'TODOS' },
  // Mentais
  { name: 'Percepção', description: 'Atenção aos detalhes do ambiente.', type: 'MENTAL', gameStyle: 'TODOS' },
  { name: 'Inteligência', description: 'Capacidade de raciocínio lógico e memória.', type: 'MENTAL', gameStyle: 'TODOS' },
  { name: 'Raciocínio', description: 'Pensamento rápido e intuição.', type: 'MENTAL', gameStyle: 'TODOS' },
  { name: 'Determinação', description: 'Foco mental e força de vontade (V5).', type: 'MENTAL', gameStyle: 'TODOS' },
];

async function seed() {
  try {
    console.log('Sincronizando tabela DefinitionAttribute...');
    await sequelize.sync({ alter: true });

    console.log('Populando Atributos...');
    for (const attr of attributesData) {
      await DefinitionAttribute.findOrCreate({
        where: { name: attr.name },
        defaults: attr as any
      });
    }

    console.log('✅ Seed de Atributos finalizado com sucesso no Hostinger!');
    process.exit(0);
  } catch(e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

seed();
