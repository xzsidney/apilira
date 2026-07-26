"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireMeritFlaw = void 0;
exports.initCharacterVampireMeritFlaw = initCharacterVampireMeritFlaw;
const sequelize_1 = require("sequelize");
class CharacterVampireMeritFlaw extends sequelize_1.Model {
}
exports.CharacterVampireMeritFlaw = CharacterVampireMeritFlaw;
function initCharacterVampireMeritFlaw(sequelize) {
    CharacterVampireMeritFlaw.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionMeritFlawId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionMeritFlaw', key: 'id' },
            onDelete: 'CASCADE',
        },
        details: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'CharacterVampireMeritFlaw',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireMeritFlaw;
}
