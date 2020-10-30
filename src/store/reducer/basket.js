import { initialBasket } from '../../utils/basketManager';

const initialState = initialBasket();

export default function basket(state = initialState, action) {
  switch (action.type) {
    case 'BASKET_ADD_PRODUCT':
      return {
        ...state,
        [action.productId]: action.count,
      };
    case 'CLEAR_BASKET':
      return {};
    default:
      return state;
  }
}
