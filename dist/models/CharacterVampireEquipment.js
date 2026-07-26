"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampireEquipment = void 0;
exports.initCharacterVampireEquipment = initCharacterVampireEquipment;
const sequelize_1 = require("sequelize");
class CharacterVampireEquipment extends sequelize_1.Model {
}
exports.CharacterVampireEquipment = CharacterVampireEquipment;
function initCharacterVampireEquipment(sequelize) {
    CharacterVampireEquipment.init({
        characterVampireId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'CharacterVampire', key: 'id' },
            onDelete: 'CASCADE',
        },
        definitionEquipmentId: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            references: { model: 'DefinitionEquipment', key: 'id' },
            onDelete: 'CASCADE',
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        equipped: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        tableName: 'CharacterVampireEquipment',
        freezeTableName: true,
        timestamps: false,
    });
    return CharacterVampireEquipment;
}
