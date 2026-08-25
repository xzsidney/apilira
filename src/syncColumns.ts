import sequelize from './config/db';
import { DataTypes } from 'sequelize';

async function addAdditiveColumns() {
  const queryInterface = sequelize.getQueryInterface();
  try {
    const tableDesc: any = await queryInterface.describeTable('definition_missions_idle');
    if (!tableDesc.userId) {
      console.log('Adicionando coluna userId em definition_missions_idle...');
      await queryInterface.addColumn('definition_missions_idle', 'userId', {
        type: DataTypes.STRING(36),
        allowNull: true,
      });
      console.log('Coluna userId adicionada com sucesso em definition_missions_idle.');
    } else {
      console.log('Coluna userId já existe em definition_missions_idle.');
    }
  } catch (error: any) {
    console.error('Erro ao verificar/adicionar coluna:', error.message);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
}

addAdditiveColumns();
