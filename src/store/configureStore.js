import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';

let store;
if (__SERVER__) {
  store = createStore(
    reducer,
    compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true })),
  );
} else {
  store = createStore(
    reducer,
    window.__INITIAL_STATE__,
    compose(applyMiddleware(thunk), devToolsEnhancer({ trace: true })),
  );
  delete window.__INITIAL_STATE__;
}

export default store;
