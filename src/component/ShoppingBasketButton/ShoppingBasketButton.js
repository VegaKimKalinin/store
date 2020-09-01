import React from 'react';

class ShoppingBasketButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <button type="button">
        <span>{this.state.counter} </span>Корзина
      </button>
    );
  }
}

export default ShoppingBasketButton;
