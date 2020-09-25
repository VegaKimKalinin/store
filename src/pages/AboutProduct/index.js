import React from 'react';
import { withRouter } from 'react-router-dom';
import Image from './components/Image';
import TextBox from './components/TextBox';
import Price from './components/Price';
import products from '../../constants/Products';

const AboutProduct = ({ match }) => {
  const product = products.filter(
    (product) => product.id == match.params.id,
  )[0];
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

export default withRouter(AboutProduct);
