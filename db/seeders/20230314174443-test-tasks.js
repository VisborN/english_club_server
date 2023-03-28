'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    photo: DataTypes.STRING,
    points: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
  }
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
      }], {});
    */

    await queryInterface.bulkInsert('Tasks', [{
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Task',
      body: 'body Task',
      points: 25,
      author: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};
