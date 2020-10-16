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
