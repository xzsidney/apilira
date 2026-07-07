import { Model, DataTypes, Sequelize } from 'sequelize';

// Habilidades associadas a um personagem
export class CharacterSkill extends Model {
  declare id: string;
  declare characterId: string;
  declare skillId: string;
  declare value: number;
  declare specialty: string | null;
  declare description: string | null;
}

export function initCharacterSkill(sequelize: Sequelize) {
  CharacterSkill.init(
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
      skillId: {
        type: DataTypes.STRING(36),
        allowNull: false,
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
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'CharacterSkill',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'skillId'],
        },
      ],
    }
  );
  return CharacterSkill;
}
