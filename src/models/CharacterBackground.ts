import { Model, DataTypes, Sequelize } from 'sequelize';

// Antecedentes associados a um personagem
export class CharacterBackground extends Model {
  declare id: string;
  declare characterId: string;
  declare backgroundId: string;
  declare level: number;
}

export function initCharacterBackground(sequelize: Sequelize) {
  CharacterBackground.init(
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
      backgroundId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      sequelize,
      tableName: 'CharacterBackground',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'backgroundId'],
        },
      ],
    }
  );
  return CharacterBackground;
}
