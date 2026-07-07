import { Model, DataTypes, Sequelize } from 'sequelize';

// Tabela de junção: segurança pública de uma região (sem coluna id)
export class RegionPublicSecurity extends Model {
  declare regionId: string;
  declare publicSecurityId: string;
  declare testDifficulty: number;
}

export function initRegionPublicSecurity(sequelize: Sequelize) {
  RegionPublicSecurity.init(
    {
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
        primaryKey: true,
      },
      publicSecurityId: {
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
      tableName: 'RegionPublicSecurity',
      freezeTableName: true,
      timestamps: false,
    }
  );

  // Remove a coluna id padrão do Sequelize
  RegionPublicSecurity.removeAttribute('id');

  return RegionPublicSecurity;
}
