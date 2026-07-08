"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttributeDefinition = void 0;
exports.initAttributeDefinition = initAttributeDefinition;
const sequelize_1 = require("sequelize");
// Definição de atributos disponíveis no sistema
class AttributeDefinition extends sequelize_1.Model {
}
exports.AttributeDefinition = AttributeDefinition;
function initAttributeDefinition(sequelize) {
    AttributeDefinition.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'AttributeDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'type'],
            },
        ],
    });
    return AttributeDefinition;
}
