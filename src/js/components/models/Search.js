import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = "";
    try {
      const res = await axios(
        `https://goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com/search?barcode=${this.query}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host":
              "goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "e78f1d3548mshff0c97cb4e84ad3p1d6525jsnfc557c1e640c"
          }
        }
      );
      this.result = res;
      console.log(this.result);
    } catch (error) {
      alert(error);
    }
  }
}
