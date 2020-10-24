import React, { useState } from 'react';
import { validate, validateProperty } from '../../../../api/validateAPI';
import Input from './Input';

const BasketForm = ({ basketProducts, clearBasket }) => {
  const initialData = {
    fullName: '',
    phone: '',
    email: '',
    address: '',
  };
  const [data, setdata] = useState(initialData);
  const [errors, setErrors] = useState({});

  const handleSubmite = (e) => {
    e.preventDefault();
    const errors = validate(data);
    setErrors(errors || {});
    if (errors) return;
    const serializedData = JSON.stringify({ ...data, basketProducts });
    clearBasket();
    console.log('Send data to server', serializedData);
  };

  const handelChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    let errors = { ...errors };
    const errorMesage = validateProperty(currentTarget);
    if (errorMesage) errors[name] = errorMesage;
    else {
      errors = {};
    }
    setdata({ ...data, [name]: value });
    setErrors(errors);
  };

  return (
    <form onSubmit={handleSubmite}>
      <Input
        name="fullName"
        label="ФИО"
        value={data.fullName}
        type="text"
        onChange={handelChange}
        error={errors.fullName}
      />
      <Input
        name="phone"
        label="Телефон"
        value={data.phone}
        type="text"
        onChange={handelChange}
        error={errors.phone}
      />
      <Input
        name="email"
        label="Email"
        value={data.email}
        type="text"
        onChange={handelChange}
        error={errors.email}
      />
      <Input
        name="address"
        label="Адрес"
        value={data.address}
        type="text"
        onChange={handelChange}
        error={errors.address}
      />

      <div className="form-group row">
        <div className="col-sm-10">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default BasketForm;
