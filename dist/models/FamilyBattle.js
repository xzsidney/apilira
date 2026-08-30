"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyBattle = void 0;
exports.initFamilyBattle = initFamilyBattle;
const sequelize_1 = require("sequelize");
class FamilyBattle extends sequelize_1.Model {
}
exports.FamilyBattle = FamilyBattle;
function initFamilyBattle(sequelize) {
    FamilyBattle.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        title: {
            type: sequelize_1.DataTypes.STRING(150),
            allowNull: false,
        },
        monsterName: {
            type: sequelize_1.DataTypes.STRING(100),
            allowNull: false,
        },
        monsterAvatar: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true,
        },
        monsterHpCurrent: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 500,
        },
        monsterHpMax: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 500,
        },
        monsterAttack: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 20,
        },
        monsterDefense: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 5,
        },
        rewardXp: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 150,
        },
        rewardGold: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 50,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('IN_PROGRESS', 'VICTORY', 'DEFEAT'),
            allowNull: false,
            defaultValue: 'IN_PROGRESS',
        },
        currentTurnOrder: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
        activeTurnIndex: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        battleLogs: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
        },
    }, {
        sequelize,
        modelName: 'FamilyBattle',
        tableName: 'family_battles',
        timestamps: true,
    });
    return FamilyBattle;
}
