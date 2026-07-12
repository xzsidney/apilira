import { Model, DataTypes, Sequelize } from 'sequelize';

export class CharacterVampireSkill extends Model {
  declare characterVampireId: string;
  declare definitionSkillId: string;
  declare value: number;
  declare specialty: string | null;
}

export function initCharacterVampireSkill(sequelize: Sequelize) {
  CharacterVampireSkill.init(
    {
      characterVampireId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'CharacterVampire', key: 'id' },
        onDelete: 'CASCADE',
      },
      definitionSkillId: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        references: { model: 'DefinitionSkill', key: 'id' },
        onDelete: 'CASCADE',
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      specialty: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'CharacterVampireSkill',
      freezeTableName: true,
      timestamps: false,
    }
  );
  return CharacterVampireSkill;
}
