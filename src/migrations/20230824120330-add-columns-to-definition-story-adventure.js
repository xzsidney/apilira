'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Coluna isPassive já foi criada em migração anterior, não será adicionada novamente
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    });
    await queryInterface.addColumn('definition_story_adventures', 'userId', {
      type: Sequelize.STRING(36),
      allowNull: false,
      defaultValue: '37339df8-b042-458d-8d9c-d15cf18adbd8',
      references: { model: 'User', key: 'id' },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('definition_story_adventures', 'isPassive');
    await queryInterface.removeColumn('definition_story_adventures', 'userId');
  },
};
