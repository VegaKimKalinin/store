export default function products(state = null, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
      return state;
    case 'FETCH_PRODUCTS_SUCCESS':
      return (state = action.products);
    case 'FETCH_PRODUCTS_FAILURE':
      return (state = action.erorr);
    default:
      return state;
  }
}
