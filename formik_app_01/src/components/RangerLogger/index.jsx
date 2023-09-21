import React, { useState, useCallback, useEffect } from "react";
import styles from "./RangerLogger.module.scss";

const RangerLogger = () => {
  const [inputValue, setInputValue] = useState(100);
  const [loggedValue, setLoggedValue] = useState("log me");

  const handleValue = useCallback(({ target: { value } }) => {
    setInputValue(value);
  }, []);

  const handleLogValue = useCallback(() => {
    setLoggedValue(inputValue);
  }, [inputValue]);

  // useEffect(() => {
  //   console.log(inputValue);
  // }, [handleLogValue]);
  return (
    <div style={{ display: "flex" }}>
      <div className={styles.rangeInputWrapper}>
        <h3>{inputValue}&nbsp;</h3>
        <input type="range" value={inputValue} onChange={handleValue} />
        <button onClick={handleLogValue}>Log value</button>
      </div>
      <div className={styles.rangeInputWrapper} style={{ width: "60px" }}>
        <h3>{loggedValue}</h3>
      </div>
    </div>
  );
};

export default RangerLogger;
