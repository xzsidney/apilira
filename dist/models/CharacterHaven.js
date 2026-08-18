"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class CharacterHaven extends sequelize_1.Model {
}
CharacterHaven.init({
    id: {
        type: sequelize_1.DataTypes.STRING(36),
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    characterId: {
        type: sequelize_1.DataTypes.STRING(36),
        allowNull: false,
    },
    locationId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
    },
    securityLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
    },
    luxuryLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 1,
        allowNull: false,
    },
    attributes: {
        type: sequelize_1.DataTypes.JSON,
        defaultValue: {},
    },
}, {
    sequelize: database_1.default,
    modelName: 'CharacterHaven',
    tableName: 'character_havens',
    timestamps: true,
});
exports.default = CharacterHaven;
