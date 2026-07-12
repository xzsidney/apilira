import { Model, DataTypes, Sequelize } from 'sequelize';

export class DefinitionClan extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare sect: string | null;
  declare weakness: string;
  declare disciplines: string;
  declare gameStyle: 'VAMPIRE';
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initDefinitionClan(sequelize: Sequelize) {
  DefinitionClan.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sect: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      weakness: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      disciplines: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gameStyle: {
        type: DataTypes.ENUM('VAMPIRE'),
        allowNull: false,
        defaultValue: 'VAMPIRE',
      },
    },
    {
      sequelize,
      tableName: 'DefinitionClan',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return DefinitionClan;
}
