/*
Создать контейнерный компонент CatalogPage,
который будет передавать массив записей о продуктах компоненту Catalog.
*/

import React from 'react';
import Catalog from '../Catalog/Catalog';
import Products from '../../constants/Products';
import BasketContext from '../BasketContext/BasketContext';

class CatalogPage extends React.Component {
  constructor(props) {
    super(props);

    this.addToProductList = this.addToProductList.bind(this);

    this.state = {
      productList: [],
      addToProductList: this.addToProductList,
    };
  }

  addToProductList(product) {
    let list = [...this.state.productList];
    list.push(product);
    this.setState((state) => ({
      productList: [...list],
    }));
  }

  render() {
    return (
      <BasketContext.Provider value={this.state}>
        <Catalog products={Products} />
      </BasketContext.Provider>
    );
  }
}

export default CatalogPage;
