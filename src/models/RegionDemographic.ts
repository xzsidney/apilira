import { Model, DataTypes, Sequelize } from 'sequelize';

// Tabela de junção: dados demográficos de uma região (sem coluna id)
export class RegionDemographic extends Model {
  declare regionId: string;
  declare demographicProfileId: string;
  declare quantity: number;
}

export function initRegionDemographic(sequelize: Sequelize) {
  RegionDemographic.init(
    {
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      demographicProfileId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'RegionDemographic',
      freezeTableName: true,
      timestamps: false,
    }
  );

  // Remove a coluna id padrão do Sequelize
  RegionDemographic.removeAttribute('id');

  return RegionDemographic;
}
