import React from "react";
import PropTypes from "prop-types";
import { Field } from "formik";
import cx from "classnames";
import styles from "./InputRadioWrapper.module.scss";

const InputRadioWrapper = ({ name, value, children, ...options }) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const classNames = cx({
          [styles.sel]: meta.touched,
        });
        return (
          <label className={styles.radioLabel}>
            <input
              {...options}
              {...field}
              className={styles.dot}
              value={value}
            />
            {children}
          </label>
        );
      }}
    </Field>
  );
};

InputRadioWrapper.defaultProps = {
  name: "role",
  type: "radio",
};

InputRadioWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default InputRadioWrapper;
