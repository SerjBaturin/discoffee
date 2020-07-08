import React from "react";
import "./style.scss";

const Button = ({ styles, handler, name }) => (
  <button style={styles} className="button" onClick={handler}>
    {name}
  </button>
);

export default Button;
