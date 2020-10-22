import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BasketCard from './components/BasketCard';

import './Basket.css';

const Basket = () => {
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
      </div>
    );
  }
};

export default Basket;
