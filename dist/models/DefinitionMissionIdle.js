"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class DefinitionMissionIdle extends sequelize_1.Model {
}
DefinitionMissionIdle.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'User', key: 'id' },
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    durationMinutes: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    baseDifficulty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    allowedRequirements: {
        type: sequelize_1.DataTypes.JSON,
        defaultValue: {},
    },
    rewardsJson: {
        type: sequelize_1.DataTypes.JSON,
        defaultValue: {},
    },
    penaltiesJson: {
        type: sequelize_1.DataTypes.JSON,
        defaultValue: {},
    },
    category: {
        type: sequelize_1.DataTypes.STRING(50),
        defaultValue: 'OPERATION',
    },
    maxCompletions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    }
}, {
    sequelize: database_1.default,
    modelName: 'DefinitionMissionIdle',
    tableName: 'definition_missions_idle',
    timestamps: true,
});
exports.default = DefinitionMissionIdle;
