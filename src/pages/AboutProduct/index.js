import React, { useEffect, useState } from 'react';
import { fetchProduct } from '../../api/FetchData';
import Image from './components/Image';
import TextBox from './components/TextBox';
import Price from './components/Price';
import './AboutProduct.css';

const AboutProduct = ({ computedMatch }) => {
  const [productItem, setProduct] = useState({});

  useEffect(() => {
    const { id } = computedMatch.params;
    fetchProduct(id)
      .then((product) => setProduct(product))
      .catch((er) => console.log(er));
  }, []);

  if (productItem.fields) {
    const { product } = productItem.fields;
    const { sys } = productItem;
    return (
      <div className="about-product">
        <Image img={product.img} id={sys.id} />
        <TextBox text={product.title} />
        <Price price={product.price} />
      </div>
    );
  } else {
    return <span>Загрузка данных...</span>;
  }
};

export default AboutProduct;
