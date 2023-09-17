import React from "react";
import PropTypes from "prop-types";
import { Formik, Form } from "formik";

import { SIGN_UP_SCHEME } from "../../../utils/validationSchemes";
import InputText from "./../InputText";
import InputRadioWrapper from "../InputRadioWrapper";
import styles from "./SignUpForm.module.scss";

const initialValues = {
  email: "",
  password: "",
  role: "",
};

const SignUpForm = () => {
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
            <InputText name="first-name" type="text" placeholder="First name" />
            <InputText name="last-name" type="text" placeholder="Last name" />
          </section>
          <section className={styles.inputPair}>
            <InputText
              name="display-name"
              type="text"
              placeholder="Display name"
            />
            <InputText name="email" type="email" placeholder="Email Address" />
          </section>
          <section className={styles.inputPair}>
            <InputText
              name="password-conf"
              type="password"
              placeholder="Password"
            />
            <InputText
              name="password"
              type="password"
              placeholder="Password Confirmation"
            />
          </section>
        </section>
        <InputRadioWrapper name="role" type="radio" value="buyer">
          <div className={styles.radioTextWrapper}>
            <h3>Join As a Buyer</h3>
            <h4>
              I am looking for a Name, Logo or Tagline for my business, brand or
              product.
            </h4>
          </div>
        </InputRadioWrapper>
        <InputRadioWrapper name="role" type="radio" value="seller">
          <div className={styles.radioTextWrapper}>
            <h3>Join As a Creative or Marketplace Seller</h3>
            <h4>
              I plan to submit name ideas, Logo designs or sell names in Domain
              Marketplace.
            </h4>
          </div>
        </InputRadioWrapper>
        <button className={styles.submitBtn} type="submit" onSubmit={onSubmit}>
          Create account
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
