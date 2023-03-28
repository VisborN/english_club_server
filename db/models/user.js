'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.CounselorTasks, {
        foreignKey: 'counselorId',
      });
      this.hasMany(models.Tasks, {
        foreignKey: 'author',
      });
      this.hasMany(models.ChildShifts, {
        foreignKey: 'userId',
      });
      this.hasMany(models.ChildTasks, {
        foreignKey: 'userId',
      });
      this.hasMany(models.ChildAchives, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.State, {
        foreignKey: 'status',
      });
    }
  }
  User.init({
    fullName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    photo: DataTypes.STRING,
    points: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
