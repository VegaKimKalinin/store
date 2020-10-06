import React from 'react';
import BasketContext from '../../provider/BasketContext';
import { Redirect } from 'react-router-dom';

import BasketCard from './components/BasketCard';

import './Basket.css';

const Basket = () => (
  <BasketContext.Consumer>
    {({ productList }) => {
      if (productList.length === 0) {
        return (
          <Redirect
            to={{ pathname: '/', state: { message: 'Корзина Пуста!!!' } }}
          />
        );
      } else {
        return (
          <div className="basket">
            {productList.map((addedProduct, item) => (
              <BasketCard product={addedProduct} key={item} />
            ))}
          </div>
        );
      }
    }}
  </BasketContext.Consumer>
);

export default Basket;
