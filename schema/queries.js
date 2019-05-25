const types = require("./types");
const { gql } = require("apollo-server-express");

module.exports = `
  type Query {
    user(id: Int!): User
  }
`;