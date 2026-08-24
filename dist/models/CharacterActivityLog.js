"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class CharacterActivityLog extends sequelize_1.Model {
}
CharacterActivityLog.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    characterId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    activityType: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    referenceId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    resultData: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: true,
        defaultValue: {},
    }
}, {
    sequelize: database_1.default,
    modelName: 'CharacterActivityLog',
    tableName: 'character_activity_logs',
    timestamps: true,
});
exports.default = CharacterActivityLog;
