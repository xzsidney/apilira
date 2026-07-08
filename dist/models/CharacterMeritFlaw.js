"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterMeritFlaw = void 0;
exports.initCharacterMeritFlaw = initCharacterMeritFlaw;
const sequelize_1 = require("sequelize");
// Qualidades e defeitos associados a um personagem
class CharacterMeritFlaw extends sequelize_1.Model {
}
exports.CharacterMeritFlaw = CharacterMeritFlaw;
function initCharacterMeritFlaw(sequelize) {
    CharacterMeritFlaw.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        meritFlawId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        points: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'CharacterMeritFlaw',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'meritFlawId'],
            },
        ],
    });
    return CharacterMeritFlaw;
}
