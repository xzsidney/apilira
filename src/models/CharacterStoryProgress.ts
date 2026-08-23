import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';

export interface CharacterStoryProgressAttributes {
  id: string;
  characterId: string;
  adventureId: string;
  currentNodeId: string;
}

export interface CharacterStoryProgressCreationAttributes extends Optional<CharacterStoryProgressAttributes, 'id'> {}

class CharacterStoryProgress extends Model<CharacterStoryProgressAttributes, CharacterStoryProgressCreationAttributes> implements CharacterStoryProgressAttributes {
  declare id: string;
  declare characterId: string;
  declare adventureId: string;
  declare currentNodeId: string;
}

CharacterStoryProgress.init(
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
    adventureId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
    currentNodeId: {
      type: DataTypes.STRING(36),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CharacterStoryProgress',
    tableName: 'character_story_progress',
    timestamps: true,
  }
);

export default CharacterStoryProgress;
