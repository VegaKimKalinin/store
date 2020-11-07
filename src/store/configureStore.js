import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true })),
);

export default store;
