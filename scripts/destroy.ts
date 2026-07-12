import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: 'mysql',
  logging: false,
});

async function destroyAll() {
  try {
    const [results] = await sequelize.query("SHOW TABLES");
    const tableNames = results.map((r: any) => Object.values(r)[0] as string);
    
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
    let deletedCount = 0;
    
    for (const table of tableNames) {
      if (table.toLowerCase() !== 'user' && table.toLowerCase() !== 'users') {
        console.log(`Dropping table ${table}...`);
        await sequelize.query(`DROP TABLE IF EXISTS \`${table}\``);
        deletedCount++;
      } else {
        console.log(`SKIPPING table ${table} (Auth data preserved).`);
      }
    }
    
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
    console.log(`\n✅ SUCESSO: ${deletedCount} tabelas foram excluídas.`);
    console.log('A tabela User permanece intacta no banco de dados da Hostinger.');
    process.exit(0);
  } catch(e) {
    console.error('ERRO FATAL:', e);
    process.exit(1);
  }
}

destroyAll();
