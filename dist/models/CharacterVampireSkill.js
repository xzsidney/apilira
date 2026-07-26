"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireSkill = void 0;
exports.initCharacterVampireSkill = initCharacterVampireSkill;
const sequelize_1 = require("sequelize");
class CharacterVampireSkill extends sequelize_1.Model {
}
exports.CharacterVampireSkill = CharacterVampireSkill;
function initCharacterVampireSkill(sequelize) {
    CharacterVampireSkill.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionSkillId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionSkill', key: 'id' },
            onDelete: 'CASCADE',
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
    }, {
        sequelize,
        tableName: 'CharacterVampireSkill',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireSkill;
}
