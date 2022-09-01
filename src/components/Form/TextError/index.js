import classes from "./text-error.module.scss";

const TextError = (props) => {
  return <div className={classes.error}>{props.children}</div>;
};

export default TextError;
