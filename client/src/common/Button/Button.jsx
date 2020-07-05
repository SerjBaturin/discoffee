import React from "react";
import "./style.scss";

const Button = (props) => (
  <button style={props.styles} className="button" onClick={props.handler}>
    {props.name}
  </button>
);

export default Button;
