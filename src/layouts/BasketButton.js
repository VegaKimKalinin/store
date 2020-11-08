import React from 'react';
import { Badge } from 'antd';
import { bindActionCreators } from 'redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import * as actions from '../store/action';
import { basketCounter } from '../utils/basketCounter';

const BasketButton = ({ basketAddProduct }) => {
  const count = 1;
  const basketProducts = useSelector((state) => state.basket);

  function onDrop(event) {
    event.preventDefault();
    const productId = event.dataTransfer.getData('productId');
    basketAddProduct(count, productId);
  }

  function onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <Link to="/basket">
      <button
        style={{ backgroundColor: 'inherit', border: '0px none' }}
        type="button"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Badge count={basketCounter(basketProducts)}>
          <div style={{ padding: '2px' }}>
            <ShoppingCartOutlined style={{ fontSize: '2em' }} />
          </div>
        </Badge>
      </button>
    </Link>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(BasketButton);
