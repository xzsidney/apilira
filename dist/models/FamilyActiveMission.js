"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyActiveMission = void 0;
exports.initFamilyActiveMission = initFamilyActiveMission;
const sequelize_1 = require("sequelize");
class FamilyActiveMission extends sequelize_1.Model {
}
exports.FamilyActiveMission = FamilyActiveMission;
function initFamilyActiveMission(sequelize) {
    FamilyActiveMission.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        taskId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'STUDY',
        },
        durationMinutes: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15,
        },
        startedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        endsAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('IN_PROGRESS', 'COMPLETED', 'CANCELLED'),
            allowNull: false,
            defaultValue: 'IN_PROGRESS',
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 15,
        },
        focusScore: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
        },
        stages: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
            defaultValue: [],
        },
    }, {
        sequelize,
        modelName: 'FamilyActiveMission',
        tableName: 'family_active_missions',
        timestamps: true,
    });
    return FamilyActiveMission;
}
