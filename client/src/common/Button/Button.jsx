import React from "react";
import "./style.scss";

const Button = ({ styles, handler, name, className }) => (
  <button style={styles} className={`button ${className}`} onClick={handler}>
    {name}
  </button>
);

export default Button;
