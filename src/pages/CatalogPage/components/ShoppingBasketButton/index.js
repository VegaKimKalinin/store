import React from 'react';
import { Link } from 'react-router-dom';
import './ShoppingBasketButton.css';

const ShoppingBasketButton = ({ basketAddProduct, basketProducts }) => {
  const count = 1;
  function onDrop(event) {
    event.preventDefault();
    const productId = event.dataTransfer.getData('productId');
    basketAddProduct(count, productId);
  }

  function onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <Link to="/basket">
      <button
        className="button"
        type="button"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <span>
          &nbsp;
          {Object.values(basketProducts).reduce((acc, currentValue) => {
            acc += currentValue;
            return acc;
          }, 0)}
          &nbsp;
        </span>
        Корзина
      </button>
    </Link>
  );
};

export default ShoppingBasketButton;
