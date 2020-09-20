import React from 'react';
import Image from '../Image/Image';
import TextBox from '../TextBox/TextBox';
import Price from '../Price/Price';

const AboutProduct = (props) => {
  const product = props.product[0];
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image img={product.img} id={product.id} />
      <TextBox text={product.title} />
      <Price price={product.price} />
    </div>
  );
};

export default AboutProduct;
