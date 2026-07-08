"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterStatus = void 0;
exports.initCharacterStatus = initCharacterStatus;
const sequelize_1 = require("sequelize");
// Status atual de um personagem (ex: vida, vontade)
class CharacterStatus extends sequelize_1.Model {
}
exports.CharacterStatus = CharacterStatus;
function initCharacterStatus(sequelize) {
    CharacterStatus.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        characterId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        statusId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        value: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
    }, {
        sequelize,
        tableName: 'CharacterStatus',
        freezeTableName: true,
        timestamps: false,
        indexes: [
            {
                unique: true,
                fields: ['characterId', 'statusId'],
            },
        ],
    });
    return CharacterStatus;
}
