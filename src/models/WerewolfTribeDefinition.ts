import { Model, DataTypes, Sequelize } from 'sequelize';

export class WerewolfTribeDefinition extends Model {
  declare id: string;
  declare name: string;
  declare englishName: string;
  declare classicName: string | null;
  declare description: string;
  declare nationAlignment: string;
  declare mainGifts: string[];
  declare psychologicalFlawName: string;
  declare psychologicalFlawDescription: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initWerewolfTribeDefinition(sequelize: Sequelize) {
  WerewolfTribeDefinition.init(
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
      classicName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      nationAlignment: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainGifts: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      psychologicalFlawName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      psychologicalFlawDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'WerewolfTribeDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return WerewolfTribeDefinition;
}
