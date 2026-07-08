"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaVisibility = void 0;
exports.initMediaVisibility = initMediaVisibility;
const sequelize_1 = require("sequelize");
// Visibilidade midiática de uma região
class MediaVisibility extends sequelize_1.Model {
}
exports.MediaVisibility = MediaVisibility;
function initMediaVisibility(sequelize) {
    MediaVisibility.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        mediaType: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        severity: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'MediaVisibility',
        freezeTableName: true,
        timestamps: false,
    });
    return MediaVisibility;
}
