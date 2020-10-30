import React from 'react';
import ProductCard from './components/ProductCard';
import ShoppingBasketButton from './components/ShoppingBasketButton';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import * as action from '../../store/action';
import { message } from 'antd';

import './СatalogPage.css';

const CatalogPage = ({ basketAddProduct, location }) => {
  const products = useSelector((state) => state.products.list);
  const error = useSelector((state) => state.products.error);
  const basketProducts = useSelector((state) => state.basket);

  React.useEffect(() => {
    if (location.state) {
      message.info(location.state.message);
    }
  }, []);

  return (
    <React.Fragment>
      <ShoppingBasketButton
        basketAddProduct={basketAddProduct}
        basketProducts={basketProducts}
      />
      <div className="catalog">
        {error ? (
          <div>Ошибка соединения с сервером</div>
        ) : Object.keys(products).length > 0 ? (
          Object.values(products).map((item) => (
            <ProductCard
              product={item}
              key={item.id}
              basketAddProduct={basketAddProduct}
            />
          ))
        ) : (
          <span>loding data...</span>
        )}
      </div>
    </React.Fragment>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}

export default connect(null, mapDispatchToProps)(CatalogPage);
