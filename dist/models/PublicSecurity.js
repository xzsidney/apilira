"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicSecurity = void 0;
exports.initPublicSecurity = initPublicSecurity;
const sequelize_1 = require("sequelize");
// Segurança pública de uma região
class PublicSecurity extends sequelize_1.Model {
}
exports.PublicSecurity = PublicSecurity;
function initPublicSecurity(sequelize) {
    PublicSecurity.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        securityType: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'PublicSecurity',
        freezeTableName: true,
        timestamps: false,
    });
    return PublicSecurity;
}
