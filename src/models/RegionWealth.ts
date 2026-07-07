import { Model, DataTypes, Sequelize } from 'sequelize';

// Tabela de junção: riqueza de uma região (sem coluna id)
export class RegionWealth extends Model {
  declare regionId: string;
  declare wealthId: string;
  declare testDifficulty: number;
}

export function initRegionWealth(sequelize: Sequelize) {
  RegionWealth.init(
    {
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      wealthId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      testDifficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'RegionWealth',
      freezeTableName: true,
      timestamps: false,
    }
  );

  // Remove a coluna id padrão do Sequelize
  RegionWealth.removeAttribute('id');

  return RegionWealth;
}
