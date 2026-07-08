"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wealth = void 0;
exports.initWealth = initWealth;
const sequelize_1 = require("sequelize");
// Nível de riqueza de uma região
class Wealth extends sequelize_1.Model {
}
exports.Wealth = Wealth;
function initWealth(sequelize) {
    Wealth.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        wealthType: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'Wealth',
        freezeTableName: true,
        timestamps: false,
    });
    return Wealth;
}
