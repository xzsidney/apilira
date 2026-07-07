import { Model, DataTypes, Sequelize } from 'sequelize';

// Tabela de junção: criminalidade de uma região (sem coluna id)
export class RegionCriminality extends Model {
  declare regionId: string;
  declare criminalityId: string;
  declare testDifficulty: number;
}

export function initRegionCriminality(sequelize: Sequelize) {
  RegionCriminality.init(
    {
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      criminalityId: {
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
      tableName: 'RegionCriminality',
      freezeTableName: true,
      timestamps: false,
    }
  );

  // Remove a coluna id padrão do Sequelize
  RegionCriminality.removeAttribute('id');

  return RegionCriminality;
}
