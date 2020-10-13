import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BasketCard from './components/BasketCard';

import './Basket.css';

const Basket = ({ basketProducts }) => {
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
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  basketProducts: state.basket,
});

export default connect(mapStateToProps)(Basket);
