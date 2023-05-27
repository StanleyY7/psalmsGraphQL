const { ApolloServer } = require("apollo-server");
const resolvers = require("../resolvers");
const typeDefs = require("../schema");
const PsalmApi = require("../datasource");

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => ({
    psalmApi: new PsalmApi(),
  }),
  engine: {
    reportSchema: true,
    variant: "current",
  },
});

afterEach(() => {
  server.stop();
});

describe("Server tests", () => {
  test("Server should run", async () => {
    const { url } = await server.listen();
    expect(url).toBeDefined();
  });
});
