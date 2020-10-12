import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from '../apiProducts';

import { fetchProducts } from '../../api/FetchData';

const api = ({ dispatch }) => (next) => (action) => {
  // eslint-disable-next-line no-negated-condition
  if (action.type !== FETCH_PRODUCTS_REQUEST.type) next(action);
  else {
    next(action);
    fetchProducts()
      .then((data) => dispatch(FETCH_PRODUCTS_SUCCESS(data)))
      .catch((error) => dispatch(FETCH_PRODUCTS_FAILURE(error)));
  }
};

export default api;
