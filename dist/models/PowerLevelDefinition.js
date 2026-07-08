"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerLevelDefinition = void 0;
exports.initPowerLevelDefinition = initPowerLevelDefinition;
const sequelize_1 = require("sequelize");
// Definição dos níveis de cada poder sobrenatural
class PowerLevelDefinition extends sequelize_1.Model {
}
exports.PowerLevelDefinition = PowerLevelDefinition;
function initPowerLevelDefinition(sequelize) {
    PowerLevelDefinition.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        powerDefinitionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        system: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'PowerLevelDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['powerDefinitionId', 'level', 'name'],
            },
        ],
    });
    return PowerLevelDefinition;
}
