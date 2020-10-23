import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import BasketCard from './components/BasketCard';
import BasketForm from './components/BasketForm';

import './Basket.css';

const Basket = () => {
  const basketProducts = useSelector((state) => state.basket);
  React.useEffect(() => {
    console.log(basketProducts);
  }, [basketProducts]);
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
        <BasketForm />
      </div>
    );
  }
};

export default Basket;
