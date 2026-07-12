import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireBackground extends Model {
  declare characterVampireId: string;
  declare definitionBackgroundId: string;
  declare value: number;
  declare details: string | null;
}

export function initCharacterVampireBackground(sequelize: Sequelize) {
  CharacterVampireBackground.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionBackgroundId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionBackground', key: 'id' },
        onDelete: 'CASCADE',
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      details: {
        type: DataTypes.STRING,
        allowNull: true, // Ex: Nome do contato, localização do refúgio
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireBackground',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireBackground;
}
