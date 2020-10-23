import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { Router, Switch } from 'react-router-dom';
import history from './component/History';
import routes from './routes';
import RouteWithSubRoutes from './component/RouteWithSubRoutes';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <React.Fragment>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes {...route} key={i} />
          ))}
        </Switch>
      </React.Fragment>
    </Router>
  </Provider>
);

ReactDom.render(<App />, document.getElementById('root'));
