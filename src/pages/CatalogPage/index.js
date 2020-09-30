import React from 'react';
import ProductCard from './components/ProductCard';
import ShoppingBasketButton from './components/ShoppingBasketButton';
import { withRouter } from 'react-router-dom';
import { message } from 'antd';
import products from '../../constants/Products';
import BasketContext from '../../provider/BasketContext';
import './СatalogPage.css';

const CatalogPage = ({ location }) => {
  const { data } = React.useContext(BasketContext);
  console.log(data);

  React.useEffect(() => {
    if (location.state) {
      message.info(location.state.message);
    }
  });

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
export default withRouter(CatalogPage);
