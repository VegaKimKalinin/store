import { fetchProducts } from '../../api/FetchData';
import { setBasket, deleteBasket } from '../../utils/basketManager';

export function fetchProductsRequest() {
  return (dispatch) => {
    fetchProducts()
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  };
}

export function fetchProductsSuccess(products) {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products,
  };
}

export function fetchProductsFailure(error) {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    error,
  };
}

export function basketAddProduct(count, productId) {
  return (dispatch, getState) => {
    const oldValue = getState().basket[productId] || 0;
    dispatch({
      type: 'BASKET_ADD_PRODUCT',
      count: count + oldValue,
      productId,
    });
    setBasket(getState().basket);
  };
}

export function clearBasket() {
  deleteBasket();
  return (dispatch) => {
    dispatch({
      type: 'CLEAR_BASKET',
    });
  };
}

export function regUser(userName, password) {
  return {
    type: 'REG_USER',
    user: {
      userName,
      password,
    },
  };
}
