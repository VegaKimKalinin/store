import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { saveBasket } from './middleware/saveBasket';

export const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk, saveBasket),
    devToolsEnhancer({ trace: true }),
  ),
);
