import { useState, useEffect } from "react";
import { format } from "date-fns";
import addSeconds from "date-fns/addSeconds";
import styles from "./StopWatchHooks.module.scss";

const StopWatchHooks = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [minutesValue, setMinutesValue] = useState("-");
  const [secondsValue, setSecondsValue] = useState("-");
  const [count, setCount] = useState(null);

  const btnHandle = () => {
    setIsRunning(!isRunning);
  };

  const resetHandle = () => {
    setTime(new Date(0, 0, 0, 0, 0, 0));
    setIsRunning(false);
  };

  const saveValue = () => {
    console.dir(time);
    setMinutesValue(time.getMinutes());
    setSecondsValue(time.getSeconds());
    setCount(count + 1);
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((prevTime) => addSeconds(prevTime, 1));
      }, 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [isRunning]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "4px solid black",
        margin: "20px",
        textAlign: "center",
        backgroundColor: "rgb(128, 128, 128)",
      }}
    >
      <h3>time: {format(time, "mm:ss")}</h3>
      <div>
        <button className={styles.btn} onClick={btnHandle} disabled={isRunning}>
          {isRunning ? "stop" : "start"}{" "}
        </button>
        <button
          className={styles.btn}
          onClick={resetHandle}
          disabled={!isRunning}
        >
          reset
        </button>
        <button
          className={styles.btn}
          onClick={saveValue}
          disabled={!isRunning}
        >
          save
        </button>
      </div>
      <table
        style={{
          border: "2px solid black",
          margin: "10px",
        }}
      >
        <thead>
          <tr>
            <th>№</th>
            <th>minutes</th>
            <th>seconds</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{count}</td>
            <td>{minutesValue}</td>
            <td>{secondsValue}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StopWatchHooks;