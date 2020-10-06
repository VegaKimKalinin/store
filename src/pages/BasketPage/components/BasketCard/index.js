import React from 'react';
import Image from '../Image';
import TextBox from '../TextBox';
import Price from '../Price';

import './BasketCard.css';

const BasketCard = ({ productItem }) => {
  const { product } = productItem.fields;
  return (
    <div className="basket-card">
      <Image
        img={product.img}
        id={productItem.sys.id}
        url={product.img.imageUrl[0]}
      />
      <TextBox text={product.title} />
      <Price price={product.price} />
    </div>
  );
};

export default BasketCard;
