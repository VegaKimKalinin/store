import React, { useState } from 'react';
import Joi from 'joi-browser';
import Input from './Input';

const BasketForm = () => {
  const initialFormData = { fullName: '', phone: '', email: '', address: '' };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const schema1 = {
    fullName: Joi.string().min(3).required(),
    phone: Joi.string().required(),
    email: Joi.string().email().required(),
    address: Joi.string().required(),
  };

  const validate = () => {
    const result = Joi.validate(formData, schema1, { abortEarly: false });
    if (!result.error) return null;
    const errors = {};
    for (const item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateProperty = ({ value, name }) => {
    const obj = { [name]: value };
    const schema = { [name]: schema1[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  const handleSubmite = (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;
    console.log('Send data to server');
  };

  const handelChange = ({ currentTarget }) => {
    const { value, name } = currentTarget;
    let errors = { ...errors };
    const errorMesage = validateProperty(currentTarget);
    if (errorMesage) errors[name] = errorMesage;
    else {
      errors = {};
    }

    setFormData({ ...formData, [name]: value });
    setErrors(errors);
  };

  return (
    <form onSubmit={handleSubmite}>
      <Input
        name="fullName"
        label="ФИО"
        value={formData.fullName}
        type="text"
        onChange={handelChange}
        error={errors.fullName}
      />
      <Input
        name="phone"
        label="Телефон"
        value={formData.phone}
        type="text"
        onChange={handelChange}
        error={errors.phone}
      />
      <Input
        name="email"
        label="Email"
        value={formData.email}
        type="text"
        onChange={handelChange}
        error={errors.email}
      />
      <Input
        name="address"
        label="Адрес"
        value={formData.address}
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
