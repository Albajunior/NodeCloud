// 'use strict';

// /** @type {import('sequelize-cli').Migration} */

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     return queryInterface.changeColumn('Woods', 'type', {
//       type: Sequelize.STRING,
//       // Si vous autorisez la valeur NULL pour cette colonne
//     });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.changeColumn('Woods', 'type', {
//       type: Sequelize.ENUM('softwood', 'exotic wood', 'noble and hardwoods'),
    
//     });
//   }
// };