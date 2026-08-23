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
  public id!: string;
  public characterId!: string;
  public definitionMissionIdleId!: string;
  public startedAt!: Date;
  public expiresAt!: Date;
  public status!: string;
  public reportJson!: string | null;
  public stepDurationMinutes!: number;
  
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public DefinitionMissionIdle?: any; // For associations
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
