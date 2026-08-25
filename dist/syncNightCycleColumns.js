"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const sequelize_1 = require("sequelize");
async function applyNightCycleColumns() {
    const queryInterface = models_1.sequelize.getQueryInterface();
    const cols = [
        { name: 'currentLocationId', type: sequelize_1.DataTypes.STRING(36), allowNull: true },
        { name: 'nightMinutesSpent', type: sequelize_1.DataTypes.INTEGER, defaultValue: 0, allowNull: false },
        { name: 'isRestingInHaven', type: sequelize_1.DataTypes.BOOLEAN, defaultValue: true, allowNull: false },
        { name: 'emergencyHavenType', type: sequelize_1.DataTypes.STRING(50), defaultValue: 'NONE', allowNull: false },
        { name: 'lastNightCycleDate', type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW, allowNull: false },
    ];
    console.log('Aplicando colunas de Ciclo Noturno e Trânsito na tabela CharacterVampire...');
    for (const c of cols) {
        try {
            await queryInterface.addColumn('CharacterVampire', c.name, {
                type: c.type,
                defaultValue: c.defaultValue,
                allowNull: c.allowNull !== undefined ? c.allowNull : true,
            });
            console.log(`✅ Coluna ${c.name} adicionada com sucesso.`);
        }
        catch (e) {
            console.log(`ℹ️ Coluna ${c.name} já existente ou ignorada: ${e.message}`);
        }
    }
    process.exit(0);
}
applyNightCycleColumns();
