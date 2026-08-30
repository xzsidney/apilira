"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyAchievement = void 0;
exports.initFamilyAchievement = initFamilyAchievement;
const sequelize_1 = require("sequelize");
class FamilyAchievement extends sequelize_1.Model {
}
exports.FamilyAchievement = FamilyAchievement;
function initFamilyAchievement(sequelize) {
    FamilyAchievement.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        icon: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '🏆',
        },
        category: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'GENERAL',
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20,
        },
        requiredCount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        sequelize,
        modelName: 'FamilyAchievement',
        tableName: 'family_achievements',
        timestamps: true,
    });
    return FamilyAchievement;
}
