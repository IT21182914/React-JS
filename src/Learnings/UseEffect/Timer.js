import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Elapsed Time: {count} seconds</p>
      <p>Elapsed Time: {count / 60} Minutes</p>
    </div>
  );
}

export default Timer;
