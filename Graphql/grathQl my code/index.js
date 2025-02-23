// to create server
import { ApolloServer } from "@apollo/server";
// to listen on port
import { startStandaloneServer } from "@apollo/server/standalone";
import schema from "./schema.js";
import resolvers from "./resolvers.js";

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
})
  .then(() => {
    console.log(`Server ready at ${port}`);
  })
  .catch((err) => console.log(err));
