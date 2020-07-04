import React from "react";
import "./style.scss";

const Button = (props) => (
  <button className="button" onClick={props.handlerClick}>
    {props.name}
  </button>
);

export default Button;
