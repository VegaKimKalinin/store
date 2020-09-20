import React from 'react';
import Catalog from '../Catalog/Catalog';

const CatalogPage = ({ products, location }) => {
  if (location.state) {
    alert(location.state.msg);
    location.state = undefined;
  }
  return <Catalog products={products} />;
};

export default CatalogPage;
