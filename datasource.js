const { RESTDataSource } = require("apollo-datasource-rest");

class PsalmAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://restless-feather-6525.fly.dev/psalms";
  }

  async getPsalms({ id }) {
    const response = await this.get(`${this.baseURL}`);
    return this.psalmReducer(response, id);
  }

  psalmReducer(psalm, id) {
    return psalm
      .map((p) => ({
        id: p.id,
        verse: p.verse,
        version: p.version,
      }))
      .find((p) => id === p.id);
  }
}

module.exports = PsalmAPI;
