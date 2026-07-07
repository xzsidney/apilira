import { Model, DataTypes, Sequelize } from 'sequelize';

// Segurança pública de uma região
export class PublicSecurity extends Model {
  declare id: string;
  declare securityType: string;
  declare description: string | null;
}

export function initPublicSecurity(sequelize: Sequelize) {
  PublicSecurity.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      securityType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'PublicSecurity',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return PublicSecurity;
}
