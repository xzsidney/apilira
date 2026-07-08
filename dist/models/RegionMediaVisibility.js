"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionMediaVisibility = void 0;
exports.initRegionMediaVisibility = initRegionMediaVisibility;
const sequelize_1 = require("sequelize");
// Tabela de junção: visibilidade midiática de uma região (sem coluna id)
class RegionMediaVisibility extends sequelize_1.Model {
}
exports.RegionMediaVisibility = RegionMediaVisibility;
function initRegionMediaVisibility(sequelize) {
    RegionMediaVisibility.init({
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        mediaVisibilityId: {
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
        tableName: 'RegionMediaVisibility',
        freezeTableName: true,
        timestamps: false,
    });
    // Remove a coluna id padrão do Sequelize
    RegionMediaVisibility.removeAttribute('id');
    return RegionMediaVisibility;
}
