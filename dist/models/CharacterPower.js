"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterPower = void 0;
exports.initCharacterPower = initCharacterPower;
const sequelize_1 = require("sequelize");
// Poderes associados a um personagem
class CharacterPower extends sequelize_1.Model {
}
exports.CharacterPower = CharacterPower;
function initCharacterPower(sequelize) {
    CharacterPower.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        powerDefinitionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        sequelize,
        tableName: 'CharacterPower',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'powerDefinitionId'],
            },
        ],
    });
    return CharacterPower;
}
