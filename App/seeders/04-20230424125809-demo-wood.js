const { Hardness } = require("../models");
const { Type } = require("../models");
"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

  const softwood = await Type.findOne({ where: { name: 'softwood'}});
  const exoticWood = await Type.findOne({ where: { name: 'exotic wood'}});
  const nobleAndHard = await Type.findOne({ where: { name: 'noble And Hardwoods'}});

  const tender = await Hardness.findOne({ where: { name: 'tender'}});
  const mediumHard = await Hardness.findOne({ where: { name: 'medium-hard'}});
  const hard = await Hardness.findOne({ where: { name: 'hard'}});

    await queryInterface.bulkInsert(
      "Woods",
      [
        {
          name: "Épicéa",
          typeId: softwood.id,
          hardnessId: mediumHard.id,
        },
        {
          name: "qwerty",
          typeId: exoticWood.id,
          hardnessId: tender.id,
        },
        {
          name: "azerty",
          typeId: nobleAndHard.id,
          hardnessId: hard.id,
        },
        {
          name: "Épicéa2",
          typeId: softwood.id,
          hardnessId: mediumHard.id,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Wood", null, {});
  },
};
