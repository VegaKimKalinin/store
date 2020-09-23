import React from 'react';
import BasketContext from '../../provider/BasketContext';

import BasketCard from './components/BasketCard';

import './Basket.css';

const Basket = ({ history }) => (
  <BasketContext.Consumer>
    {({ productList }) => (
      <div className="basket">
        {productList.length == 0
          ? history.push('/')
          : productList.map((addedProduct, i) => (
              <BasketCard product={addedProduct} key={i} />
            ))}
      </div>
    )}
  </BasketContext.Consumer>
);

export default Basket;
