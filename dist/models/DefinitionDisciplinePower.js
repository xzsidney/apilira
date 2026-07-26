"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionDisciplinePower = void 0;
exports.initDefinitionDisciplinePower = initDefinitionDisciplinePower;
const sequelize_1 = require("sequelize");
class DefinitionDisciplinePower extends sequelize_1.Model {
}
exports.DefinitionDisciplinePower = DefinitionDisciplinePower;
function initDefinitionDisciplinePower(sequelize) {
    DefinitionDisciplinePower.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        definitionDisciplineId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            references: {
                model: 'DefinitionDiscipline',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        costType: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Livre', // Free, Rouse, Blood, Willpower
        },
        costAmount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        duration: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        dicePool: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        systemNotes: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('VAMPIRE'),
            allowNull: false,
            defaultValue: 'VAMPIRE',
        },
    }, {
        sequelize,
        tableName: 'DefinitionDisciplinePower',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionDisciplinePower;
}
