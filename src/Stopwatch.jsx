import React, {useState, useEffect} from "react";
import ControlStopwatch from "./components/ControlStopwatch";
import DisplayStopwatch from "./components/DisplayStopwatch";

function Stopwatch() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 100);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  return (
    <div className="stopwatch">
      <DisplayStopwatch
        time={time}
      />
      <ControlStopwatch
        setTime={setTime}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
      />
    </div>
  );
}

export default Stopwatch;
