import { Model, DataTypes, Sequelize } from 'sequelize';

export class HunterCreedDefinition extends Model {
  declare id: string;
  declare name: string;
  declare englishName: string;
  declare description: string;
  declare mainEdges: string[];
  declare afflictionTriggerName: string;
  declare afflictionTriggerDescription: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initHunterCreedDefinition(sequelize: Sequelize) {
  HunterCreedDefinition.init(
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
      mainEdges: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      afflictionTriggerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      afflictionTriggerDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'HunterCreedDefinition',
      freezeTableName: true,
      timestamps: true,
    }
  );
  return HunterCreedDefinition;
}
