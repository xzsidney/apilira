"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionSkill = void 0;
exports.initDefinitionSkill = initDefinitionSkill;
const sequelize_1 = require("sequelize");
class DefinitionSkill extends sequelize_1.Model {
}
exports.DefinitionSkill = DefinitionSkill;
function initDefinitionSkill(sequelize) {
    DefinitionSkill.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.ENUM('TALENTOS', 'PERICIAS', 'CONHECIMENTOS'),
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
            defaultValue: 'TODOS',
        },
    }, {
        sequelize,
        tableName: 'DefinitionSkill',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionSkill;
}
