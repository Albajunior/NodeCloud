"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Woods", null, {});

    await queryInterface.removeColumn("Woods", "type");
    await queryInterface.removeColumn("Woods", "hardness");

    await queryInterface.addColumn("Woods", "typeId", {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Types",
        key: "id",
      },
      allowNull: false,
    });

    await queryInterface.addColumn("Woods", "hardnessId", {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "Hardnesses",
        key: "id",
      },
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint("Woods","Woods_hardnessId_foreign_idx" );
    await queryInterface.removeConstraint("Woods", "Woods_typeId_foreign_idx");
    await queryInterface.removeColumn("Woods", "typeId");
    await queryInterface.removeColumn("Woods", "hardnessId");
    await queryInterface.addColumn("Woods", "type", {
      type: Sequelize.ENUM,
      values: ["softwood", "exotic wood", "noble and hardwoods"],
    });

    await queryInterface.addColumn("Woods", "hardness", {
      type: Sequelize.ENUM,
      values: ["tender", "medium-hard", "hard"],
    });
    
  },
};
