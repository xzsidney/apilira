"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
exports.initAction = initAction;
const sequelize_1 = require("sequelize");
// Ação disponível em uma cena
class Action extends sequelize_1.Model {
}
exports.Action = Action;
function initAction(sequelize) {
    Action.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        actionIdentifier: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        focus: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        testStr: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        difficulty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        tableName: 'Action',
        freezeTableName: true,
        timestamps: true,
    });
    return Action;
}
