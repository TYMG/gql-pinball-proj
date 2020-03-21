const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    allPinballMachines: [Machine]!
    allOps: [Operator]
    allRegions: [Region]
    getLocationsByRegion(region: String): [Location]
  }

  #These are the canonical machine descriptions, not the location-centric ones
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

  type MachineXref {
    id: Int
    created_at: String
    updated_at: String
    location_id: Int
    machine_id: Int
    condition: String
    condition_date: String
    user_id: Int
    machine_score_xrefs_count: Int
    last_updated_by_username: String
    machine_conditions: [MachineCondition]
  }

  type MachineCondition {
    id: Int
    comment: String
    location_machine_xref_id: Int
    created_at: String
    updated_at: String
    user_id: Int
    username: String
  }

  type Region {
    id: Int
    name: String
    created_at: String
    updated_at: String
    full_name: String
    motd: String
    lat: String
    lon: String
    state: String
    effective_radius: Float
  }

  type Location {
    id: Int
    name: String
    street: String
    city: String
    state: String
    zip: String
    phone: String
    lat: String
    lon: String
    website: String
    created_at: String
    updated_at: String
    zone_id: Int
    region_id: Int
    location_type_id: Int
    description: String
    operator_id: String
    date_last_updated: String
    last_updated_by_user_id: Int
    is_stern_army: Boolean
    country: String
    distance: Float
    bearing: String
    num_machines: Int
    location_machine_xrefs: [MachineXref]
    machine_names: [String]
  }

  type Operator {
    id: Int
    name: String
    region_id: Int
    email: String
    website: String
    phone: String
    created_at: String
    updated_at: String
  }
`;

module.exports = typeDefs;
