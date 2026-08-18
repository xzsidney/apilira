import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { CharacterVampire } from './CharacterVampire';
import DefinitionMissionIdle from './DefinitionMissionIdle';

export interface CharacterActiveMissionAttributes {
  id: string;
  characterId: string;
  missionId: string;
  expiresAt: Date;
  selectedAttribute: string;
  selectedSkill: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
}

export interface CharacterActiveMissionCreationAttributes extends Optional<CharacterActiveMissionAttributes, 'id' | 'status'> {}

class CharacterActiveMission extends Model<CharacterActiveMissionAttributes, CharacterActiveMissionCreationAttributes> implements CharacterActiveMissionAttributes {
  declare id: string;
  declare characterId: string;
  declare missionId: string;
  declare expiresAt: Date;
  declare selectedAttribute: string;
  declare selectedSkill: string;
  declare status: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
}

CharacterActiveMission.init(
  {
    id: {
      type: DataTypes.STRING(36),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    characterId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    missionId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    expiresAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    selectedAttribute: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    selectedSkill: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('IN_PROGRESS', 'COMPLETED', 'FAILED'),
      defaultValue: 'IN_PROGRESS',
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CharacterActiveMission',
    tableName: 'character_active_missions',
    timestamps: true,
  }
);

export default CharacterActiveMission;
