'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tasks', [
      {
        title: 'Clean Bathroom',
        description: 'Clean bathrooms, including toilet and tub.',
        status: 'Not started',
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        userId: 1,
        categoryId: 2
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  }
};
