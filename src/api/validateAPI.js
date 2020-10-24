import Joi from 'joi-browser';

const schema1 = {
  fullName: Joi.string().min(3).required(),
  phone: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
};

export const validate = (data) => {
  const result = Joi.validate(data, schema1, { abortEarly: false });
  if (!result.error) return null;
  const errors = {};
  for (const item of result.error.details) {
    errors[item.path[0]] = item.message;
  }
  return errors;
};

export const validateProperty = ({ value, name }) => {
  const obj = { [name]: value };
  const schema = { [name]: schema1[name] };
  const { error } = Joi.validate(obj, schema);
  return error ? error.details[0].message : null;
};
