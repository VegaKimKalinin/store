import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/configureStore';
import { StaticRouter, Switch } from 'react-router-dom';
import routes from '../src/routes';
import RouteWithSubRoutes from '../src/component/RouteWithSubRoutes';
import * as actions from '../src/store/action';
import 'antd/dist/antd.css';

const AppServer = () => {
  React.useEffect(() => {
    store.dispatch(actions.fetchProductsRequest());
  }, []);
  return (
    <Provider store={store}>
      <StaticRouter>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route} key={i} />
          ))}
        </Switch>
      </StaticRouter>
    </Provider>
  );
};

export default AppServer;
