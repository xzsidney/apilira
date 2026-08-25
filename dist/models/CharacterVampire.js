"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterVampire = void 0;
exports.initCharacterVampire = initCharacterVampire;
const sequelize_1 = require("sequelize");
class CharacterVampire extends sequelize_1.Model {
}
exports.CharacterVampire = CharacterVampire;
function initCharacterVampire(sequelize) {
    CharacterVampire.init({
        id: {
            type: sequelize_1.DataTypes.STRING(36),
            primaryKey: true,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        userId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
            references: { model: 'User', key: 'id' },
            onDelete: 'CASCADE',
        },
        isNpc: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        clanId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
            references: { model: 'DefinitionClan', key: 'id' },
            onDelete: 'SET NULL',
        },
        predatorId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
            references: { model: 'DefinitionPredator', key: 'id' },
            onDelete: 'SET NULL',
        },
        resonanceId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
            references: { model: 'DefinitionResonance', key: 'id' },
            onDelete: 'SET NULL',
        },
        bloodPotencyId: {
            type: sequelize_1.DataTypes.STRING(36),
            allowNull: true,
            references: { model: 'DefinitionBloodPotency', key: 'id' },
            onDelete: 'SET NULL',
        },
        name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
        concept: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        chronicle: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        ambition: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        sire: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        desire: { type: sequelize_1.DataTypes.STRING, allowNull: true },
        generation: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 12 },
        hunger: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
        humanity: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 7 },
        stains: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        healthMax: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 3 },
        healthDamageSuperficial: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        healthDamageAggravated: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        willpowerMax: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 3 },
        willpowerDamageSuperficial: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        willpowerDamageAggravated: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        chronicleTenets: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
        touchstones: { type: sequelize_1.DataTypes.JSON, allowNull: true },
        convictions: { type: sequelize_1.DataTypes.JSON, allowNull: true },
        trueAge: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
        apparentAge: { type: sequelize_1.DataTypes.INTEGER, allowNull: true },
        dateOfBirth: { type: sequelize_1.DataTypes.DATEONLY, allowNull: true },
        dateOfDeath: { type: sequelize_1.DataTypes.DATEONLY, allowNull: true },
        appearance: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
        avatarUrl: { type: sequelize_1.DataTypes.TEXT('long'), allowNull: true },
        distinguishingFeatures: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
        history: { type: sequelize_1.DataTypes.TEXT, allowNull: true },
        experienceTotal: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        experienceSpent: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        money: { type: sequelize_1.DataTypes.INTEGER, allowNull: false, defaultValue: 0 },
        isAwake: { type: sequelize_1.DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    }, {
        sequelize,
        tableName: 'CharacterVampire',
        freezeTableName: true,
        timestamps: true,
    });
    return CharacterVampire;
}
