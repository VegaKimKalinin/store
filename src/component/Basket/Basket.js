import React from 'react';
import BasketCard from '../BasketCard/BasketCard';
import './Basket.css';

const Basket = (props) => {
  const { addedProducts, history } = props;
  if (addedProducts.length === 0) {
    history.push('/', { msg: 'Корзина Пуста' });
  }
  return (
    <div className="basket">
      {addedProducts.map((addedProduct, i) => (
        <BasketCard product={addedProduct} key={i} />
      ))}
    </div>
  );
};
export default Basket;
