"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterItem = void 0;
exports.initCharacterItem = initCharacterItem;
const sequelize_1 = require("sequelize");
// Itens no inventário de um personagem
class CharacterItem extends sequelize_1.Model {
}
exports.CharacterItem = CharacterItem;
function initCharacterItem(sequelize) {
    CharacterItem.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        itemId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
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
    });
    return CharacterItem;
}
