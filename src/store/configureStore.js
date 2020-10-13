import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import getProducts from './middleware/getProducts';

export default function () {
  return createStore(
    reducer,
    compose(applyMiddleware(getProducts), devToolsEnhancer({ trace: true })),
  );
}
