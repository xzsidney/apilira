"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class DefinitionStoryAdventure extends sequelize_1.Model {
}
DefinitionStoryAdventure.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: true,
        references: { model: 'User', key: 'id' },
    },
    firstNodeId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: true,
    },
    maxCompletions: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
    }
}, {
    sequelize: database_1.default,
    modelName: 'DefinitionStoryAdventure',
    tableName: 'definition_story_adventures',
    timestamps: true,
});
exports.default = DefinitionStoryAdventure;
