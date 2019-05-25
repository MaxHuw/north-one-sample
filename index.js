const express = require('express');
const { ApolloServer, gql } = require("apollo-server-express");
const schema = require("./schema");
const resolvers = require("./resolvers");
const db = require("./models");
const cors = require("cors");
const jwt = require("express-jwt");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser")


const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req, res }) => ({ 
    db: db,
    req: req,
    res: res
  })
});

const app = express();

server.applyMiddleware( {app } );

app.listen({ port: 4000 }, (req) =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
