"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class CharacterActiveMission extends sequelize_1.Model {
}
CharacterActiveMission.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    characterId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    definitionMissionIdleId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    startedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    expiresAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'IN_PROGRESS',
        allowNull: false,
    },
    reportJson: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: true,
    },
    stepDurationMinutes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
    }
}, {
    sequelize: database_1.default,
    modelName: 'CharacterActiveMission',
    tableName: 'character_active_missions',
    timestamps: true,
});
exports.default = CharacterActiveMission;
