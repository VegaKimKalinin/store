import React from 'react';
import BasketContext from '../BasketContext/BasketContext';
import ButtonAddToBasket from '../ButtonAddToBasket/ButtonAddToBasket';

class InputCountGoods extends React.Component {
  constructor(props) {
    super(props);
    this.onFormInputCountGoods = this.onFormInputCountGoods.bind(this);
    this.handelChange = this.handelChange.bind(this);
    this.state = { count: 1 };
  }

  onFormInputCountGoods(event) {
    event.preventDefault();
    const { product } = this.props;
    const { count } = this.state;
    const { addToProductList } = this.context;
    addToProductList(count, product);
  }

  handelChange(event) {
    const count = event.target.value;
    this.setState((state) => ({ count }));
  }

  render() {
    return (
      <form onSubmit={this.onFormInputCountGoods}>
        <input
          type="number"
          defaultValue="1"
          min="1"
          onChange={this.handelChange}
        ></input>
        <ButtonAddToBasket />
      </form>
    );
  }
}

InputCountGoods.contextType = BasketContext;
export default InputCountGoods;
