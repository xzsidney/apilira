"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionClan = void 0;
exports.initDefinitionClan = initDefinitionClan;
const sequelize_1 = require("sequelize");
class DefinitionClan extends sequelize_1.Model {
}
exports.DefinitionClan = DefinitionClan;
function initDefinitionClan(sequelize) {
    DefinitionClan.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        sect: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        weakness: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        disciplines: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('VAMPIRE'),
            allowNull: false,
            defaultValue: 'VAMPIRE',
        },
    }, {
        sequelize,
        tableName: 'DefinitionClan',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionClan;
}
