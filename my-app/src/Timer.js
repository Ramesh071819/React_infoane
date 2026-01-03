import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // start interval
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // cleanup when component unmounts
    return () => {
      clearInterval(intervalId);
      console.log("Timer stopped");
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <p>Seconds: {seconds}</p>
    </div>
  );
};

export default Timer;
