import React from "react";
import "./style.scss";

/**
 * Button template component.
 * Styles, className, handler & name are in props.
 * Styles load from buttonStyles module (./buttonStyles.js).
 *
 * @example
 * <Button style={s.default} className={"header-button"} handler={yourOnClickHandler} />
 * @param {object} styles from buttonStyles.js
 * @param {function} handler onClick handler from props
 * @param {string} name from props
 * @param {string} className from props
 * @returns {JSX} Button component
 */
const Button = ({ styles, handler, name, className }) => (
  <button style={styles} className={`button ${className}`} onClick={handler}>
    {name}
  </button>
);

export default Button;
