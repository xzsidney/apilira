import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface DefinitionStoryAdventureAttributes {
  id: string;
  title: string;
  description: string;
  userId?: string;
  firstNodeId?: string; // Optional initially as it may need to be linked after the node is created
  maxCompletions?: number | null;
}

export interface DefinitionStoryAdventureCreationAttributes extends Optional<DefinitionStoryAdventureAttributes, 'id' | 'firstNodeId' | 'maxCompletions' | 'userId'> {}

class DefinitionStoryAdventure extends Model<DefinitionStoryAdventureAttributes, DefinitionStoryAdventureCreationAttributes> implements DefinitionStoryAdventureAttributes {
  declare id: string;
  declare title: string;
  declare description: string;
  declare userId?: string;
  declare firstNodeId?: string;
  declare maxCompletions: number | null;
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
    userId: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: { model: 'User', key: 'id' },
    },
    firstNodeId: {
      type: DataTypes.STRING(36),
      allowNull: true,
    },
    maxCompletions: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
    }
  },
  {
    sequelize,
    modelName: 'DefinitionStoryAdventure',
    tableName: 'definition_story_adventures',
    timestamps: true,
  }
);

export default DefinitionStoryAdventure;
