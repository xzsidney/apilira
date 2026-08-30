import sequelize from './config/db';

async function syncRoleEnum() {
  console.log('🔄 Atualizando ENUM da coluna role na tabela User para incluir LIRA...');
  try {
    await sequelize.authenticate();
    console.log('✅ Conexão com o banco de dados OK.');

    await sequelize.query(`
      ALTER TABLE \`User\` 
      MODIFY COLUMN \`role\` ENUM('ADMIN', 'MESTRE', 'JOGADOR', 'LIRA') NOT NULL DEFAULT 'JOGADOR';
    `);

    console.log('✅ ENUM da coluna role atualizado com sucesso! Opções: ADMIN, MESTRE, JOGADOR, LIRA.');
  } catch (error) {
    console.error('❌ Erro ao atualizar ENUM:', error);
  }
}

syncRoleEnum().then(() => {
  process.exit(0);
});
