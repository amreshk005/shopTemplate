import "../sass/base.scss";
import Search from "./components/models/Search";
import {circle1Event, circle2Event} from "./components/range";
import {elements} from "./components/utils/base";
import * as searchView from "./components/view/searchView";
import * as paginationView from "./components/view/pagination";
circle1Event();
circle2Event();

const state = {};
const controlSearch = async () => {
  const query = searchView.getInput();
  if (query) {
    state.search = new Search(query);
    await state.search.getResults();
    await searchView.renderResults(state.search.result);
    paginationView.pageNumber();
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

console.log(elements.searchForm);
