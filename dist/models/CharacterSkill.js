"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSkill = void 0;
exports.initCharacterSkill = initCharacterSkill;
const sequelize_1 = require("sequelize");
// Habilidades associadas a um personagem
class CharacterSkill extends sequelize_1.Model {
}
exports.CharacterSkill = CharacterSkill;
function initCharacterSkill(sequelize) {
    CharacterSkill.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        skillId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        specialty: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'CharacterSkill',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'skillId'],
            },
        ],
    });
    return CharacterSkill;
}
