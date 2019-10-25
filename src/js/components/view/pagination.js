import {elements} from "../utils/base";

const renderPagination = () => {
  const markup = `
    <div class="itemsrow__pagination">
    <div class="itemsrow__pagination__pagelimit">Page 1 of 1,172</div>
    <div class="itemsrow__pagination__list">
      <span class="page-1">1</span>
      <span>2</span>
      <span>3</span>
      <span>4</span>
      <span>5</span>
      <span>6</span>
      <span>7</span>
      <span>8</span>
      <span>9</span>
      <span>10</span>
    </div>
    <div class="itemsrow__pagination__next">NEXT</div>
  </div>
    `;
  elements.main.insertAdjacentHTML("beforeend", markup);
};

export const pageNumber = () => {
  renderPagination();
};
