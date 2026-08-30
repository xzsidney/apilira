"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyShopItem = void 0;
exports.initFamilyShopItem = initFamilyShopItem;
const sequelize_1 = require("sequelize");
class FamilyShopItem extends sequelize_1.Model {
}
exports.FamilyShopItem = FamilyShopItem;
function initFamilyShopItem(sequelize) {
    FamilyShopItem.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        itemType: {
            type: sequelize_1.DataTypes.ENUM('GAME_EQUIPMENT', 'GAME_POTION', 'GAME_PET', 'REAL_REWARD'),
            allowNull: false,
            defaultValue: 'GAME_EQUIPMENT',
        },
        costGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        statsJson: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        icon: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '🗡️',
        },
        stock: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: -1, // -1 = ilimitado
        },
        isAvailable: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyShopItem',
        tableName: 'family_shop_items',
        timestamps: true,
    });
    return FamilyShopItem;
}
