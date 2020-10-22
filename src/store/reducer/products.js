const initialState = {
  list: {},
  error: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        list: action.products,
      };
    case 'FETCH_PRODUCTS_FAILURE':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
