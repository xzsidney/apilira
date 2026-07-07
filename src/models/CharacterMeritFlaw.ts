import { Model, DataTypes, Sequelize } from 'sequelize';

// Qualidades e defeitos associados a um personagem
export class CharacterMeritFlaw extends Model {
  declare id: string;
  declare characterId: string;
  declare meritFlawId: string;
  declare points: number;
  declare description: string | null;
}

export function initCharacterMeritFlaw(sequelize: Sequelize) {
  CharacterMeritFlaw.init(
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
      meritFlawId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      points: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'CharacterMeritFlaw',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'meritFlawId'],
        },
      ],
    }
  );
  return CharacterMeritFlaw;
}
