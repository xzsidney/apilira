"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusDefinition = void 0;
exports.initStatusDefinition = initStatusDefinition;
const sequelize_1 = require("sequelize");
// Definição de status (vida, vontade, etc.) por estilo de jogo
class StatusDefinition extends sequelize_1.Model {
}
exports.StatusDefinition = StatusDefinition;
function initStatusDefinition(sequelize) {
    StatusDefinition.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        maxValue: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        defaultInitialValue: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'StatusDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'gameStyle'],
            },
        ],
    });
    return StatusDefinition;
}
