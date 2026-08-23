import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionStoryNodeAttributes {
  id: string;
  adventureId: string;
  narrativeText: string;
  isEnding: boolean;
}

export interface DefinitionStoryNodeCreationAttributes extends Optional<DefinitionStoryNodeAttributes, 'id' | 'isEnding'> {}

class DefinitionStoryNode extends Model<DefinitionStoryNodeAttributes, DefinitionStoryNodeCreationAttributes> implements DefinitionStoryNodeAttributes {
  declare id: string;
  declare adventureId: string;
  declare narrativeText: string;
  declare isEnding: boolean;
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
  },
  {
    sequelize,
    modelName: 'DefinitionStoryNode',
    tableName: 'definition_story_nodes',
    timestamps: true,
  }
);

export default DefinitionStoryNode;
