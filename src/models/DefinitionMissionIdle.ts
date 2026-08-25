import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionMissionIdleAttributes {
  id: string;
  userId?: string;
  title: string;
  description: string;
  durationMinutes: number;
  baseDifficulty: number;
  allowedRequirements: any;
  rewardsJson: any;
  penaltiesJson: any;
  category: string;
  maxCompletions?: number | null;
}

export interface DefinitionMissionIdleCreationAttributes extends Optional<DefinitionMissionIdleAttributes, 'id' | 'userId' | 'allowedRequirements' | 'rewardsJson' | 'penaltiesJson' | 'maxCompletions'> {}

class DefinitionMissionIdle extends Model<DefinitionMissionIdleAttributes, DefinitionMissionIdleCreationAttributes> implements DefinitionMissionIdleAttributes {
  declare id: string;
  declare userId?: string;
  declare title: string;
  declare description: string;
  declare durationMinutes: number;
  declare baseDifficulty: number;
  declare allowedRequirements: any;
  declare rewardsJson: any;
  declare penaltiesJson: any;
  declare category: string;
  declare maxCompletions: number | null;
}

DefinitionMissionIdle.init(
  {
    id: {
      type: DataTypes.STRING(36),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: { model: 'User', key: 'id' },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    durationMinutes: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    baseDifficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    allowedRequirements: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    rewardsJson: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    penaltiesJson: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
    category: {
      type: DataTypes.STRING(50),
      defaultValue: 'OPERATION',
    },
    maxCompletions: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    sequelize,
    modelName: 'DefinitionMissionIdle',
    tableName: 'definition_missions_idle',
    timestamps: true,
  }
);

export default DefinitionMissionIdle;
