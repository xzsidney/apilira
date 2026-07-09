import { sequelize } from './models';
import { DataTypes } from 'sequelize';

async function apply() {
  const queryInterface = sequelize.getQueryInterface();
  const cols = [
    { name: 'concept', type: DataTypes.STRING },
    { name: 'nature', type: DataTypes.STRING },
    { name: 'demeanor', type: DataTypes.STRING },
    { name: 'chronicle', type: DataTypes.STRING },
    { name: 'history', type: DataTypes.TEXT },
    { name: 'roleplayHints', type: DataTypes.TEXT },
    { name: 'health', type: DataTypes.INTEGER, defaultValue: 7 },
    { name: 'maxHealth', type: DataTypes.INTEGER, defaultValue: 7 },
    { name: 'willpower', type: DataTypes.INTEGER, defaultValue: 1 },
    { name: 'maxWillpower', type: DataTypes.INTEGER, defaultValue: 1 },
    { name: 'energy', type: DataTypes.INTEGER, defaultValue: 1 },
    { name: 'maxEnergy', type: DataTypes.INTEGER, defaultValue: 1 },
    { name: 'vampireClaId', type: DataTypes.STRING(36) },
    { name: 'werewolfTribeId', type: DataTypes.STRING(36) },
    { name: 'mageTraditionId', type: DataTypes.STRING(36) },
    { name: 'hunterCreedId', type: DataTypes.STRING(36) }
  ];

  for (const c of cols) {
    try {
      await queryInterface.addColumn('Character', c.name, { type: c.type, defaultValue: c.defaultValue });
      console.log(`Coluna ${c.name} adicionada.`);
    } catch (e: any) {
      console.log(`Ignorando ${c.name}: ${e.message}`);
    }
  }
  process.exit(0);
}

apply();
