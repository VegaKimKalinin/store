import React from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
import customHistory from '../History/History';
import Menu from './../Menu/Menu';
import Contact from '../Contact/Contact';

console.log(customHistory);

class App extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <React.Fragment>
          <Menu />
          <Route path="/" />
          <Route exact path="/contact" component={Contact} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
