"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class DefinitionStoryNode extends sequelize_1.Model {
}
DefinitionStoryNode.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    adventureId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    narrativeText: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    isEnding: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
    backgroundImageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    speakerName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    leftCharacterImageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    rightCharacterImageUrl: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'DefinitionStoryNode',
    tableName: 'definition_story_nodes',
    timestamps: true,
});
exports.default = DefinitionStoryNode;
