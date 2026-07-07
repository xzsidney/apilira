import { Model, DataTypes, Sequelize } from 'sequelize';

// Refúgios pertencentes a um personagem em uma região
export class CharacterHaven extends Model {
  declare id: string;
  declare characterId: string;
  declare havenDefinitionId: string;
  declare regionId: string;
}

export function initCharacterHaven(sequelize: Sequelize) {
  CharacterHaven.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      characterId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      havenDefinitionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      regionId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'CharacterHaven',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterHaven;
}
