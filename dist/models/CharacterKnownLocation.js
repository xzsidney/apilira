"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class CharacterKnownLocation extends sequelize_1.Model {
}
CharacterKnownLocation.init({
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
    status: {
        type: sequelize_1.DataTypes.ENUM('DISCOVERED', 'DOMINATED', 'HOSTILE'),
        defaultValue: 'DISCOVERED',
        allowNull: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'CharacterKnownLocation',
    tableName: 'character_known_locations',
    timestamps: true,
});
exports.default = CharacterKnownLocation;
