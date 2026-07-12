import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireAttribute extends Model {
  declare characterVampireId: string;
  declare definitionAttributeId: string;
  declare value: number;
}

export function initCharacterVampireAttribute(sequelize: Sequelize) {
  CharacterVampireAttribute.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionAttributeId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionAttribute', key: 'id' },
        onDelete: 'CASCADE',
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireAttribute',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireAttribute;
}
