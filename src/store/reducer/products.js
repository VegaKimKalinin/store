const initialState = {
  list: {},
  error: false,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS':
      return {
        ...state,
        list: action.products.items.reduce((acc, product) => {
          acc[product.sys.id] = {
            ...product.fields.product,
            ...product.sys,
          };
          return acc;
        }, {}),
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
