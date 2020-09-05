import React from 'react';
import BasketContext from '../BasketContext/BasketContext';
import ButtonAddToBasket from '../ButtonAddToBasket/ButtonAddToBasket';

class InputCountGoods extends React.Component {
  constructor(props) {
    super(props);
    this.onFormInputCountGoods = this.onFormInputCountGoods.bind(this);
  }

  onFormInputCountGoods(event) {
    event.preventDefault();
    let { product } = this.props;
    let { _count } = this.refs;
    const { addToProductList } = this.context;
    addToProductList(_count.value, product);
    _count.value = 1;
  }
  render() {
    return (
      <form onSubmit={this.onFormInputCountGoods}>
        <input type="number" defaultValue="1" min="1" ref="_count"></input>
        <ButtonAddToBasket />
      </form>
    );
  }
}

InputCountGoods.contextType = BasketContext;
export default InputCountGoods;
