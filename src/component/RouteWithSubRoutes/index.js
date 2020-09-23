import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithSubRoutes(route) {
  return (
    <Route exact={route.exact} path={route.path} component={route.component} />
  );
}

export default RouteWithSubRoutes;
