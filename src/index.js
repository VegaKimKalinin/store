import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { Router, Switch } from 'react-router-dom';
import history from './component/History';
import routes from './routes';
import RouteWithSubRoutes from './component/RouteWithSubRoutes';
import * as actions from './store/action';
import 'antd/dist/antd.css';

export const App = () => {
  React.useEffect(() => {
    store.dispatch(actions.fetchProductsRequest());
  }, []);
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route} key={i} />
          ))}
        </Switch>
      </Router>
    </Provider>
  );
};

ReactDom.hydrate(<App />, document.getElementById('root'));
