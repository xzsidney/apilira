"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyBattleParticipant = void 0;
exports.initFamilyBattleParticipant = initFamilyBattleParticipant;
const sequelize_1 = require("sequelize");
class FamilyBattleParticipant extends sequelize_1.Model {
}
exports.FamilyBattleParticipant = FamilyBattleParticipant;
function initFamilyBattleParticipant(sequelize) {
    FamilyBattleParticipant.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        battleId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        turnOrder: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isDefending: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        currentStatus: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'FamilyBattleParticipant',
        tableName: 'family_battle_participants',
        timestamps: true,
    });
    return FamilyBattleParticipant;
}
