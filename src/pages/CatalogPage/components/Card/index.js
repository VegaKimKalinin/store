import React from 'react';
import { Card } from 'antd';
import AddToBasket from '../AddToBasket';
import Image from '../Image';

const ShopCard = ({ product, basketAddProduct }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData('productId', product.id);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Card
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      bordered
      hoverable
      style={{ width: 300 }}
      cover={<Image url={product.url} img={product.img} id={product.id} />}
    >
      <p>{product.title}</p>
      <p>Цена: {product.price}</p>
      <AddToBasket productId={product.id} basketAddProduct={basketAddProduct} />
    </Card>
  );
};
export default ShopCard;
