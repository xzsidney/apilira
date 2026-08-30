import { Model, DataTypes, Sequelize } from 'sequelize';

export class FamilyShopItem extends Model {
  declare id: string;
  declare name: string;
  declare description: string;
  declare itemType: 'GAME_EQUIPMENT' | 'GAME_POTION' | 'GAME_PET' | 'REAL_REWARD';
  declare costGold: number;
  declare statsJson: object | null;
  declare icon: string;
  declare stock: number;
  declare isAvailable: boolean;
  declare createdAt: Date;
  declare updatedAt: Date;
}

export function initFamilyShopItem(sequelize: Sequelize) {
  FamilyShopItem.init(
    {
      id: {
        type: DataTypes.STRING(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      itemType: {
        type: DataTypes.ENUM('GAME_EQUIPMENT', 'GAME_POTION', 'GAME_PET', 'REAL_REWARD'),
        allowNull: false,
        defaultValue: 'GAME_EQUIPMENT',
      },
      costGold: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 50,
      },
      statsJson: {
        type: DataTypes.JSON,
        allowNull: true,
      },
      icon: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: '🗡️',
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: -1, // -1 = ilimitado
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: 'FamilyShopItem',
      tableName: 'family_shop_items',
      timestamps: true,
    }
  );
  return FamilyShopItem;
}
