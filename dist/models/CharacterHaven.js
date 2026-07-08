"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterHaven = void 0;
exports.initCharacterHaven = initCharacterHaven;
const sequelize_1 = require("sequelize");
// Refúgios pertencentes a um personagem em uma região
class CharacterHaven extends sequelize_1.Model {
}
exports.CharacterHaven = CharacterHaven;
function initCharacterHaven(sequelize) {
    CharacterHaven.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        havenDefinitionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'CharacterHaven',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterHaven;
}
