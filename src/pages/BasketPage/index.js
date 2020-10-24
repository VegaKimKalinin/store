import React from 'react';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import BasketCard from './components/BasketCard';
import BasketForm from './components/BasketForm';
import * as action from '../../store/action';

import './Basket.css';

const Basket = ({ clearBasket }) => {
  const basketProducts = useSelector((state) => state.basket);

  if (basketProducts.length === 0) {
    return (
      <Redirect
        to={{ pathname: '/', state: { message: 'Корзина Пуста!!!' } }}
      />
    );
  } else {
    return (
      <div className="basket">
        {basketProducts.map((addedProduct, item) => (
          <BasketCard productItem={addedProduct} key={item} />
        ))}
        <BasketForm basketProducts={basketProducts} clearBasket={clearBasket} />
      </div>
    );
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}
export default connect(null, mapDispatchToProps)(Basket);
