import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionStoryAdventureAttributes {
  id: string;
  title: string;
  description: string;
  firstNodeId?: string; // Optional initially as it may need to be linked after the node is created
}

export interface DefinitionStoryAdventureCreationAttributes extends Optional<DefinitionStoryAdventureAttributes, 'id' | 'firstNodeId'> {}

class DefinitionStoryAdventure extends Model<DefinitionStoryAdventureAttributes, DefinitionStoryAdventureCreationAttributes> implements DefinitionStoryAdventureAttributes {
  declare id: string;
  declare title: string;
  declare description: string;
  declare firstNodeId?: string;
}

DefinitionStoryAdventure.init(
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
    firstNodeId: {
      type: DataTypes.STRING(36),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'DefinitionStoryAdventure',
    tableName: 'definition_story_adventures',
    timestamps: true,
  }
);

export default DefinitionStoryAdventure;
