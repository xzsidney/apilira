"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireAttribute = void 0;
exports.initCharacterVampireAttribute = initCharacterVampireAttribute;
const sequelize_1 = require("sequelize");
class CharacterVampireAttribute extends sequelize_1.Model {
}
exports.CharacterVampireAttribute = CharacterVampireAttribute;
function initCharacterVampireAttribute(sequelize) {
    CharacterVampireAttribute.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionAttributeId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionAttribute', key: 'id' },
            onDelete: 'CASCADE',
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
    }, {
        sequelize,
        tableName: 'CharacterVampireAttribute',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireAttribute;
}
