import { combineReducers } from 'redux';
import basketReduser from './basket';
import apiProducts from './apiProducts';

export default combineReducers({
  basket: basketReduser,
  productsList: apiProducts,
});
