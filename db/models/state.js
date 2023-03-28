'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Shifts, {
        foreignKey: 'stateId',
      });
      this.hasMany(models.ChildShifts, {
        foreignKey: 'stateId',
      });
      this.hasMany(models.ChildTasks, {
        foreignKey: 'stateId',
      });
      this.hasMany(models.ChildAchives, {
        foreignKey: 'stateId',
      });
      this.hasMany(models.User, {
        foreignKey: 'status',
      });
    }
  }
  State.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};
