import React from 'react';

import ProductCard from '../ProductCard';
import ShoppingBasketButton from '../ShoppingBasketButton';

import './catalog.css';

const Catalog = ({ products }) => (
  <React.Fragment>
    <ShoppingBasketButton />
    <div className="catalog">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  </React.Fragment>
);
export default Catalog;