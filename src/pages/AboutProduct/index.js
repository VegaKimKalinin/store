import React from 'react';
import { withRouter } from 'react-router-dom';
import Image from './components/Image';
import TextBox from './components/TextBox';
import Price from './components/Price';
import BasketContext from '../../provider/BasketContext';
import './AboutProduct.css';

const AboutProduct = ({ match }) => {
  const { data } = React.useContext(BasketContext);
  if (data) {
    const product = data.items.filter(
      (item) => item.sys.id == match.params.id,
    )[0];
    return (
      <div className="about-product">
        <Image img={product.fields.product.img} id={product.sys.id} />
        <TextBox text={product.fields.product.title} />
        <Price price={product.fields.product.price} />
      </div>
    );
  } else {
    return <span>Загрузка данных</span>;
  }
};

export default withRouter(AboutProduct);
