'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subtask = sequelize.define('Subtask', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    taskId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'task',
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
  Subtask.associate = function(models) {
    // associations can be defined here
  };
  return Subtask;
};