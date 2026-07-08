"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterBackground = void 0;
exports.initCharacterBackground = initCharacterBackground;
const sequelize_1 = require("sequelize");
// Antecedentes associados a um personagem
class CharacterBackground extends sequelize_1.Model {
}
exports.CharacterBackground = CharacterBackground;
function initCharacterBackground(sequelize) {
    CharacterBackground.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        backgroundId: {
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
        tableName: 'CharacterBackground',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'backgroundId'],
            },
        ],
    });
    return CharacterBackground;
}
