import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';

export default function () {
  return createStore(
    reducer,
    compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true })),
  );
}
