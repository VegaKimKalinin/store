import React from 'react';
import BasketContext from '../BasketContext/BasketContext';
import { Link } from 'react-router-dom';
import './ShoppingBasketButton.css';

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
    const { productList } = this.context;
    return (
      <Link to='/basket'>
        <button className="button" type="button" onDrop={this.onDrop} onDragOver={this.onDragOver}>
          <span> {productList.length} </span>Корзина
        </button>
      </Link>
    );
  }
}

ShoppingBasketButton.contextType = BasketContext;

export default ShoppingBasketButton;
