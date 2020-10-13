import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../action/products';

import { fetchProducts } from '../../api/FetchData';

const getProducts = ({ dispatch }) => (next) => (action) => {
  // eslint-disable-next-line no-negated-condition
  if (action.type !== fetchProductsRequest().type) next(action);
  else {
    next(action);
    fetchProducts()
      .then((data) => dispatch(fetchProductsSuccess(data)))
      .catch((error) => dispatch(fetchProductsFailure(error)));
  }
};

export default getProducts;
