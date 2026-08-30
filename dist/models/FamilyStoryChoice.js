"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyStoryChoice = void 0;
exports.initFamilyStoryChoice = initFamilyStoryChoice;
const sequelize_1 = require("sequelize");
class FamilyStoryChoice extends sequelize_1.Model {
}
exports.FamilyStoryChoice = FamilyStoryChoice;
function initFamilyStoryChoice(sequelize) {
    FamilyStoryChoice.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        nodeRecordId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        text: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        targetNodeId: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        testAttribute: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: true,
        },
        difficulty: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        successNodeId: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: true,
        },
        failureNodeId: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: true,
        },
        orderIndex: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'FamilyStoryChoice',
        tableName: 'family_story_choices',
        timestamps: true,
    });
    return FamilyStoryChoice;
}
