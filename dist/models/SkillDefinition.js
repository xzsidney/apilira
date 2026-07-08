"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillDefinition = void 0;
exports.initSkillDefinition = initSkillDefinition;
const sequelize_1 = require("sequelize");
// Definição de habilidades disponíveis no sistema
class SkillDefinition extends sequelize_1.Model {
}
exports.SkillDefinition = SkillDefinition;
function initSkillDefinition(sequelize) {
    SkillDefinition.init({
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
        tableName: 'SkillDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'type'],
            },
        ],
    });
    return SkillDefinition;
}
