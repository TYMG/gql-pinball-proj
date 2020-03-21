const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    allPinballMachines: [Machine]!
    allOps: [Operator]
  }

  type Machine {
    id: Int!
    name: String
    is_active: String
    created_at: String
    updated_at: String
    ipdb_link: String
    year: Int
    manufacturer: String
    machine_group_id: Int
    ipdb_id: Int
    opdb_id: String
  }

  type Operator {
    id: Int
  }
`;

module.exports = typeDefs;
