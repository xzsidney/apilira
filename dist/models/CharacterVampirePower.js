"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampirePower = void 0;
exports.initCharacterVampirePower = initCharacterVampirePower;
const sequelize_1 = require("sequelize");
class CharacterVampirePower extends sequelize_1.Model {
}
exports.CharacterVampirePower = CharacterVampirePower;
function initCharacterVampirePower(sequelize) {
    CharacterVampirePower.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionDisciplinePowerId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionDisciplinePower', key: 'id' },
            onDelete: 'CASCADE',
        },
    }, {
        sequelize,
        tableName: 'CharacterVampirePower',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampirePower;
}
