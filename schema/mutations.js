const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Mutation {
    addTask(title: String, description: String, status: String, dueDate: Date, userId: Int, categoryId: Int): Boolean
  }
`;