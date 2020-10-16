import { combineReducers } from 'redux';
import products from './products';
import basket from './basket';
import user from './regUser';

export default combineReducers({
  basket,
  products,
  user,
});
