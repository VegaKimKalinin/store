import React from 'react';
import './price.css';

const Price = ({ price }) => (
  <span className="product-card__price">{' Цена: ' + price}</span>
);

export default Price;
