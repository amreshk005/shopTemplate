import {elements} from "../utils/base";

export const getInput = () => elements.searchInput.value;

const renderRecipe = (recipe, itemrow, mapitem) => {
  let mainItem = document.querySelector(`.itemsrow__${itemrow}__items`);

  const markup = `

    <div class="itemsrow__${itemrow}__items__${mapitem}">
      <div class="itemsrow__${itemrow}__items__${mapitem}__imagesection">
        <div class="itemsrow__${itemrow}__items__${mapitem}__imagesection__range">
          <img class="itemsrow__${itemrow}__items__${mapitem}__imagesection__range__image"
            src="${recipe.thumbnailImageUrl}" alt="bag-1">
        </div>
        <svg class="icon icon-heart" height="24" width="24" viewBox="0 0 20 16">
          <use xlink:href="#icon-heart"></use>
          <path
            d="M10 3.22l-0.61-0.6c-0.983-0.931-2.314-1.504-3.779-1.504-3.038 0-5.5 2.462-5.5 5.5 0 1.462 0.571 2.791 1.501 3.776l-0.002-0.003 8.39 8.39 8.39-8.4c0.928-0.983 1.499-2.312 1.499-3.774 0-3.038-2.462-5.5-5.5-5.5-1.465 0-2.796 0.573-3.782 1.506l0.003-0.002-0.61 0.61z">
          </path>
        </svg>

      </div>
      <div class="itemsrow__${itemrow}__items__${mapitem}__infosection">
        <span class="itemsrow__${itemrow}__items__${mapitem}__infosection__name">${recipe.brandName}</span>
        <span class="itemsrow__${itemrow}__items__${mapitem}__infosection__colour">Black</span>
        <div class="itemsrow__${itemrow}__items__${mapitem}__infosection__assuredlogo">
          <img height="18" src="./images/fa_8b4b59.png" alt="assuredlogo">
        </div>
        <div class="itemsrow__${itemrow}__items__${mapitem}__infosection__pricesection">
          <span class="price">${recipe.price}</span>
          <span class="actualprice">${recipe.originalPrice}
            <div class="cutoff"></div>
          </span>
          <span class="off">${recipe.percentOff}off</span>

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

  mainItem.insertAdjacentHTML("beforeend", markup);
};

const renderRecipeParent = firstrow => {
  const markup = `
  <div class="itemsrow__${firstrow}">
  <div class="itemsrow__${firstrow}__items">
  </div>
</div> 
  `;
  elements.main.insertAdjacentHTML("beforeend", markup);
};

export const renderResults = async recipes => {
  var classobj = {
    classrow: [
      "firstrow",
      "secondrow",
      "thirdrow",
      "fourthrow",
      "fifthrow",
      "sixthrow",
      "seventhrow",
      "eightrow",
      "ninethrow",
      "tenthrow"
    ]
  };
  var count = 0;
  for (let i = 0; i < 40; i++) {
    if (i == 0 || i % 4 === 0) {
      var item = 0;
      if (i > 0) {
        count = count + 1;
      }
      await renderRecipeParent(classobj.classrow[count]);
      for (let j = i; j < i + 4; j++) {
        let itemNum = ["firstitem", "seconditem", "thirditem", "fourthitem"];
        await renderRecipe(recipes[j], classobj.classrow[count], itemNum[item]);
        item = item + 1;
      }
    }
  }
};
