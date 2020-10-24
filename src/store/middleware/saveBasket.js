import { saveState, obtainState } from '../../api/saveBasket';
import { basketAddProduct } from '../action/index';

export const saveBasket = ({ dispatch, getState }) => (next) => (action) => {
  next(action);
  if (action.type === 'CLEAR_BASKET') localStorage.removeItem('basket');
  if (action.type === 'BASKET_ADD_PRODUCT') saveState(getState().basket);
  if (getState().basket.length === 0 && obtainState().length > 0) {
    const products = obtainState();
    for (const item of products) dispatch(basketAddProduct(item));
  }
};
