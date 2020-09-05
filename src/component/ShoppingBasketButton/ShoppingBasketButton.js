import React from 'react';
import BasketContext from '../BasketContext/BasketContext';

class ShoppingBasketButton extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
  }

  onDrop(event) {
    event.preventDefault();
    const count = 1;
    const { addToProductList } = this.context;
    const product = JSON.parse(event.dataTransfer.getData('product'));
    addToProductList(count, product);
  }

  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  render() {
    let { productList } = this.context;
    return (
      <button type="button" onDrop={this.onDrop} onDragOver={this.onDragOver}>
        <span> {productList.length} </span>Корзина
      </button>
    );
  }
}

ShoppingBasketButton.contextType = BasketContext;

export default ShoppingBasketButton;
