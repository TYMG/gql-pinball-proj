const { gql } = require("apollo-server");

const typeDefs = gql`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean! #this field's value can never be null.
  }

  type Rocket {
    id: ID!
    name: String
    type: String
  }

  type User {
    id: ID!
    email: String!
    trips: [Launch]! #it's an array of the specified type. If an array has an exclamation point after it, the array cannot be null, but it can be empty.
  }

  type Mission {
    name: String
    missionPatch(size: PatchSize): String
  }

  enum PatchSize {
    SMALL
    LARGE
  }

  #You define your data graph's supported queries as fields of a special type called the Query type.
  type Query {
    launches: [Launch]!
    launch(id: ID!): Launch
    me: User
  }

  #Queries enable clients to fetch data, but not to modify data. To enable clients to modify data, our schema needs to define some mutations.
  #The Mutation type is a special type that's similar in structure to the Query type.
  type Mutation {
    bookTrips(launchIds: [ID]!): TripUpdateResponse!
    cancelTrip(launchId: ID!): TripUpdateResponse!
    login(email: String): String # login token
  }

  #A mutation's return type is entirely up to you, but we recommend defining special object types specifically for mutation responses.

  type TripUpdateResponse {
    success: Boolean!
    message: String
    launches: [Launch]
  }
`;

module.exports = typeDefs;
