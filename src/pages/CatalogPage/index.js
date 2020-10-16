import React from 'react';
import ProductCard from './components/ProductCard';
import ShoppingBasketButton from './components/ShoppingBasketButton';
import { bindActionCreators } from 'redux';
import { connect, useSelector } from 'react-redux';
import * as actionBasket from '../../store/action/basket';
import * as actionProducts from '../../store/action/products';
import { message } from 'antd';

import './СatalogPage.css';

const CatalogPage = ({ fetchProductsRequest, basketAddProduct, location }) => {
  const data = useSelector((state) => state.products.list);
  const basketProducts = useSelector((state) => state.basket);
  const error = useSelector((state) => state.products.error);
  React.useEffect(() => {
    if (location.state) {
      message.info(location.state.message);
    }
  }, []);

  React.useEffect(() => {
    fetchProductsRequest();
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
        ) : data.items ? (
          data.items.map((item) => (
            <ProductCard
              productItem={item}
              key={item.sys.id}
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
  return bindActionCreators({ ...actionBasket, ...actionProducts }, dispatch);
}

export default connect(null, mapDispatchToProps)(CatalogPage);
