"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemDefinition = void 0;
exports.initItemDefinition = initItemDefinition;
const sequelize_1 = require("sequelize");
// Definição de itens disponíveis no jogo
class ItemDefinition extends sequelize_1.Model {
}
exports.ItemDefinition = ItemDefinition;
function initItemDefinition(sequelize) {
    ItemDefinition.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        damageOrEffect: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        concealment: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        availability: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        value: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        requirements: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'ItemDefinition',
        freezeTableName: true,
        timestamps: true,
    });
    return ItemDefinition;
}
