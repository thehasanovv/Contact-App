import React from "react";
import TextError from "../TextError";
import classes from "./inputs.module.scss";
import { Field, ErrorMessage } from "formik";

function Select(props) {
  const { label, name, options, error, ...rest } = props;
  return (
    <div className={`${classes.form_control} ${error && classes.err_select}`}>
      <label htmlFor={name}>{label}</label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => (
          <option key={option.key} value={option.value}>
            {option.value}
          </option>
        ))}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default Select;
