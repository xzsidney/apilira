"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Region = void 0;
exports.initRegion = initRegion;
const sequelize_1 = require("sequelize");
// Região do mundo de jogo com hierarquia (auto-referência)
class Region extends sequelize_1.Model {
}
exports.Region = Region;
function initRegion(sequelize) {
    Region.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        narrativeClimate: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        factionDomain: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        difficultyDomain: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        dangerLevel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        parentRegionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'Region',
        freezeTableName: true,
        timestamps: true,
    });
    return Region;
}
