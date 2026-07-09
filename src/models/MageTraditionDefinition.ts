import { Model, DataTypes, Sequelize } from 'sequelize';

export class MageTraditionDefinition extends Model {
  declare id: string;
  declare name: string;
  declare englishName: string;
  declare description: string;
  declare affinitySphere: string;
  declare focusInstruments: string[];
  declare paradigmFlawName: string;
  declare paradigmFlawDescription: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initMageTraditionDefinition(sequelize: Sequelize) {
  MageTraditionDefinition.init(
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
      englishName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      affinitySphere: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      focusInstruments: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      paradigmFlawName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      paradigmFlawDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'MageTraditionDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return MageTraditionDefinition;
}
