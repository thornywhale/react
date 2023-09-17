import React from "react";
import SignUpForm from "../components/forms/SignUpForm";

const SignUpPage = () => {
  return (
    <section >
      <h1>create an account</h1>
      <h4>We always keep your name and email address private.</h4>
      <SignUpForm />
    </section>
  );
};

export default SignUpPage;
