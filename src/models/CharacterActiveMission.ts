import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface CharacterActiveMissionAttributes {
  id: string;
  characterId: string;
  definitionMissionIdleId: string;
  startedAt: Date;
  expiresAt: Date;
  status: string;
  reportJson: string | null;
  stepDurationMinutes: number;
}

export interface CharacterActiveMissionCreationAttributes extends Optional<CharacterActiveMissionAttributes, 'id' | 'status' | 'reportJson' | 'stepDurationMinutes'> {}

class CharacterActiveMission extends Model<CharacterActiveMissionAttributes, CharacterActiveMissionCreationAttributes> implements CharacterActiveMissionAttributes {
  declare id: string;
  declare characterId: string;
  declare definitionMissionIdleId: string;
  declare startedAt: Date;
  declare expiresAt: Date;
  declare status: string;
  declare reportJson: string | null;
  declare stepDurationMinutes: number;
  
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  declare DefinitionMissionIdle?: any; // For associations
}

CharacterActiveMission.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    characterId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    definitionMissionIdleId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    startedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'IN_PROGRESS',
      allowNull: false,
    },
    reportJson: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    stepDurationMinutes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    }
  },
  {
    sequelize,
    modelName: 'CharacterActiveMission',
    tableName: 'character_active_missions',
    timestamps: true,
  }
);

export default CharacterActiveMission;
