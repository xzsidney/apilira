import { DataTypes, Model, Sequelize } from 'sequelize';

export class DefinitionMissionIdleAction extends Model {
  declare id: string;
  declare missionId: string;
  declare stepOrder: number;
  declare name: string;
  declare description: string;
  declare difficulty: number;
  declare attributeReq: string | null;
  declare skillReq: string | null;
  declare successText: string;
  declare failureText: string;
}

export function initDefinitionMissionIdleAction(sequelize: Sequelize) {
  DefinitionMissionIdleAction.init(
    {
      id: {
        type: DataTypes.STRING(36),
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      missionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      stepOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.INTEGER,
        defaultValue: 6,
        allowNull: false,
      },
      attributeReq: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      skillReq: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      successText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      failureText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'DefinitionMissionIdleAction',
    }
  );
}
