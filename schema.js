const { gql } = require("apollo-server");

const typeDefs = gql`
  # psalms schema
  type Psalm {
    id: Int!
    verse: [String!]!
    version: String!
  }
  # queries
  type Query {
    psalm(id: Int!): Psalm
  }
`;

module.exports = typeDefs;
