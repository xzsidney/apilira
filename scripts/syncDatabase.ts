import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: console.log,
});

// Import the populated models with associations
import { User } from '../src/models'; 
import '../src/models'; // This triggers index.ts which initializes and associates everything

async function sync() {
  try {
    console.log('Sincronizando banco de dados com as tabelas da Ficha de Vampiro...');
    await sequelize.sync({ alter: true });
    console.log('✅ Banco sincronizado com sucesso!');
    process.exit(0);
  } catch (e) {
    console.error('ERRO:', e);
    process.exit(1);
  }
}

sync();
