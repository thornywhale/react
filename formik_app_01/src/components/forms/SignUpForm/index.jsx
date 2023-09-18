import React from "react";
import PropTypes from "prop-types";
import { Formik, Form, ErrorMessage } from "formik";

import { SIGN_UP_SCHEME } from "../../../utils/validationSchemes";
import InputText from "./../InputText";
import InputRadioWrapper from "../InputRadioWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  email: "",
  password: "",
  passwordConf: "",
  role: "",
  firstName: "",
  lastName: "",
  displayName: "",
};

const SignUpForm = (props) => {
  const onSubmit = (values, formikBag) => {
    console.log(values);
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={SIGN_UP_SCHEME}
    >
      <Form>
        <section className={styles.sixInputs}>
          <section className={styles.inputPair}>
            <section className={styles.inputWrapper}>
              <InputText
                name="firstName"
                type="text"
                placeholder="First name"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className={styles.errorText}
              />
            </section>
            <section className={styles.inputWrapper}>
              <InputText name="lastName" type="text" placeholder="Last name" />
              <ErrorMessage
                name="lastName"
                component="div"
                className={styles.errorText}
              />
            </section>
          </section>
          <section className={styles.inputPair}>
            <section className={styles.inputWrapper}>
              <InputText
                name="displayName"
                type="text"
                placeholder="Display name"
              />
              <ErrorMessage
                name="displayName"
                component="div"
                className={styles.errorText}
              />
            </section>
            <section className={styles.inputWrapper}>
              <InputText
                name="email"
                type="email"
                placeholder="Email Address"
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.errorText}
              />
            </section>
          </section>
          <section className={styles.inputPair}>
            <section className={styles.inputWrapper}>
              <InputText
                name="password"
                type="password"
                placeholder="Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className={styles.errorText}
              />
            </section>
            <section className={styles.inputWrapper}>
              <InputText
                name="passwordConf"
                type="password"
                placeholder="Password Confirmation"
              />
              <ErrorMessage
                name="passwordConf"
                component="div"
                className={styles.errorText}
              />
            </section>
          </section>
        </section>
        <section className={styles.inputWrapper}>
          <InputRadioWrapper name="role" type="radio" value="buyer">
            <div className={styles.radioTextWrapper}>
              <h3>Join As a Buyer</h3>
              <h4>
                I am looking for a Name, Logo or Tagline for my business, brand
                or product.
              </h4>
            </div>
          </InputRadioWrapper>
          <ErrorMessage
            name="role"
            component="div"
            className={styles.errorText}
          />
        </section>
        <section className={styles.inputWrapper}>
          <InputRadioWrapper name="role" type="radio" value="seller" >
            <div className={styles.radioTextWrapper}>
              <h3>Join As a Creative or Marketplace Seller</h3>
              <h4>
                I plan to submit name ideas, Logo designs or sell names in
                Domain Marketplace.
              </h4>
            </div>
          </InputRadioWrapper>
          <ErrorMessage
            name="role"
            component="div"
            className={styles.errorText}
          />
        </section>
        <button className={styles.submitBtn} type="submit">
          Create account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
