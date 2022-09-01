import TextError from "../TextError";
import classes from "./inputs.module.scss";
import { Fragment, useState } from "react";
import { Field, ErrorMessage } from "formik";

const CheckboxGroup = (props) => {
  const { label, name, options, ...rest } = props;

  return (
    <div className={classes.form_control}>
      <label>{label}</label>
      <div className={classes.form_control__checkbox}>
        <Field name={name}>
          {({ field }) =>
            options.map((option) => {
              console.log(field.value);
              return (
                <Fragment key={option.key}>
                  <input
                    type="checkbox"
                    id={option.id}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value}
                  />
                  <label htmlFor={option.id}>{option.key}</label>
                </Fragment>
              );
            })
          }
        </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
};

export default CheckboxGroup;
