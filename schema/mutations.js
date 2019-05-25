const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Mutation {
    addTask(title: String, description: String, status: String, dueDate: Date, userId: Int, categoryId: Int): Boolean
    addSubtask(title: String, description: String, status: String, dueDate: Date, taskId: Int): Boolean
    deleteTask(id: Int): Boolean
    deleteSubtask(id: Int): Boolean
    editTask(id: Int, title: String, description: String, status: String, dueDate: Date, categoryId: Int): Boolean
    editSubtask(id: Int, title: String, description: String, status: String, dueDate: Date): Boolean

  }
`;