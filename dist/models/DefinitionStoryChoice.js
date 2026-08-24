"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class DefinitionStoryChoice extends sequelize_1.Model {
}
DefinitionStoryChoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    nodeId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    choiceText: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    attributeReq: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    skillReq: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    difficulty: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    successNodeId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: true,
    },
    failureNodeId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: true,
    },
    customStyle: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'DefinitionStoryChoice',
    tableName: 'definition_story_choices',
    timestamps: true,
});
exports.default = DefinitionStoryChoice;
