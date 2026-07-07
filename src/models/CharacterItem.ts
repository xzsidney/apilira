import { Model, DataTypes, Sequelize } from 'sequelize';

// Itens no inventário de um personagem
export class CharacterItem extends Model {
  declare id: string;
  declare characterId: string;
  declare itemId: string;
  declare quantity: number;
  declare description: string | null;
}

export function initCharacterItem(sequelize: Sequelize) {
  CharacterItem.init(
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
      itemId: {
        type: DataTypes.STRING(36),
        allowNull: false,
      },
      quantity: {
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
      tableName: 'CharacterItem',
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ['characterId', 'itemId'],
        },
      ],
    }
  );
  return CharacterItem;
}
