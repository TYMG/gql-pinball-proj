const { RESTDataSource } = require("apollo-datasource-rest");

class PinballMachineAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://pinballmap.com/api/v1";
  }

  // leaving this inside the class to make the class easier to test
  pinballMachineReducer(pin) {
    return {
      id: pin.id,
      name: pin.name,
      is_active: pin.is_active,
      created_at: pin.created_at,
      updated_at: pin.updated_at,
      ipdb_link: pin.ipdb_link,
      year: pin.year,
      manufacturer: pin.manufacturer,
      machine_group_id: pin.machine_group_id,
      ipdb_id: pin.ipdb_id,
      opdb_id: pin.opdb_id
    };
  }
  operatorReducer(op) {
    return {
      id: op.id
    };
  }

  async getAllMachines() {
    const response = await this.get(`/machines.json`);
    // transform the raw launches to a more friendly
    console.log(Array.isArray(response["machines"]));
    let returnArray = [];
    if (response) {
      response["machines"].forEach(element => {
        //console.log("test", element);
        returnArray.push(this.pinballMachineReducer(element));
      });
      return returnArray;
    } /*  Array.isArray(response)
      ? response.map(machine => this.pinballMachineReducer(machine))
      : []; */
  }

  async getAllOperators() {
    const response = await this.get(`/machines.json`);
    // transform the raw launches to a more friendly
    return Array.isArray(response)
      ? response.map(op => this.operatorReducer(op))
      : [];
  }

  /*   async getLaunchById({ launchId }) {
    const res = await this.get("launches", { flight_number: launchId });
    return this.launchReducer(res[0]);
  }

  async getLaunchesByIds({ launchIds }) {
    return Promise.all(
      launchIds.map(launchId => this.getLaunchById({ launchId }))
    );
  } */
}

module.exports = PinballMachineAPI;
