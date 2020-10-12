import { createAction, createReducer } from '@reduxjs/toolkit';

export const basketAdded = createAction('busketAdded');

export default createReducer([], {
  [basketAdded.type]: (state, action) => {
    state.push(action.payload);
  },
});
