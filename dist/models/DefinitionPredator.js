"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionPredator = void 0;
exports.initDefinitionPredator = initDefinitionPredator;
const sequelize_1 = require("sequelize");
class DefinitionPredator extends sequelize_1.Model {
}
exports.DefinitionPredator = DefinitionPredator;
function initDefinitionPredator(sequelize) {
    DefinitionPredator.init({
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
        huntingPool: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        modifiers: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('VAMPIRE'),
            allowNull: false,
            defaultValue: 'VAMPIRE',
        },
    }, {
        sequelize,
        tableName: 'DefinitionPredator',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionPredator;
}
