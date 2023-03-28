'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.State, {
        foreignKey: 'stateId',
      });
      this.hasMany(models.ChildShifts, {
        foreignKey: 'shiftId',
      });
    }
  }
  Shifts.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    startDate: DataTypes.STRING,
    finishDate: DataTypes.STRING,
    number: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shifts',
  });
  return Shifts;
};
