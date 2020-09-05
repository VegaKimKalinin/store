/*
Собрать из реализованных ранее компонентов TextBox,
Price и Image компонент ProductCard для короткого представления продукта в магазине;
Вывести три тестовых элемента продукта на html-странице
*/

import React from 'react';
import Image from '../Image/Image';
import TextBox from '../TextBox/TextBox';
import Price from '../Price/Price';
import InputCountGoods from '../InputCountGoods/InputCountGoods';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Image img={product.img} />
      <TextBox text={product.title} />
      <Price price={product.price} />
      <InputCountGoods product={product} />
    </div>
  );
};

export default ProductCard;
