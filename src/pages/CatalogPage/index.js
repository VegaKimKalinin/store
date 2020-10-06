import React from 'react';
import ProductCard from './components/ProductCard';
import ShoppingBasketButton from './components/ShoppingBasketButton';
import { useLocation } from 'react-router-dom';
import { message } from 'antd';
import BasketContext from '../../provider/BasketContext';
import './СatalogPage.css';

const CatalogPage = () => {
  const { data } = React.useContext(BasketContext);
  const location = useLocation();

  React.useEffect(() => {
    if (location.state) {
      message.info(location.state.message);
    }
  }, []);

  return (
    <React.Fragment>
      <ShoppingBasketButton />
      <div className="catalog">
        {data ? (
          data.items.map((item) => (
            <ProductCard productItem={item} key={item.sys.id} />
          ))
        ) : (
          <span>loding data</span>
        )}
      </div>
    </React.Fragment>
  );
};
export default CatalogPage;
