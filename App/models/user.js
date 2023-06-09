"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "This field is required" },
        },
      },

      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "This field is required" },
        },
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        isEmail: true,
        unique: true,
        validate: {
          notNull: { msg: "This field is required" },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "This field is required" },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
