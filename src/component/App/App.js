import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import BasketContext from '../BasketContext/BasketContext';
import history from '../History/History';
import {
  Products,
  Menu,
  Basket,
  Contact,
  AboutProduct,
  ErrorPage,
} from '../ExportedComponent/ExportedComponent';
import CatalogPage from '../CatalogPage/CatalogPage';

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

              <Route
                exact
                path="/"
                render={({ location }) => (
                  <CatalogPage products={Products} location={location} />
                )}
              />

              <Route exact path="/contact" component={Contact} />

              <Route
                exact
                path="/basket"
                render={(props) => (
                  <Basket addedProducts={this.state.productList} {...props} />
                )}
              />

              <Route
                exact
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
