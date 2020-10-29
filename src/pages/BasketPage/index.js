import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as useSelectors from '../../hooks/useselector';
import { Redirect } from 'react-router-dom';
import BasketCard from './components/BasketCard';
import BasketForm from './components/BasketForm';
import * as action from '../../store/action';

import './Basket.css';

const Basket = ({ clearBasket }) => {
  const products = useSelectors.useProducts();
  const basketProducts = useSelectors.useBasket();
  if (Object.keys(basketProducts).length === 0) {
    return (
      <Redirect
        to={{ pathname: '/', state: { message: 'Корзина Пуста!!!' } }}
      />
    );
  } else if (Object.keys(products).length > 0) {
    return (
      <>
        <BasketForm basketProducts={basketProducts} clearBasket={clearBasket} />
        <div className="basket">
          {Object.keys(basketProducts).map((basketProduct) => (
            <BasketCard
              product={products[basketProduct]}
              key={basketProduct}
              count={basketProducts[basketProduct]}
            />
          ))}
        </div>
      </>
    );
  } else {
    return <span>Загрузка данных...</span>;
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(action, dispatch);
}
export default connect(null, mapDispatchToProps)(Basket);
