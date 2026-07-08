"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionPublicSecurity = void 0;
exports.initRegionPublicSecurity = initRegionPublicSecurity;
const sequelize_1 = require("sequelize");
// Tabela de junção: segurança pública de uma região (sem coluna id)
class RegionPublicSecurity extends sequelize_1.Model {
}
exports.RegionPublicSecurity = RegionPublicSecurity;
function initRegionPublicSecurity(sequelize) {
    RegionPublicSecurity.init({
        regionId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
        },
        publicSecurityId: {
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
        tableName: 'RegionPublicSecurity',
        freezeTableName: true,
        timestamps: false,
    });
    // Remove a coluna id padrão do Sequelize
    RegionPublicSecurity.removeAttribute('id');
    return RegionPublicSecurity;
}
