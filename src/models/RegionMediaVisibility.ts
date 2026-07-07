import { Model, DataTypes, Sequelize } from 'sequelize';

// Tabela de junção: visibilidade midiática de uma região (sem coluna id)
export class RegionMediaVisibility extends Model {
  declare regionId: string;
  declare mediaVisibilityId: string;
  declare testDifficulty: number;
}

export function initRegionMediaVisibility(sequelize: Sequelize) {
  RegionMediaVisibility.init(
    {
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      mediaVisibilityId: {
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
      tableName: 'RegionMediaVisibility',
      freezeTableName: true,
      timestamps: false,
    }
  );

  // Remove a coluna id padrão do Sequelize
  RegionMediaVisibility.removeAttribute('id');

  return RegionMediaVisibility;
}
