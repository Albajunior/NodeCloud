"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wood extends Model {
   
    static associate(models) {
      // define association here
      Wood.belongsTo(models.Hardness, {
        foreignKey: "hardnessId",
        as: "hardness"
      });
      Wood.belongsTo(models.Type, {
        foreignKey: "typeId",
        as: "type"
      });
    }
  }
  Wood.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      sequelize,
      modelName: "Wood",
    }
  );
  return Wood;
};
