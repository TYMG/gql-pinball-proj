const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

// It then creates a new instance of ApolloServer and passes it the imported schema via the typeDefs property.
const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
