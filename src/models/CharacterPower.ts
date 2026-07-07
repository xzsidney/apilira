import { Model, DataTypes, Sequelize } from 'sequelize';

// Poderes associados a um personagem
export class CharacterPower extends Model {
  declare id: string;
  declare characterId: string;
  declare powerDefinitionId: string;
  declare level: number;
}

export function initCharacterPower(sequelize: Sequelize) {
  CharacterPower.init(
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
      powerDefinitionId: {
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
      tableName: 'CharacterPower',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'powerDefinitionId'],
        },
      ],
    }
  );
  return CharacterPower;
}
