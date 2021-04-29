import React, {useEffect, useState} from "react";
import Button from "./Button";
import ResetStopwatch from "./ResetStopwatch";

function ControleStopwatch({setTime, time}) {

  const [isRunning, setIsRunning] = useState(false);

  const startCount = () => setIsRunning(true)
  const pauseCount = () => setIsRunning(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isRunning) {
        setTime(time + 1);
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [isRunning, time]);

  return (
    <>
      <Button
        classname="timer__button"
        onClick={startCount}
        disabled={isRunning}
      >
        Start
      </Button>
      <Button
        classname="timer__button"
        onClick={pauseCount}
      >
        Pause
      </Button>
      <ResetStopwatch
        setTime={setTime}
        setIsRunning={setIsRunning}
      />
    </>
  );
}

export default ControleStopwatch;