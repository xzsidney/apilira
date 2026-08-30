"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyCharacterSkill = void 0;
exports.initFamilyCharacterSkill = initFamilyCharacterSkill;
const sequelize_1 = require("sequelize");
class FamilyCharacterSkill extends sequelize_1.Model {
}
exports.FamilyCharacterSkill = FamilyCharacterSkill;
function initFamilyCharacterSkill(sequelize) {
    FamilyCharacterSkill.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        skillId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        unlockedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        isEquipped: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    }, {
        sequelize,
        modelName: 'FamilyCharacterSkill',
        tableName: 'family_character_skills',
        timestamps: true,
    });
    return FamilyCharacterSkill;
}
