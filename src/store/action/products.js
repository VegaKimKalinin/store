export function fetchProductsRequest() {
  return {
    type: 'FETCH_PRODUCTS_REQUEST',
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
