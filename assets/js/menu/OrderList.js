import * as MenuManger from "./MenuManger.js";
import * as UserManger from "../auth/UserManager.js";
import { FoodCard } from "./FoodCard.js";

export const OrderList = () => {
  return OrderCards();
};

const OrderCards = () => {
  const contentTarget = document.querySelector("main");
  let HTMLString = "test";
  MenuManger.getOrdersByUser(UserManger.getLoggedInUser().id).then(
    (ordersArr) => {
      const currentOrder = ordersArr.find((order) => !order.isPickedUp);
      //   let currentOrderOrderFoods = currentOrder.orderFoods;
      contentTarget.innerHTML = `
        <div class="col-sm-6 g-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Order #${currentOrder.id}</h5>
                <p class="card-text">${currentOrder.timestamp}</p>
                <p>Price: $${calculateTotalPrice()}</p>
            </div>
            </div>
        </div>`;
    }
  );
};

const calculateTotalPrice = (foodsArr) => {
  return 0;
};
