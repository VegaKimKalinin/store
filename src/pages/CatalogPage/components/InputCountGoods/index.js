import React, { useState } from 'react';
import ButtonAddToBasket from '../ButtonAddToBasket';

const InputCountGoods = ({ productId, basketAddProduct }) => {
  const [count, setCount] = useState(1);

  const onFormInputCountGoods = (event) => {
    event.preventDefault();
    basketAddProduct(count, productId);
  };

  const handelChange = (event) => {
    setCount(+event.target.value);
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
