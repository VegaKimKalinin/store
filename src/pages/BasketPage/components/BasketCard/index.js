import React from 'react';
import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';

import './BasketCard.css';

const BasketCard = ({ product, count }) => (
  <div className="basket-card">
    <Image img={product.img} id={product.id} url={product.url} />
    <TextBox text={product.title} />
    <Price price={product.price} />
    <div>Количество товара {count} шт</div>
  </div>
);

export default BasketCard;
