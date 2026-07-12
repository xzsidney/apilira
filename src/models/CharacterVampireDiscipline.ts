import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireDiscipline extends Model {
  declare characterVampireId: string;
  declare definitionDisciplineId: string;
  declare value: number;
}

export function initCharacterVampireDiscipline(sequelize: Sequelize) {
  CharacterVampireDiscipline.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionDisciplineId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionDiscipline', key: 'id' },
        onDelete: 'CASCADE',
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1, // Geralmente começa em 1 se comprou
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireDiscipline',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireDiscipline;
}
