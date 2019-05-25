const { gql } = require("apollo-server-express");

module.exports = `
  scalar Date

  type User {
    firstName: String
    lastName: String
    email: String
    password: String
  }
`;