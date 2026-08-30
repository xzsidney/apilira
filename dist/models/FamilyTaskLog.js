"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyTaskLog = void 0;
exports.initFamilyTaskLog = initFamilyTaskLog;
const sequelize_1 = require("sequelize");
class FamilyTaskLog extends sequelize_1.Model {
}
exports.FamilyTaskLog = FamilyTaskLog;
function initFamilyTaskLog(sequelize) {
    FamilyTaskLog.init({
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
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('PENDING_APPROVAL', 'APPROVED', 'REJECTED'),
            allowNull: false,
            defaultValue: 'PENDING_APPROVAL',
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyTaskLog',
        tableName: 'family_task_logs',
        timestamps: true,
    });
    return FamilyTaskLog;
}
