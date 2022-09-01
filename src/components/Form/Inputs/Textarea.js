import TextError from "../TextError";
import classes from "./inputs.module.scss";
import { Field, ErrorMessage } from "formik";

const Textarea = (props) => {
  const { label, name, error, ...rest } = props;

  return (
    <div className={`${classes.form_control} ${error && classes.err_textarea}`}>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} as="textarea" />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Textarea;
