const basket_key = '__MY_APP_BASKET';

export const setBasket = (values) => {
  localStorage.setItem(basket_key, JSON.stringify(values));
};

export const initialBasket = () =>
  JSON.parse(localStorage.getItem(basket_key)) || {};

export const deleteBasket = () => {
  localStorage.removeItem(basket_key);
};
