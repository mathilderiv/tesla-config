import React from "react";

const Button = (props) => {
  const { func, text, price, style } = props;
  return (
    <button onClick={func} className={style}>
      <span>{text}</span>
      <span>{price}</span>
    </button>
  );
};

export default Button;
