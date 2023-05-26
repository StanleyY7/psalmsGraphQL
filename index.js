const { ApolloServer } = require("apollo-server");
const PsalmApi = require("./datasource");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    psalmAPI: new PsalmApi(),
  }),
  engine: {
    reportSchema: true,
    variant: "current",
  },
});

server.listen().then(({ url }) => {
  console.log(`Psalms GraphQL API is working :), go to ${url}`);
});
