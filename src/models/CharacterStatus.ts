import { Model, DataTypes, Sequelize } from 'sequelize';

// Status atual de um personagem (ex: vida, vontade)
export class CharacterStatus extends Model {
  declare id: string;
  declare characterId: string;
  declare statusId: string;
  declare value: number;
}

export function initCharacterStatus(sequelize: Sequelize) {
  CharacterStatus.init(
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
      statusId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      value: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize,
      tableName: 'CharacterStatus',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'statusId'],
        },
      ],
    }
  );
  return CharacterStatus;
}
