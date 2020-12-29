'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => { // Roda migration
    return queryInterface.addColumn('Products', 'salary', {
      type: Sequelize.FLOAT,
    });
  },

  down: async (queryInterface, Sequelize) => { // Roda no Undo
    return queryInterface.removeColumn('Products', 'salary');
  },
};
