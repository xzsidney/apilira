"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const sequelize_1 = require("sequelize");
async function addAdditiveColumns() {
    const queryInterface = db_1.default.getQueryInterface();
    try {
        const tableDesc = await queryInterface.describeTable('definition_missions_idle');
        if (!tableDesc.userId) {
            console.log('Adicionando coluna userId em definition_missions_idle...');
            await queryInterface.addColumn('definition_missions_idle', 'userId', {
                type: sequelize_1.DataTypes.STRING(36),
                allowNull: true,
            });
            console.log('Coluna userId adicionada com sucesso em definition_missions_idle.');
        }
        else {
            console.log('Coluna userId já existe em definition_missions_idle.');
        }
        const advTableDesc = await queryInterface.describeTable('definition_story_adventures');
        if (!advTableDesc.userId) {
            console.log('Adicionando coluna userId em definition_story_adventures...');
            await queryInterface.addColumn('definition_story_adventures', 'userId', {
                type: sequelize_1.DataTypes.STRING(36),
                allowNull: true,
            });
            console.log('Coluna userId adicionada com sucesso em definition_story_adventures.');
        }
        else {
            console.log('Coluna userId já existe em definition_story_adventures.');
        }
        const battleTableDesc = await queryInterface.describeTable('family_battles');
        if (!battleTableDesc.gridPositions) {
            console.log('Adicionando coluna gridPositions em family_battles...');
            await queryInterface.addColumn('family_battles', 'gridPositions', {
                type: sequelize_1.DataTypes.JSON,
                allowNull: true,
            });
            console.log('Coluna gridPositions adicionada com sucesso em family_battles.');
        }
        else {
            console.log('Coluna gridPositions já existe em family_battles.');
        }
    }
    catch (error) {
        console.error('Erro ao verificar/adicionar coluna:', error.message);
    }
    finally {
        await db_1.default.close();
        process.exit(0);
    }
}
addAdditiveColumns();
