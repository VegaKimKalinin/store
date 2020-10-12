import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store/configureStore';
import { Router, Switch } from 'react-router-dom';
import AppProvider from './provider';
import history from './component/History';
import routes from './routes';
import RouteWithSubRoutes from './component/RouteWithSubRoutes';
import 'antd/dist/antd.css';

const store = createStore();

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <Router history={history}>
        <React.Fragment>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes {...route} key={i} />
            ))}
          </Switch>
        </React.Fragment>
      </Router>
    </AppProvider>
  </Provider>
);

ReactDom.render(<App />, document.getElementById('root'));
