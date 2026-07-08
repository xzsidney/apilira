"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Criminality = void 0;
exports.initCriminality = initCriminality;
const sequelize_1 = require("sequelize");
// Tipo de criminalidade presente em uma região
class Criminality extends sequelize_1.Model {
}
exports.Criminality = Criminality;
function initCriminality(sequelize) {
    Criminality.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        crimeType: {
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
        tableName: 'Criminality',
        freezeTableName: true,
        timestamps: false,
    });
    return Criminality;
}
