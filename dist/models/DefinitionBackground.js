"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionBackground = void 0;
exports.initDefinitionBackground = initDefinitionBackground;
const sequelize_1 = require("sequelize");
class DefinitionBackground extends sequelize_1.Model {
}
exports.DefinitionBackground = DefinitionBackground;
function initDefinitionBackground(sequelize) {
    DefinitionBackground.init({
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
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
            defaultValue: 'TODOS',
        },
    }, {
        sequelize,
        tableName: 'DefinitionBackground',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionBackground;
}
