// to create server
import { ApolloServer } from "@apollo/server";
// to listen on port
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.js";
import mongoose from "mongoose";
import resolvers from "./resolvers/index.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

mongoose
  .connect("mongodb://127.0.0.1:27017/graphql")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });
// create a new server instance with apollo server configuration
const server = new ApolloServer({
  // apollo server configuration has two properties and there is more but options
  // here we are defining our GraphQL schema(typeDefs) and resolvers
  // schema defines the types and fields our API supports
  // resolvers define the logic for resolving fields on types
  //   resolvers deal with dataBase to return the data to the client
  typeDefs: schema,
  resolvers,
  //   from options there is formatError to handle errors when
  //   errors occur during execution
  formatError: (err) => {
    console.error("Message", err.message);
    return err;
  },
});

const port = 3000;
// start the server
// start stand alone server return promise and take two arguments server and port number
startStandaloneServer(server, {
  listen: { port },
  // like middleware it executes when any query or mutation is work or any thing come from client
  //for example use for sure this is admain when i want to delete user from database
  context: ({ req }) => {
    try {
      const { authorization } = req.headers;
      if (authorization) {
        const decoded = jwt.verify(authorization, process.env.SECRET);
        // console.log(decoded);
        return decoded;
        /* every resolvers (query or mutation) has third parameter which i can use the return
        of this medleware */
      }
    } catch (err) {
      console.error("Error in context", err);
    }
  },
})
  .then(() => {
    console.log(`Server ready at ${port}`);
  })
  .catch((err) => console.log(err));
