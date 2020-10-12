import { createAction, createReducer } from '@reduxjs/toolkit';

export const FETCH_PRODUCTS_REQUEST = createAction('FETCH_PRODUCTS_REQUEST');
export const FETCH_PRODUCTS_SUCCESS = createAction('FETCH_PRODUCTS_SUCCESS');
export const FETCH_PRODUCTS_FAILURE = createAction('FETCH_PRODUCTS_FAILURE');

export default createReducer(null, {
  [FETCH_PRODUCTS_REQUEST]: (state, action) => {
    console.log('Идет загрузка данных');
  },
  [FETCH_PRODUCTS_SUCCESS]: (state, action) => (state = action.payload),
  [FETCH_PRODUCTS_FAILURE]: (state, action) => (state = action.payload),
});
