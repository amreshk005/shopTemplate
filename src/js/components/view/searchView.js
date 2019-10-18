import {elements} from "../utils/base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = recipe => {
  const markup = `

    <div class="itemsrow__firstrow__items__firstitem">
      <div class="itemsrow__firstrow__items__firstitem__imagesection">
        <div class="itemsrow__firstrow__items__firstitem__imagesection__range">
          <img class="itemsrow__firstrow__items__firstitem__imagesection__range__image"
            src="${recipe.thumbnailImageUrl}" alt="bag-1">
        </div>
        <svg class="icon icon-heart" height="24" width="24" viewBox="0 0 20 16">
          <use xlink:href="#icon-heart"></use>
          <path
            d="M10 3.22l-0.61-0.6c-0.983-0.931-2.314-1.504-3.779-1.504-3.038 0-5.5 2.462-5.5 5.5 0 1.462 0.571 2.791 1.501 3.776l-0.002-0.003 8.39 8.39 8.39-8.4c0.928-0.983 1.499-2.312 1.499-3.774 0-3.038-2.462-5.5-5.5-5.5-1.465 0-2.796 0.573-3.782 1.506l0.003-0.002-0.61 0.61z">
          </path>
        </svg>

      </div>
      <div class="itemsrow__firstrow__items__firstitem__infosection">
        <span class="itemsrow__firstrow__items__firstitem__infosection__name">Asus 15.6* Laptop Bag</span>
        <span class="itemsrow__firstrow__items__firstitem__infosection__colour">Black</span>
        <div class="itemsrow__firstrow__items__firstitem__infosection__assuredlogo">
          <img height="18" src="./images/fa_8b4b59.png" alt="assuredlogo">
        </div>
        <div class="itemsrow__firstrow__items__firstitem__infosection__pricesection">
          <span class="price">&#8377;699</span>
          <span class="actualprice">1043
            <div class="cutoff"></div>
          </span>
          <span class="off">33%off</span>

        </div>
        <div class="addtocart">
          <button class="cartbtn" type="submit">
            <svg class="icon icon-shopping-cart" height="12" width="12" viewBox="0 0 20 20">
              <use xlink:href="#icon-shopping-cart"></use>
              <path
                d="M4 2h16l-3 9h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13v2h-13c-1.657 0-3-1.343-3-3s1.343-3 3-3v0h0.33l-1.33-4-1-3h-2v-2h3c0.552 0 1 0.448 1 1v0 1zM5 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0zM15 20c-1.105 0-2-0.895-2-2s0.895-2 2-2v0c1.105 0 2 0.895 2 2s-0.895 2-2 2v0z">
              </path>
            </svg>
            Addtocart</button>
        </div>
      </div>
    </div>
  
  `;

  elements.mainItem.insertAdjacentHTML("beforeend", markup);
};

const renderRecipeParent = () => {
  const markup = `
  <div class="itemsrow__firstrow">
  <div class="itemsrow__firstrow__items">
  </div>
</div> 
  `;
  elements.main.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = recipes => {
  // if (recipes[0] || recipes[1]) {
  //   recipes.forEach(el => renderRecipe(el));
  // }
  // renderRecipe(recipes);
  for (let i = 0; i <= recipes.length; i++) {
    if (i == 0 || i % 5 === 0) {
      renderRecipeParent();
    }
  }
  for (let i = 0; i < 4; i++) {
    renderRecipe(recipes[i]);
  }
};
