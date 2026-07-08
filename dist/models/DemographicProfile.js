"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DemographicProfile = void 0;
exports.initDemographicProfile = initDemographicProfile;
const sequelize_1 = require("sequelize");
// Perfil demográfico de uma região
class DemographicProfile extends sequelize_1.Model {
}
exports.DemographicProfile = DemographicProfile;
function initDemographicProfile(sequelize) {
    DemographicProfile.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        species: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        socialClass: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        profession: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'DemographicProfile',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['species', 'socialClass', 'profession'],
            },
        ],
    });
    return DemographicProfile;
}
