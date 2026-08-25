import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import { CharacterVampire } from './CharacterVampire';
import { DefinitionLocation } from './DefinitionLocation';

export interface CharacterKnownLocationAttributes {
  id: string;
  characterId: string;
  locationId: string;
  status: 'DISCOVERED' | 'RUMOR' | 'DOMINATED' | 'HOSTILE';
}

export interface CharacterKnownLocationCreationAttributes extends Optional<CharacterKnownLocationAttributes, 'id' | 'status'> {}

class CharacterKnownLocation extends Model<CharacterKnownLocationAttributes, CharacterKnownLocationCreationAttributes> implements CharacterKnownLocationAttributes {
  declare id: string;
  declare characterId: string;
  declare locationId: string;
  declare status: 'DISCOVERED' | 'RUMOR' | 'DOMINATED' | 'HOSTILE';
}

CharacterKnownLocation.init(
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
    status: {
      type: DataTypes.STRING(20),
      defaultValue: 'DISCOVERED',
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'CharacterKnownLocation',
    tableName: 'character_known_locations',
    timestamps: true,
  }
);

export default CharacterKnownLocation;
