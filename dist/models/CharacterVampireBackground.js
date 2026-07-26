"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireBackground = void 0;
exports.initCharacterVampireBackground = initCharacterVampireBackground;
const sequelize_1 = require("sequelize");
class CharacterVampireBackground extends sequelize_1.Model {
}
exports.CharacterVampireBackground = CharacterVampireBackground;
function initCharacterVampireBackground(sequelize) {
    CharacterVampireBackground.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionBackgroundId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionBackground', key: 'id' },
            onDelete: 'CASCADE',
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        details: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true, // Ex: Nome do contato, localização do refúgio
        },
    }, {
        sequelize,
        tableName: 'CharacterVampireBackground',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireBackground;
}
