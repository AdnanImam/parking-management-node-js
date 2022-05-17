'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  parking.init({
    level: DataTypes.STRING,
    slot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'parking',
    underscored: true,
  });
  return parking;
};