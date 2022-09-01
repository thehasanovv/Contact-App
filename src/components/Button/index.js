import React from "react";
import classes from "./button.module.scss";

const Button = (props) => {
  return (
    <button
      id={props.id}
      disabled={props.isDisabled}
      className={`${classes.button} ${props.class}`}
      onClick={props.clickHandler}
      type={props.type}
      style={{ ...props.style }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
