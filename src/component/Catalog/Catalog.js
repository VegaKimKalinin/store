import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShoppingBasketButton from '../ShoppingBasketButton/ShoppingBasketButton';
import './catalog.css';

const Catalog = ({ products }) => {
  return (
    <React.Fragment>
      <ShoppingBasketButton />
      <div className="catalog">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </React.Fragment>
  );
};
export default Catalog;
