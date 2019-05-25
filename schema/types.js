const { gql } = require("apollo-server-express");

module.exports = `
  scalar Date

  type User {
    id: ID
    firstName: String
    lastName: String
    createdAt: Date
    updatedAt: Date
    email: String
    password: String
  }

  type Task {
    id: ID
    title: String
    description: String
    Status: String
    createdAt: Date
    updatedAt: Date
    dateDue: Date
    userId: ID
    categoryId: ID
    subtask: [Subtask]
  }

  type Subtask {
    id: ID
    title: String
    description: String
    status: String
    createdAt: Date
    updatedAt: Date
    dateDue: Date
    taskId: ID
  }
`;