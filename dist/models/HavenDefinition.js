"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HavenDefinition = void 0;
exports.initHavenDefinition = initHavenDefinition;
const sequelize_1 = require("sequelize");
// Definição de refúgios disponíveis no jogo
class HavenDefinition extends sequelize_1.Model {
}
exports.HavenDefinition = HavenDefinition;
function initHavenDefinition(sequelize) {
    HavenDefinition.init({
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
            allowNull: true,
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0.0,
        },
        securityLevel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        minionCapacity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        allyCapacity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        requiredBackgroundId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'HavenDefinition',
        freezeTableName: true,
        timestamps: true,
    });
    return HavenDefinition;
}
