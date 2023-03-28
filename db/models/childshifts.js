'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildShifts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Shifts, {
        foreignKey: 'shiftId',
      });
      this.belongsTo(models.State, {
        foreignKey: 'stateId',
      });
    }
  }
  ChildShifts.init({
    userId: DataTypes.INTEGER,
    shiftId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ChildShifts',
  });
  return ChildShifts;
};
