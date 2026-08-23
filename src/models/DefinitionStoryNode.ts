import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionStoryNodeAttributes {
  id: string;
  adventureId: string;
  narrativeText: string;
  isEnding: boolean;
  backgroundImageUrl?: string;
  speakerName?: string;
  leftCharacterImageUrl?: string;
  rightCharacterImageUrl?: string;
}

export interface DefinitionStoryNodeCreationAttributes extends Optional<DefinitionStoryNodeAttributes, 'id' | 'isEnding' | 'backgroundImageUrl' | 'speakerName' | 'leftCharacterImageUrl' | 'rightCharacterImageUrl'> {}

class DefinitionStoryNode extends Model<DefinitionStoryNodeAttributes, DefinitionStoryNodeCreationAttributes> implements DefinitionStoryNodeAttributes {
  declare id: string;
  declare adventureId: string;
  declare narrativeText: string;
  declare isEnding: boolean;
  declare backgroundImageUrl?: string;
  declare speakerName?: string;
  declare leftCharacterImageUrl?: string;
  declare rightCharacterImageUrl?: string;
}

DefinitionStoryNode.init(
  {
    id: {
      type: DataTypes.STRING(36),
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    adventureId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    narrativeText: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isEnding: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    backgroundImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    speakerName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    leftCharacterImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rightCharacterImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'DefinitionStoryNode',
    tableName: 'definition_story_nodes',
    timestamps: true,
  }
);

export default DefinitionStoryNode;
