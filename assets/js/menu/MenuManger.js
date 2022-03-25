const apiURL = "http://localhost:8088";

export const getFoods = () => {
  return fetch(`${apiURL}/foods`).then((response) => response.json());
};

export const getOrders = () => {
  return fetch(`${apiURL}/orders?_embed=orderFoods`).then((res) => res.json());
};

export const getOrdersByUser = (id) => {
  return fetch(`${apiURL}/orders?userId=${id}&_embed=orderFoods`).then((res) =>
    res.json()
  );
};
