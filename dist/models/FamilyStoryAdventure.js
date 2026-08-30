"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyStoryAdventure = void 0;
exports.initFamilyStoryAdventure = initFamilyStoryAdventure;
const sequelize_1 = require("sequelize");
class FamilyStoryAdventure extends sequelize_1.Model {
}
exports.FamilyStoryAdventure = FamilyStoryAdventure;
function initFamilyStoryAdventure(sequelize) {
    FamilyStoryAdventure.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        summary: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        coverImageUrl: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        initialNodeId: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        recommendedLevel: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 80,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 25,
        },
        isActive: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyStoryAdventure',
        tableName: 'family_story_adventures',
        timestamps: true,
    });
    return FamilyStoryAdventure;
}
