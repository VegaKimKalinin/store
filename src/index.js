import React from 'react';
import ReactDom from 'react-dom';
import { Router, Switch } from 'react-router-dom';
import AppProvider from './provider';
import history from './component/History';
import routes from './routes';
import RouteWithSubRoutes from './component/RouteWithSubRoutes';

const App = () => (
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
);

ReactDom.render(<App />, document.getElementById('root'));
