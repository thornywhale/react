import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import styles from "./InputRadioWrapper.module.scss";

const InputRadioWrapper = ({ name, value, children, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label>
          <input className={styles.dot} value={value} {...options} {...field} />
          {children}
        </label>
      )}
    </Field>
  );
};

InputRadioWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default InputRadioWrapper;