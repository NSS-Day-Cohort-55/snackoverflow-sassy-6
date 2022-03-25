import * as MenuManger from "./MenuManger.js";
import { FoodCard } from "./FoodCard.js";
import { OrderList } from "./OrderList.js";

export const FoodList = () => {
  const contentTarget = document.querySelector("main");
  let HTMLString;

  MenuManger.getFoods().then((foodArr) => {
    let lunchMenu = [];
    let drinkMenu = foodArr.filter((menuItem) => menuItem.menuId === 2);
    let appetizerMenu = foodArr.filter((menuItem) => menuItem.menuId === 3);
    let dessertMenu = foodArr.filter((menuItem) => menuItem.menuId === 4);

    for (const munchies of foodArr) {
      if (munchies.menuId === 1) {
        lunchMenu.push(munchies);
      }
    }

    lunchMenu.sort((menuItem1, menuItem2) => menuItem1.price - menuItem2.price);
    HTMLString = `<h2>Lunch</h2>`;
    HTMLString += `<div class="row">`;
    HTMLString += lunchMenu.map((food) => FoodCard(food)).join("");
    HTMLString += `</div>`;

    drinkMenu.sort((menuItem1, menuItem2) => menuItem1.price - menuItem2.price);
    HTMLString += `<h2>Drinks</h2>`;
    HTMLString += `<div class="row">`;
    HTMLString += drinkMenu.map((drink) => FoodCard(drink)).join("");
    HTMLString += `</div>`;

    appetizerMenu.sort(
      (menuItem1, menuItem2) => menuItem1.price - menuItem2.price
    );
    HTMLString += `<h2>appetizers</h2>`;
    HTMLString += `<div class="row">`;
    HTMLString += appetizerMenu.map((snacks) => FoodCard(snacks)).join("");
    HTMLString += `</div>`;

    dessertMenu.sort(
      (menuItem1, menuItem2) => menuItem1.price - menuItem2.price
    );
    HTMLString += `<h2>Desserts</h2>`;
    HTMLString += `<div class="row">`;
    HTMLString += dessertMenu.map((dessert) => FoodCard(dessert)).join("");
    HTMLString += `</div>`;
    contentTarget.innerHTML = HTMLString;
  });
};

// const contentTarget = document.querySelector("main")
// let HTMLString;
// MenuManger.getFoods()
// .then(foodArray => {
//     HTMLString = `<div class="row">`
//     HTMLString += foodArray.map(food => FoodCard(food)).join('')
//     HTMLString += `</div>`
//     contentTarget.innerHTML = HTMLString;
// })
