import React from 'react';
import Catalog from './components/Catalog';
import products from '../../constants/Products';

const CatalogPage = ({location }) => {
  if (location.state) {
    location.state = undefined;
  }
  return <Catalog products={products} />;
};

export default CatalogPage;
