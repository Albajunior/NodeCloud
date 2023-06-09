const bcrypt = require('bcrypt');

'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  
  async up(queryInterface, Sequelize) {
    const hashedPass = await bcrypt.hash("123456", 10);
    await queryInterface.bulkInsert('Users', [{
      firstname: 'John',
      lastname: 'Doe',
      email: "john.dobee222@mail.com",
      password: hashedPass 
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

