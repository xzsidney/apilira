"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyClassSkill = void 0;
exports.initFamilyClassSkill = initFamilyClassSkill;
const sequelize_1 = require("sequelize");
class FamilyClassSkill extends sequelize_1.Model {
}
exports.FamilyClassSkill = FamilyClassSkill;
function initFamilyClassSkill(sequelize) {
    FamilyClassSkill.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterClass: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        tier: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        icon: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: '⚡',
        },
        costXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        requiredSkillId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
        },
        effectType: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
            defaultValue: 'DAMAGE',
        },
        power: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20,
        },
        costMp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10,
        },
        orderIndex: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'FamilyClassSkill',
        tableName: 'family_class_skills',
        timestamps: true,
    });
    return FamilyClassSkill;
}
