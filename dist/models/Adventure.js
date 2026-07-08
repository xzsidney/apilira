"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adventure = void 0;
exports.initAdventure = initAdventure;
const sequelize_1 = require("sequelize");
// Aventura do sistema de RPG
class Adventure extends sequelize_1.Model {
}
exports.Adventure = Adventure;
function initAdventure(sequelize) {
    Adventure.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        objective: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'Adventure',
        freezeTableName: true,
        timestamps: true,
    });
    return Adventure;
}
