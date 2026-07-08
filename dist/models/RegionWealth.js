"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionWealth = void 0;
exports.initRegionWealth = initRegionWealth;
const sequelize_1 = require("sequelize");
// Tabela de junção: riqueza de uma região (sem coluna id)
class RegionWealth extends sequelize_1.Model {
}
exports.RegionWealth = RegionWealth;
function initRegionWealth(sequelize) {
    RegionWealth.init({
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        wealthId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        testDifficulty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'RegionWealth',
        freezeTableName: true,
        timestamps: false,
    });
    // Remove a coluna id padrão do Sequelize
    RegionWealth.removeAttribute('id');
    return RegionWealth;
}
