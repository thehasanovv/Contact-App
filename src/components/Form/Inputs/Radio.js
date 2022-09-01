import React from "react";
import TextError from "../TextError";
import classes from "./inputs.module.scss";
import { Radio } from "antd";
import { Field, ErrorMessage } from "formik";

function RadioButtons(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div
      className={classes.form_control}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label>{label}</label>
      <div className={classes.form_control__radio}>
        <Field name={name}>
          {({ field }) =>
            options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <Radio
                    size="large"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </React.Fragment>
              );
            })
          }
        </Field>
      </div>
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}

export default RadioButtons;
