import React from 'react';
import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';

import './BasketCard.css';

const BasketCard = ({ product }) => (
  <div className="basket-card">
    <Image img={product.fields.product.img} id={product.sys.id} />
    <TextBox text={product.fields.product.title} />
    <Price price={product.fields.product.price} />
  </div>
);

export default BasketCard;
