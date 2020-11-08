import React, { useState } from 'react';
import { InputNumber, Button } from 'antd';

const AddToBasket = ({ productId, basketAddProduct }) => {
  const [count, setCount] = useState(1);

  const onFormInputCountGoods = (event) => {
    event.preventDefault();
    basketAddProduct(count, productId);
  };

  const handelChange = (event) => {
    setCount(+event.target.value);
  };

  return (
    <form onSubmit={onFormInputCountGoods} style={{ display: 'flex' }}>
      <InputNumber min={1} max={10} defaultValue={1} onChange={handelChange} />
      <Button type="primary" htmlType="submite">
        Добавить в корзину
      </Button>
    </form>
  );
};

export default AddToBasket;
