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

    const advTableDesc: any = await queryInterface.describeTable('definition_story_adventures');
    if (!advTableDesc.userId) {
      console.log('Adicionando coluna userId em definition_story_adventures...');
      await queryInterface.addColumn('definition_story_adventures', 'userId', {
        type: DataTypes.STRING(36),
        allowNull: true,
      });
      console.log('Coluna userId adicionada com sucesso em definition_story_adventures.');
    } else {
      console.log('Coluna userId já existe em definition_story_adventures.');
    }

    const battleTableDesc: any = await queryInterface.describeTable('family_battles');
    if (!battleTableDesc.gridPositions) {
      console.log('Adicionando coluna gridPositions em family_battles...');
      await queryInterface.addColumn('family_battles', 'gridPositions', {
        type: DataTypes.JSON,
        allowNull: true,
      });
      console.log('Coluna gridPositions adicionada com sucesso em family_battles.');
    } else {
      console.log('Coluna gridPositions já existe em family_battles.');
    }
  } catch (error: any) {
    console.error('Erro ao verificar/adicionar coluna:', error.message);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
}

addAdditiveColumns();
