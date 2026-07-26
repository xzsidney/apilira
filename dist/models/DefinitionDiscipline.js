"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionDiscipline = void 0;
exports.initDefinitionDiscipline = initDefinitionDiscipline;
const sequelize_1 = require("sequelize");
class DefinitionDiscipline extends sequelize_1.Model {
}
exports.DefinitionDiscipline = DefinitionDiscipline;
function initDefinitionDiscipline(sequelize) {
    DefinitionDiscipline.init({
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
            type: sequelize_1.DataTypes.ENUM('VAMPIRE'),
            allowNull: false,
            defaultValue: 'VAMPIRE',
        },
    }, {
        sequelize,
        tableName: 'DefinitionDiscipline',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionDiscipline;
}
