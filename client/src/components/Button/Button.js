import React from 'react';

const Button = (props) => {
  return (
    <button
      onClick={(argument) => {
        return props.callFunction ? props.callFunction(argument) : '';
      }}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
