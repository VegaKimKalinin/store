const basket_key = '__MY_APP_BASKET';

export const setBasket = (values) => {
  localStorage.setItem(basket_key, JSON.stringify(values));
};

export const initialBasket = () => {
  try {
    return JSON.parse(localStorage.getItem(basket_key)) || {};
  } catch (error) {
    return {};
  }
};

export const deleteBasket = () => {
  localStorage.removeItem(basket_key);
};
