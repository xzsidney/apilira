"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionMeritFlaw = void 0;
exports.initDefinitionMeritFlaw = initDefinitionMeritFlaw;
const sequelize_1 = require("sequelize");
class DefinitionMeritFlaw extends sequelize_1.Model {
}
exports.DefinitionMeritFlaw = DefinitionMeritFlaw;
function initDefinitionMeritFlaw(sequelize) {
    DefinitionMeritFlaw.init({
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
            type: sequelize_1.DataTypes.ENUM('QUALIDADE', 'DEFEITO'),
            allowNull: false,
        },
        category: {
            type: sequelize_1.DataTypes.ENUM('FISICO', 'SOCIAL', 'MENTAL', 'SOBRENATURAL'),
            allowNull: false,
        },
        cost: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
            defaultValue: 'TODOS',
        },
    }, {
        sequelize,
        tableName: 'DefinitionMeritFlaw',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionMeritFlaw;
}
