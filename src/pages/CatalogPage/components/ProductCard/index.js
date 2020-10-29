import React from 'react';
import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';
import InputCountGoods from '../InputCountGoods';
import './ProductCard.css';

const ProductCard = ({ product, basketAddProduct }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData('productId', product.id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <div
      className="product-card"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <Image img={product.img} id={product.id} />
      <TextBox text={product.title} />
      <Price price={product.price} />
      <InputCountGoods
        productId={product.id}
        basketAddProduct={basketAddProduct}
      />
    </div>
  );
};

export default ProductCard;
