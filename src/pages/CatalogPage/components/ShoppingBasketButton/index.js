import React from 'react';
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
    const product = JSON.parse(event.dataTransfer.getData('product'));
    this.props.addToBasket(product);
  }

  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  render() {
    return (
      <Link to="/basket">
        <button
          className="button"
          type="button"
          onDrop={this.onDrop}
          onDragOver={this.onDragOver}
        >
          <span> {this.props.basketProducts.length} </span>Корзина
        </button>
      </Link>
    );
  }
}

export default ShoppingBasketButton;
