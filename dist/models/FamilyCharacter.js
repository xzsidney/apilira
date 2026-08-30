"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyCharacter = void 0;
exports.initFamilyCharacter = initFamilyCharacter;
const sequelize_1 = require("sequelize");
class FamilyCharacter extends sequelize_1.Model {
}
exports.FamilyCharacter = FamilyCharacter;
function initFamilyCharacter(sequelize) {
    FamilyCharacter.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        userId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        characterClass: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'GUERREIRO',
        },
        title: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        avatarUrl: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
        level: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        currentXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        nextLevelXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
        },
        gold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        hpCurrent: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
        },
        hpMax: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 100,
        },
        mpCurrent: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        mpMax: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        strength: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        vitality: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        agility: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        wisdom: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        heartBond: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        equippedWeapon: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'Espada de Madeira',
        },
        equippedArmor: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'Túnica de Linho',
        },
        equippedPet: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        isParent: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        orderIndex: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'FamilyCharacter',
        tableName: 'family_characters',
        timestamps: true,
    });
    return FamilyCharacter;
}
