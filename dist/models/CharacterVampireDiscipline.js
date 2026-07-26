"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireDiscipline = void 0;
exports.initCharacterVampireDiscipline = initCharacterVampireDiscipline;
const sequelize_1 = require("sequelize");
class CharacterVampireDiscipline extends sequelize_1.Model {
}
exports.CharacterVampireDiscipline = CharacterVampireDiscipline;
function initCharacterVampireDiscipline(sequelize) {
    CharacterVampireDiscipline.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionDisciplineId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionDiscipline', key: 'id' },
            onDelete: 'CASCADE',
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1, // Geralmente começa em 1 se comprou
        },
    }, {
        sequelize,
        tableName: 'CharacterVampireDiscipline',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireDiscipline;
}
