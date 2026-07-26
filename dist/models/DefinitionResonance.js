"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionResonance = void 0;
exports.initDefinitionResonance = initDefinitionResonance;
const sequelize_1 = require("sequelize");
class DefinitionResonance extends sequelize_1.Model {
}
exports.DefinitionResonance = DefinitionResonance;
function initDefinitionResonance(sequelize) {
    DefinitionResonance.init({
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
        disciplines: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('VAMPIRE'),
            allowNull: false,
            defaultValue: 'VAMPIRE',
        },
    }, {
        sequelize,
        tableName: 'DefinitionResonance',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionResonance;
}
