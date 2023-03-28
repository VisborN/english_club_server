'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'author',
      });
      this.hasMany(models.ChildTasks, {
        foreignKey: 'taskId',
      });
    }
  }
  Tasks.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    photo: DataTypes.STRING,
    points: DataTypes.INTEGER,
    author: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  return Tasks;
};
