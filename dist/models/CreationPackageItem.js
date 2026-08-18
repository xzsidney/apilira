"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationPackageItem = void 0;
exports.initCreationPackageItem = initCreationPackageItem;
const sequelize_1 = require("sequelize");
class CreationPackageItem extends sequelize_1.Model {
}
exports.CreationPackageItem = CreationPackageItem;
function initCreationPackageItem(sequelize) {
    CreationPackageItem.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        packageId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            references: {
                model: 'CreationPackage',
                key: 'id',
            },
            onDelete: 'CASCADE',
        },
        itemType: {
            type: sequelize_1.DataTypes.ENUM('ATTRIBUTE', 'SKILL', 'BACKGROUND', 'MERIT', 'FLAW', 'CLAN_ALLOWED', 'CLAN_RESTRICTION', 'PREDATOR'),
            allowNull: false,
        },
        referenceId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
            comment: 'UUID da biblioteca correspondente (Ex: ID da DefinitionAttribute)'
        },
        amount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            comment: 'Quantidade concedida ou exigida'
        },
    }, {
        sequelize,
        tableName: 'CreationPackageItem',
        freezeTableName: true,
        timestamps: true,
    });
    return CreationPackageItem;
}
