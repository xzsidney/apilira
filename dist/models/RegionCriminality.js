"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionCriminality = void 0;
exports.initRegionCriminality = initRegionCriminality;
const sequelize_1 = require("sequelize");
// Tabela de junção: criminalidade de uma região (sem coluna id)
class RegionCriminality extends sequelize_1.Model {
}
exports.RegionCriminality = RegionCriminality;
function initRegionCriminality(sequelize) {
    RegionCriminality.init({
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        criminalityId: {
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
        tableName: 'RegionCriminality',
        freezeTableName: true,
        timestamps: false,
    });
    // Remove a coluna id padrão do Sequelize
    RegionCriminality.removeAttribute('id');
    return RegionCriminality;
}
