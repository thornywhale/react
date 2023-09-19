import React from "react";
import LearnHooks from "./../components/LearnHooks";
import StopWatchHooks from "../components/StopWatchHooks";

const Home = () => {
  return (
    <>
      <section>
        <h1>Home</h1>
      </section>
      <div>
        <StopWatchHooks />
        <LearnHooks />
      </div>
    </>
  );
};

export default Home;