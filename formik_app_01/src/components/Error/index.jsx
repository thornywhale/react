import React from "react";
import styles from "./Error.module.scss";

const Error = (props) => {
  return (
    <div className={styles.errorDiv}>
      <img
        src="https://assets.hongkiat.com/uploads/funny_error_messages/operation-completed-succesfully-error-funny-error-messages.jpg?newedit"
        alt="error"
      />
    </div>
  );
};

export default Error;
