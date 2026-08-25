import { sequelize } from './models';
import { DataTypes } from 'sequelize';

async function applyNightCycleColumns() {
  const queryInterface = sequelize.getQueryInterface();
  const cols = [
    { name: 'currentLocationId', type: DataTypes.STRING(36), allowNull: true },
    { name: 'nightMinutesSpent', type: DataTypes.INTEGER, defaultValue: 0, allowNull: false },
    { name: 'isRestingInHaven', type: DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
    { name: 'emergencyHavenType', type: DataTypes.STRING(50), defaultValue: 'NONE', allowNull: false },
    { name: 'lastNightCycleDate', type: DataTypes.DATE, defaultValue: DataTypes.NOW, allowNull: false },
  ];

  console.log('Aplicando colunas de Ciclo Noturno e Trânsito na tabela CharacterVampire...');

  for (const c of cols) {
    try {
      await queryInterface.addColumn('CharacterVampire', c.name, {
        type: c.type,
        defaultValue: c.defaultValue,
        allowNull: c.allowNull !== undefined ? c.allowNull : true,
      });
      console.log(`✅ Coluna ${c.name} adicionada com sucesso.`);
    } catch (e: any) {
      console.log(`ℹ️ Coluna ${c.name} já existente ou ignorada: ${e.message}`);
    }
  }

  process.exit(0);
}

applyNightCycleColumns();
