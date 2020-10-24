import { fetchProducts } from '../../api/FetchData';

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

export function basketAddProduct(product) {
  return {
    type: 'BASKET_ADD_PRODUCT',
    product,
  };
}

export function clearBasket() {
  return {
    type: 'CLEAR_BASKET',
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
