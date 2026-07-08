"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
exports.initCharacter = initCharacter;
const sequelize_1 = require("sequelize");
// Modelo de Personagem (jogável ou NPC)
class Character extends sequelize_1.Model {
}
exports.Character = Character;
function initCharacter(sequelize) {
    Character.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        gameStyle: {
            type: sequelize_1.DataTypes.ENUM('VAMPIRE', 'WEREWOLF', 'MAGE', 'HUNTER'),
            allowNull: false,
        },
        experienceTotal: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        experienceSpent: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        isNpc: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        isTemplate: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        userId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: false,
        },
        avatarUrl: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        tableName: 'Character',
        freezeTableName: true,
        timestamps: true,
    });
    return Character;
}
