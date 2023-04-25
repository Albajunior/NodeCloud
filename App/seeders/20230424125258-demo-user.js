'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstname: 'Johnnn',
      lastname: 'Doett',
      email: "john.doe@mail.com",
      password: "123456",
      createdAt: new Date(),
      updatedAt: new Date()

    }], {});
  },
  
  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
    }
  };
