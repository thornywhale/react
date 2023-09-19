import React, { useState, useEffect } from "react";

const LearnHooks = (psops) => {
  const [coords, setCoords] = useState({ x: 0, y: 0, z: 0 });
  const [countClick, setCountClick] = useState(0);
  const handleMove = (event) => {
    setCoords({
      ...coords,
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handleClick = () => {
    setCountClick((countClick) => countClick + 1);
  };
  // console.log(document.body);
  // console.log(window);

  useEffect(() => {
    const mouseDiv = document.getElementById("mouseDiv");
    mouseDiv.addEventListener("click", handleClick); //setInterval() alert() fetch()
    return () => {
      mouseDiv.removeEventListener("click", handleClick); //clearInterval()
    };
  }, []);

  /*
  useEffect(() => {
    effect
    return () => {
      cleanup
    };
  }, [input]);
*/
  return (
    <div
      id="mouseDiv"
      style={{
        border: "4px solid black",
        margin: "20px",
        background: "radial-gradient(rgb(0,154,255), rgb(0,50,120))",
      }}
      onMouseMove={handleMove}
      // onClick={handleClick}
    >
      <h2>
        coords: x = {coords.x}, y = {coords.y}
        <br /> clicks = {countClick}
      </h2>
    </div>
  );
};

export default LearnHooks;