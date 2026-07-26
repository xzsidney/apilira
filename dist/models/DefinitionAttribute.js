"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionAttribute = void 0;
exports.initDefinitionAttribute = initDefinitionAttribute;
const sequelize_1 = require("sequelize");
class DefinitionAttribute extends sequelize_1.Model {
}
exports.DefinitionAttribute = DefinitionAttribute;
function initDefinitionAttribute(sequelize) {
    DefinitionAttribute.init({
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
            type: sequelize_1.DataTypes.ENUM('FISICO', 'SOCIAL', 'MENTAL'),
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
            defaultValue: 'TODOS',
        },
    }, {
        sequelize,
        tableName: 'DefinitionAttribute',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionAttribute;
}
