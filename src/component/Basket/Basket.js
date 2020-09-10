import React from 'react';
import BasketCard from '../BasketCard/BasketCard';
import './Basket.css';

const Basket = ({ addedProducts, history }) => {
  if (addedProducts.length === 0) {
    console.log(history);
    alert('Корзина Пуста');
    return <div>Корзина Пуста</div>;
  } else {
    return (
      <div className="basket">
        {addedProducts.map((addedProduct, i) => (
          <BasketCard product={addedProduct} key={i} />
        ))}
      </div>
    );
  }
};
export default Basket;
