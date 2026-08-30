"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyTask = void 0;
exports.initFamilyTask = initFamilyTask;
const sequelize_1 = require("sequelize");
class FamilyTask extends sequelize_1.Model {
}
exports.FamilyTask = FamilyTask;
function initFamilyTask(sequelize) {
    FamilyTask.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        category: {
            type: sequelize_1.DataTypes.ENUM('CHORE', 'STUDY', 'VIRTUE', 'HEALTH'),
            allowNull: false,
            defaultValue: 'CHORE',
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        icon: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '🍽️',
        },
        cooldownHours: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 24,
        },
        isActive: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyTask',
        tableName: 'family_tasks',
        timestamps: true,
    });
    return FamilyTask;
}
