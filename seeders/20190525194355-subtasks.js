'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subtasks', [
      {
        title: 'Wash toilet',
        description: 'Clean toilet with bleach.',
        status: 'Not started',
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: new Date(),
        taskId: 1
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subtasks', null, {});
  }
};
