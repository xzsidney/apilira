"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const sequelize_1 = require("sequelize");
async function apply() {
    const queryInterface = models_1.sequelize.getQueryInterface();
    const cols = [
        { name: 'concept', type: sequelize_1.DataTypes.STRING },
        { name: 'nature', type: sequelize_1.DataTypes.STRING },
        { name: 'demeanor', type: sequelize_1.DataTypes.STRING },
        { name: 'chronicle', type: sequelize_1.DataTypes.STRING },
        { name: 'history', type: sequelize_1.DataTypes.TEXT },
        { name: 'roleplayHints', type: sequelize_1.DataTypes.TEXT },
        { name: 'health', type: sequelize_1.DataTypes.INTEGER, defaultValue: 7 },
        { name: 'maxHealth', type: sequelize_1.DataTypes.INTEGER, defaultValue: 7 },
        { name: 'willpower', type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
        { name: 'maxWillpower', type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
        { name: 'energy', type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
        { name: 'maxEnergy', type: sequelize_1.DataTypes.INTEGER, defaultValue: 1 },
        { name: 'vampireClaId', type: sequelize_1.DataTypes.STRING(36) },
        { name: 'werewolfTribeId', type: sequelize_1.DataTypes.STRING(36) },
        { name: 'mageTraditionId', type: sequelize_1.DataTypes.STRING(36) },
        { name: 'hunterCreedId', type: sequelize_1.DataTypes.STRING(36) }
    ];
    for (const c of cols) {
        try {
            await queryInterface.addColumn('Character', c.name, { type: c.type, defaultValue: c.defaultValue });
            console.log(`Coluna ${c.name} adicionada.`);
        }
        catch (e) {
            console.log(`Ignorando ${c.name}: ${e.message}`);
        }
    }
    process.exit(0);
}
apply();
