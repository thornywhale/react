import React from "react";
import LearnHooks from "./../components/LearnHooks";
import StopWatchHooks from "../components/StopWatchHooks";
import RangerLogger from "../components/RangerLogger";

const Home = () => {
  return (
    <>
      <section>
        <h1 style={{ color: "black" }}>components storage</h1>
      </section>
      <div
        style={{
          border: "12px black",
          borderStyle: "double hidden hidden hidden",
        }}
      >
        <StopWatchHooks />
        <LearnHooks />
        <RangerLogger />
      </div>
    </>
  );
};

export default Home;
