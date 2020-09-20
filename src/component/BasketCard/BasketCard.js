import React from 'react';
import Image from '../Image/Image';
import TextBox from '../TextBox/TextBox';
import Price from '../Price/Price';
import './BasketCard.css';

const BasketCard = ({ product }) => (
  <div className="basket-card">
    <Image img={product.img} id={product.id} />
    <TextBox text={product.title} />
    <Price price={product.price} />
  </div>
);

export default BasketCard;
