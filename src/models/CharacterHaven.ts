import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { CharacterVampire } from './CharacterVampire';
import { DefinitionLocation } from './DefinitionLocation';

export interface CharacterHavenAttributes {
  id: string;
  characterId: string;
  locationId: string;
  securityLevel: number;
  luxuryLevel: number;
  attributes: any;
}

export interface CharacterHavenCreationAttributes extends Optional<CharacterHavenAttributes, 'id' | 'securityLevel' | 'luxuryLevel' | 'attributes'> {}

class CharacterHaven extends Model<CharacterHavenAttributes, CharacterHavenCreationAttributes> implements CharacterHavenAttributes {
  declare id: string;
  declare characterId: string;
  declare locationId: string;
  declare securityLevel: number;
  declare luxuryLevel: number;
  declare attributes: any;
}

CharacterHaven.init(
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
    locationId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    securityLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    luxuryLevel: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
      allowNull: false,
    },
    attributes: {
      type: DataTypes.JSON,
      defaultValue: {},
    },
  },
  {
    sequelize,
    modelName: 'CharacterHaven',
    tableName: 'character_havens',
    timestamps: true,
  }
);

export default CharacterHaven;
