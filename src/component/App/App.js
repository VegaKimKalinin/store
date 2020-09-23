import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import BasketContext from '../../provider/BasketContext';
import history from '../History';
import {
  Products,
  Menu,
  Basket,
  Contact,
  AboutProduct,
  ErrorPage,
} from '../ExportedComponent/ExportedComponent';

import CatalogPage from '../../pages/CatalogPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToProductList = this.addToProductList.bind(this);

    this.state = {
      productList: [],
      addToProductList: this.addToProductList,
    };
  }

  addToProductList(count, product) {
    const list = [...this.state.productList];
    for (let i = 1; i <= count; i++) {
      list.push(product);
    }
    this.setState(() => ({
      productList: [...list],
    }));
  }

  render() {
    return (
      <BasketContext.Provider value={this.state}>
        <Router history={history}>
          <React.Fragment>
            <Menu />
            <Switch>
              <Route exact path="/" component={CatalogPage} />
              <Route path="/contact" component={Contact} />
              <Route path="/basket" component={Basket} />
              <Route
                path="/product/:id"
                render={({ match }) => (
                  <AboutProduct
                    product={Products.filter(
                      (product) => product.id == match.params.id,
                    )}
                  />
                )}
              />
              <Route component={ErrorPage} />
            </Switch>
          </React.Fragment>
        </Router>
      </BasketContext.Provider>
    );
  }
}

export default App;
