import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import styles from "./InputText.module.scss";

const InputText = ({ name, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const { error } = meta;
        return (
          <section>
            <input
              className={error ? styles.errorInput : null}
              {...options}
              {...field}
            ></input>
          </section>
        );
      }}
    </Field>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};
export default InputText;
