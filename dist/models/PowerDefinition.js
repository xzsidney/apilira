"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerDefinition = void 0;
exports.initPowerDefinition = initPowerDefinition;
const sequelize_1 = require("sequelize");
// Definição de poderes sobrenaturais (Disciplinas, Dons, Esferas, Edges)
class PowerDefinition extends sequelize_1.Model {
}
exports.PowerDefinition = PowerDefinition;
function initPowerDefinition(sequelize) {
    PowerDefinition.init({
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
        type: {
            type: sequelize_1.DataTypes.ENUM('DISCIPLINE', 'GIFT', 'SPHERE', 'EDGE'),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'PowerDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'gameStyle'],
            },
        ],
    });
    return PowerDefinition;
}
