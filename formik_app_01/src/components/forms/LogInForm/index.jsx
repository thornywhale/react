import React from "react";
import { Formik, Form } from "formik";

import { LOG_IN_SCHEME } from "../../../utils/validationSchemes.js";
import InputText from "./../InputText";
import styles from "./LogInForm.module.scss";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = () => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={LOG_IN_SCHEME}
    >
      <Form>
        <InputText name="email" type="email" placeholder="Email Address" />
        <InputText name="password" type="password" placeholder="Password" />

        <button className={styles.submitBtn} type="submit" onSubmit={onSubmit}>
          log in
        </button>
      </Form>
    </Formik>
  );
};

export default LogInForm;
