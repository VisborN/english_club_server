'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('States', [{
      status: 'didntStart',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'start',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'finish',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'performed',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'done',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'rejected',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'waiting',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'confirmed',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'notConfirmed',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'user',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'counselor',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      status: 'moder',
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

    await queryInterface.bulkDelete('States', null, {});
  }
};
