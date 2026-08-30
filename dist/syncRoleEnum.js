"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
async function syncRoleEnum() {
    console.log('🔄 Atualizando ENUM da coluna role na tabela User para incluir LIRA...');
    try {
        await db_1.default.authenticate();
        console.log('✅ Conexão com o banco de dados OK.');
        await db_1.default.query(`
      ALTER TABLE \`User\` 
      MODIFY COLUMN \`role\` ENUM('ADMIN', 'MESTRE', 'JOGADOR', 'LIRA') NOT NULL DEFAULT 'JOGADOR';
    `);
        console.log('✅ ENUM da coluna role atualizado com sucesso! Opções: ADMIN, MESTRE, JOGADOR, LIRA.');
    }
    catch (error) {
        console.error('❌ Erro ao atualizar ENUM:', error);
    }
}
syncRoleEnum().then(() => {
    process.exit(0);
});
