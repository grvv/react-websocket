import React from 'react';

const Input = ({ input, type, placeholder, label, meta }) => {
//   console.log(input, meta);

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        {...input}
        type={type}
        className="form-control"
        placeholder={placeholder}
        autoComplete="off"
      />

      {meta.touched && meta.error && (
        <div className="alert alert-danger" role="alert">
          <strong>Oh snap!</strong> {meta.error}
        </div>
      )}
    </div>
  );
};

export default Input;
