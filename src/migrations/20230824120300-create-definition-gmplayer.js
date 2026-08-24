'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('definition_gm_player', {
      id: { type: Sequelize.STRING(36), primaryKey: true, defaultValue: Sequelize.UUIDV4 },
      gmUserId: { type: Sequelize.STRING(36), allowNull: false, references: { model: 'User', key: 'id' } },
      playerUserId: { type: Sequelize.STRING(36), allowNull: false, references: { model: 'User', key: 'id' } },
      role: { type: Sequelize.STRING, allowNull: false, defaultValue: 'PLAYER' },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
      deletedAt: { type: Sequelize.DATE, allowNull: true },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('definition_gm_player');
  },
};
