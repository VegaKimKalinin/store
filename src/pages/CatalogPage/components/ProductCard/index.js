import React from 'react';

import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';
import InputCountGoods from '../InputCountGoods';
import './ProductCard.css';

const ProductCard = ({ productItem, basketAddProduct }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData('product', JSON.stringify(productItem));
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const { product } = productItem.fields;

  return (
    <div
      className="product-card"
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      <Image img={product.img} id={productItem.sys.id} />
      <TextBox text={product.title} />
      <Price price={product.price} />
      <InputCountGoods
        product={productItem}
        basketAddProduct={basketAddProduct}
      />
    </div>
  );
};

export default ProductCard;
