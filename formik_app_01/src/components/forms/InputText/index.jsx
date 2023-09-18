import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import styles from "./InputText.module.scss";

const InputText = ({ name, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        return (
          <section>
            <input {...options} {...field}></input>
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
