import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireMeritFlaw extends Model {
  declare characterVampireId: string;
  declare definitionMeritFlawId: string;
  declare details: string | null;
}

export function initCharacterVampireMeritFlaw(sequelize: Sequelize) {
  CharacterVampireMeritFlaw.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionMeritFlawId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionMeritFlaw', key: 'id' },
        onDelete: 'CASCADE',
      },
      details: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireMeritFlaw',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireMeritFlaw;
}
