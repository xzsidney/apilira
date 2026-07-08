"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterPowerSelection = void 0;
exports.initCharacterPowerSelection = initCharacterPowerSelection;
const sequelize_1 = require("sequelize");
// Seleções específicas de nível de poder para um personagem
class CharacterPowerSelection extends sequelize_1.Model {
}
exports.CharacterPowerSelection = CharacterPowerSelection;
function initCharacterPowerSelection(sequelize) {
    CharacterPowerSelection.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterPowerId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        powerLevelDefinitionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'CharacterPowerSelection',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterPowerId', 'powerLevelDefinitionId'],
            },
        ],
    });
    return CharacterPowerSelection;
}
