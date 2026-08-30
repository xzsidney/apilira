"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyStoryNode = void 0;
exports.initFamilyStoryNode = initFamilyStoryNode;
const sequelize_1 = require("sequelize");
class FamilyStoryNode extends sequelize_1.Model {
}
exports.FamilyStoryNode = FamilyStoryNode;
function initFamilyStoryNode(sequelize) {
    FamilyStoryNode.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        adventureId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        nodeId: {
            type: sequelize_1.DataTypes.STRING(50),
            allowNull: false,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        narration: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
        speakerName: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: true,
        },
        speakerAvatar: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
        bgImageUrl: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        isEnding: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        endingType: {
            type: sequelize_1.DataTypes.ENUM('VICTORY', 'DEFEAT', 'NEUTRAL'),
            allowNull: true,
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        modelName: 'FamilyStoryNode',
        tableName: 'family_story_nodes',
        timestamps: true,
    });
    return FamilyStoryNode;
}
