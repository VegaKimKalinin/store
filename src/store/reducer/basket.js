const initialState = [];

export default function basket(state = initialState, action) {
  switch (action.type) {
    case 'BASKET_ADD_PRODUCT':
      return [...state, action.product];
    case 'CLEAR_BASKET':
      return initialState;
    default:
      return state;
  }
}
