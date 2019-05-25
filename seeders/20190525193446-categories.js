'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        title: 'Work',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'House Chores',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Workout',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hobbies',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
