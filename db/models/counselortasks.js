'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CounselorTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'counselorId',
      });
      this.belongsTo(models.Tasks, {
        foreignKey: 'taskId',
      });
    }
  }
  CounselorTasks.init({
    counselorId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'CounselorTasks',
  });
  return CounselorTasks;
};
