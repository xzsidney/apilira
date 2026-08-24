import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface CharacterActivityLogAttributes {
  id: string;
  characterId: string;
  activityType: string; // 'STORY_ADVENTURE' or 'IDLE_MISSION'
  referenceId: string; // The ID of the adventure or mission
  resultData: any; // JSON containing rewards/penalties received
}

export interface CharacterActivityLogCreationAttributes extends Optional<CharacterActivityLogAttributes, 'id' | 'resultData'> {}

class CharacterActivityLog extends Model<CharacterActivityLogAttributes, CharacterActivityLogCreationAttributes> implements CharacterActivityLogAttributes {
  declare id: string;
  declare characterId: string;
  declare activityType: string;
  declare referenceId: string;
  declare resultData: any;
  
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

CharacterActivityLog.init(
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
    activityType: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    referenceId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    resultData: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: {},
    }
  },
  {
    sequelize,
    modelName: 'CharacterActivityLog',
    tableName: 'character_activity_logs',
    timestamps: true,
  }
);

export default CharacterActivityLog;
