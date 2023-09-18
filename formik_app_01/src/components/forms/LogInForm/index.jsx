import { React, API } from "react";
import { Formik, Form, validateYupSchema, Field, ErrorMessage } from "formik";

import { LOG_IN_SCHEME } from "../../../utils/validationSchemes.js";
import InputText from "./../InputText";
import styles from "./LogInForm.module.scss";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = (props) => {
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
        <section className={styles.inputWrapper}>
          <InputText name="email" type="email" placeholder="Email Address" />
          <ErrorMessage
            name="email"
            component="div"
            className={styles.errorText}
          />
        </section>
        <section className={styles.inputWrapper}>
          <InputText name="password" type="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.errorText}
          />
        </section>

        <button className={styles.submitBtn} type="submit">
          log in
        </button>
      </Form>
    </Formik>
  );
};

export default LogInForm;
