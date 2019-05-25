'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    },
    status: {
      allowNull: false,
      type: DataTypes.STRING
    },
    dueDate: {
      type: DataTypes.DATE
    }
  }, {});
  Task.associate = function(models) {
    Task.belongsTo(models.Category, {as: 'category', foreignKey: 'categoryId'})
    Task.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})
    Task.hasMany(models.Subtask, {as: 'subtask', foreignKey: 'taskId'})
  };
  return Task;
};