import React, { useState, useContext } from 'react';
import BasketContext from '../../../../provider/BasketContext';

import ButtonAddToBasket from '../ButtonAddToBasket';

const InputCountGoods = ({ product }) => {
  const [count, setCount] = useState(1);
  const context = useContext(BasketContext);

  const onFormInputCountGoods = (event) => {
    event.preventDefault();
    const { addToProductList } = context;
    addToProductList(count, product);
  };

  const handelChange = (event) => {
    setCount(event.target.value);
  };

  return (
    <form onSubmit={onFormInputCountGoods}>
      <input
        type="number"
        defaultValue="1"
        min="1"
        onChange={handelChange}
      ></input>
      <ButtonAddToBasket />
    </form>
  );
};

export default InputCountGoods;
