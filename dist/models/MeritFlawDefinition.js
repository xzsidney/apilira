"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeritFlawDefinition = void 0;
exports.initMeritFlawDefinition = initMeritFlawDefinition;
const sequelize_1 = require("sequelize");
// Definição de qualidades e defeitos
class MeritFlawDefinition extends sequelize_1.Model {
}
exports.MeritFlawDefinition = MeritFlawDefinition;
function initMeritFlawDefinition(sequelize) {
    MeritFlawDefinition.init({
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
            type: sequelize_1.DataTypes.ENUM('MERIT', 'FLAW'),
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        points: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        category: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        apiEffect: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'MeritFlawDefinition',
        freezeTableName: true,
        timestamps: true,
        indexes: [
            {
                unique: true,
                fields: ['name', 'gameStyle', 'type'],
            },
        ],
    });
    return MeritFlawDefinition;
}
