import React from 'react';
import BasketContext from '../BasketContext/BasketContext';

class ShoppingBasketButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { productList } = this.context;
    return (
      <button type="button">
        <span> {productList.length} </span>Корзина
      </button>
    );
  }
}

ShoppingBasketButton.contextType = BasketContext;

export default ShoppingBasketButton;
