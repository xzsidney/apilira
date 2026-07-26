"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitionEquipment = void 0;
exports.initDefinitionEquipment = initDefinitionEquipment;
const sequelize_1 = require("sequelize");
class DefinitionEquipment extends sequelize_1.Model {
}
exports.DefinitionEquipment = DefinitionEquipment;
function initDefinitionEquipment(sequelize) {
    DefinitionEquipment.init({
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
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.ENUM('ARMA_FOGO', 'ARMA_BRANCA', 'ARMA_ARREMESSO', 'EXPLOSIVO', 'ARMADURA', 'OUTROS'),
            allowNull: false,
        },
        damage: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        concealment: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        range: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        rateOfFire: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        clip: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        minimumStrength: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        armorLevel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        armorPenalty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        cost: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('TODOS', 'VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
            defaultValue: 'TODOS',
        },
    }, {
        sequelize,
        tableName: 'DefinitionEquipment',
        freezeTableName: true,
        timestamps: true,
    });
    return DefinitionEquipment;
}
