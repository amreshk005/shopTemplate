import "../sass/base.scss";
import Search from "./components/models/Search";
import {circle1Event, circle2Event} from "./components/range";
circle1Event();
circle2Event();

const state = {};
const controleSearch = async () => {
  const query = "823734014026";
  state.search = new Search(query);
  await state.search.getResults();
};
controleSearch();
fetch(
  "https://goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com/search?barcode=823734014026",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host":
        "goodfoods-search-grocery-product-reviews-by-barcode-v1.p.rapidapi.com",
      "x-rapidapi-key": "e78f1d3548mshff0c97cb4e84ad3p1d6525jsnfc557c1e640c"
    }
  }
)
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
