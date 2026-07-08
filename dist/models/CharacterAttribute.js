"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterAttribute = void 0;
exports.initCharacterAttribute = initCharacterAttribute;
const sequelize_1 = require("sequelize");
// Atributos associados a um personagem
class CharacterAttribute extends sequelize_1.Model {
}
exports.CharacterAttribute = CharacterAttribute;
function initCharacterAttribute(sequelize) {
    CharacterAttribute.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        attributeId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
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
        tableName: 'CharacterAttribute',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'attributeId'],
            },
        ],
    });
    return CharacterAttribute;
}
