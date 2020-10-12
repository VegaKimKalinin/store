import React from 'react';
import ProductCard from './components/ProductCard';
import ShoppingBasketButton from './components/ShoppingBasketButton';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { basketAdded } from '../../store/basket';
import { FETCH_PRODUCTS_REQUEST } from '../../store/apiProducts';
import { message } from 'antd';

import './СatalogPage.css';

const CatalogPage = ({ data, getProducts, addToBasket, basketProducts }) => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.state) {
      message.info(location.state.message);
    }
  }, []);

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <React.Fragment>
      <ShoppingBasketButton
        addToBasket={addToBasket}
        basketProducts={basketProducts}
      />
      <div className="catalog">
        {data ? (
          data.items.map((item) => (
            <ProductCard
              productItem={item}
              key={item.sys.id}
              addToBasket={addToBasket}
            />
          ))
        ) : (
          <span>loding data</span>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  data: state.entities.productsList,
  basketProducts: state.entities.basket,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => {
    dispatch(FETCH_PRODUCTS_REQUEST());
  },
  addToBasket: (product) => {
    dispatch(basketAdded(product));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
