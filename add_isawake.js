const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config({ path: 'E:/11_Games/LiraRPG/app/apilira/.env' });

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  dialect: 'mysql'
});

async function run() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao DB para migracao.');
    await sequelize.getQueryInterface().addColumn('CharacterVampire', 'isAwake', {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    });
    console.log('Coluna isAwake adicionada com sucesso!');
  } catch (err) {
    if (err.message && err.message.includes('Duplicate column name')) {
      console.log('Coluna ja existe!');
    } else {
      console.error('Erro na migracao:', err);
    }
  } finally {
    await sequelize.close();
  }
}
run();
