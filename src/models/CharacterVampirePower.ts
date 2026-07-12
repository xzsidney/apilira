import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampirePower extends Model {
  declare characterVampireId: string;
  declare definitionDisciplinePowerId: string;
}

export function initCharacterVampirePower(sequelize: Sequelize) {
  CharacterVampirePower.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionDisciplinePowerId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionDisciplinePower', key: 'id' },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampirePower',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampirePower;
}
