import React from 'react';

const Input = ({ name, label, value, type, onChange, error }) => (
  <div className="form-group row">
    <label htmlFor={name} className="col-sm-2 col-form-label">
      {label}
    </label>
    <div className="col-sm-10">
      <input
        value={value}
        type={type}
        name={name}
        className="form-control"
        id={name}
        onChange={onChange}
      ></input>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  </div>
);

export default Input;
