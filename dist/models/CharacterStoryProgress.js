"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class CharacterStoryProgress extends sequelize_1.Model {
}
CharacterStoryProgress.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    characterId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    adventureId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    currentNodeId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'CharacterStoryProgress',
    tableName: 'character_story_progress',
    timestamps: true,
});
exports.default = CharacterStoryProgress;
