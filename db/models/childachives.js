'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChildAchives extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
      this.belongsTo(models.Achives, {
        foreignKey: 'achiveId',
      });
      this.belongsTo(models.State, {
        foreignKey: 'stateId',
      });
    }
  }
  ChildAchives.init({
    userId: DataTypes.INTEGER,
    achiveId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ChildAchives',
  });
  return ChildAchives;
};
