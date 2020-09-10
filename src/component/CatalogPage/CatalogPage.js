import React from 'react';
import { Router, Route, Switch} from 'react-router-dom';
import {
  Catalog,
  Menu,
  AboutProduct,
  Products,
  Basket,
  Contact,
  ErrorPage,
} from '../ExportedComponent/ExportedComponent';
import BasketContext from '../BasketContext/BasketContext';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

class CatalogPage extends React.Component {
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
      <Router history={history}>
        <div>
          <Menu />
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <BasketContext.Provider value={this.state}>
                  <Catalog products={Products} />
                </BasketContext.Provider>
              )}
            />

            <Route
              path="/about-product"
              exact
              render={() => <AboutProduct />}
            ></Route>

            <Route
              path="/basket"
              exact
              render={() => <Basket addedProducts={this.state.productList} />}
            ></Route>

            <Route path="/contact" exact render={() => <Contact />}></Route>

            <Route component={ErrorPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default CatalogPage;
