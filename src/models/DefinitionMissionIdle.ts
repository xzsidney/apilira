import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionMissionIdleAttributes {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  baseDifficulty: number;
  allowedRequirements: any;
  rewardsJson: any;
  penaltiesJson: any;
}

export interface DefinitionMissionIdleCreationAttributes extends Optional<DefinitionMissionIdleAttributes, 'id' | 'allowedRequirements' | 'rewardsJson' | 'penaltiesJson'> {}

class DefinitionMissionIdle extends Model<DefinitionMissionIdleAttributes, DefinitionMissionIdleCreationAttributes> implements DefinitionMissionIdleAttributes {
  declare id: string;
  declare title: string;
  declare description: string;
  declare durationMinutes: number;
  declare baseDifficulty: number;
  declare allowedRequirements: any;
  declare rewardsJson: any;
  declare penaltiesJson: any;
}

DefinitionMissionIdle.init(
  {
    id: {
      type: DataTypes.STRING(36),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
  },
  {
    sequelize,
    modelName: 'DefinitionMissionIdle',
    tableName: 'definition_missions_idle',
    timestamps: true,
  }
);

export default DefinitionMissionIdle;
