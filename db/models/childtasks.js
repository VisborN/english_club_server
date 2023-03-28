'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildTasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Tasks, {
        foreignKey: 'taskId',
      });
      this.belongsTo(models.State, {
        foreignKey: 'stateId',
      });
    }
  }
  ChildTasks.init({
    userId: DataTypes.INTEGER,
    taskId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ChildTasks',
  });
  return ChildTasks;
};
