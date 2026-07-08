"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionDemographic = void 0;
exports.initRegionDemographic = initRegionDemographic;
const sequelize_1 = require("sequelize");
// Tabela de junção: dados demográficos de uma região (sem coluna id)
class RegionDemographic extends sequelize_1.Model {
}
exports.RegionDemographic = RegionDemographic;
function initRegionDemographic(sequelize) {
    RegionDemographic.init({
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        demographicProfileId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        tableName: 'RegionDemographic',
        freezeTableName: true,
        timestamps: false,
    });
    // Remove a coluna id padrão do Sequelize
    RegionDemographic.removeAttribute('id');
    return RegionDemographic;
}
