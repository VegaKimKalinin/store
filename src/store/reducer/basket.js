export default function basket(state = [], action) {
  switch (action.type) {
    case 'BASKET_ADD_PRODUCT':
      return [...state, action.product];
    default:
      return state;
  }
}
