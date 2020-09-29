import React from 'react';
import { Route } from 'react-router-dom';

function RouteWithSubRoutes(route) {
  if (route.layout) {
    return (
      <Route exact={route.exact} path={route.path}>
        <route.layout name={route.name}>
          <route.component />
        </route.layout>
      </Route>
    );
  } else {
    return (
      <Route exact={route.exact} path={route.path}>
        <route.component />
      </Route>
    );
  }
}

export default RouteWithSubRoutes;
