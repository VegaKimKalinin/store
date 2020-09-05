import React from 'react';
import BasketContext from '../BasketContext/BasketContext';

class ButtonAddToBasket extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonAddToBasket = this.onButtonAddToBasket.bind(this);
  }
  onButtonAddToBasket() {
    let { product } = this.props;
    const { addToProductList } = this.context;
    addToProductList(product);
  }
  render() {
    return (
      <button onClick={this.onButtonAddToBasket}>Добавить в корзину</button>
    );
  }
}
ButtonAddToBasket.contextType = BasketContext;
export default ButtonAddToBasket;
