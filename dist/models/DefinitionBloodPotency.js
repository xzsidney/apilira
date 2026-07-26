"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionBloodPotency = void 0;
exports.initDefinitionBloodPotency = initDefinitionBloodPotency;
const sequelize_1 = require("sequelize");
class DefinitionBloodPotency extends sequelize_1.Model {
}
exports.DefinitionBloodPotency = DefinitionBloodPotency;
function initDefinitionBloodPotency(sequelize) {
    DefinitionBloodPotency.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            unique: true, // Cada nível de 0 a 10 é único
        },
        bloodSurge: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        mendAmount: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        disciplineBonus: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        baneSeverity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        feedingPenalty: {
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
        tableName: 'DefinitionBloodPotency',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionBloodPotency;
}
