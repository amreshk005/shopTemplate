import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = "";

    try {
      const res = await axios(
        `https://zappos1.p.rapidapi.com/products/list?query=${this.query}&sort=relevance%2Fdesc&page=2&limit=100`,
        {
          method: "POST",
          headers: {
            "x-rapidapi-host": "zappos1.p.rapidapi.com",
            "x-rapidapi-key":
              "e78f1d3548mshff0c97cb4e84ad3p1d6525jsnfc557c1e640c",
            "content-type": "application/json",
            accept: "application/json"
          },
          body: [
            {
              facetField: "zc1",
              values: ["Clothing"]
            },
            {
              facetField: "zc2",
              values: ["Swimwear", "Underwear & Intimates"]
            },
            {
              facetField: "txAttrFacet_Gender",
              values: ["Women", "Girls"]
            }
          ]
        }
      );
      this.result = res.data.results;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
