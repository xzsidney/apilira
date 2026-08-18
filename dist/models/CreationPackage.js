"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationPackage = void 0;
exports.initCreationPackage = initCreationPackage;
const sequelize_1 = require("sequelize");
class CreationPackage extends sequelize_1.Model {
}
exports.CreationPackage = CreationPackage;
function initCreationPackage(sequelize) {
    CreationPackage.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        packageType: {
            type: sequelize_1.DataTypes.ENUM('PROFESSION', 'BACKGROUND_BUNDLE', 'PREDATOR_CHOICE'),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'CreationPackage',
        freezeTableName: true,
        timestamps: true,
    });
    return CreationPackage;
}
