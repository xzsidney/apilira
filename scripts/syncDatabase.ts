import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

// Importa a instância do sequelize que JÁ TEM todos os models registrados
import { sequelize } from '../src/models'; 

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
