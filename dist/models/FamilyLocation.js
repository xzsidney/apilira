"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyLocation = void 0;
exports.initFamilyLocation = initFamilyLocation;
const sequelize_1 = require("sequelize");
class FamilyLocation extends sequelize_1.Model {
}
exports.FamilyLocation = FamilyLocation;
function initFamilyLocation(sequelize) {
    FamilyLocation.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.ENUM('HOUSE', 'NEIGHBORHOOD', 'SPECIAL'),
            allowNull: false,
            defaultValue: 'HOUSE',
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        icon: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '🏠',
        },
        bgImageUrl: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        orderIndex: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isUnlocked: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyLocation',
        tableName: 'family_locations',
        timestamps: true,
    });
    return FamilyLocation;
}
