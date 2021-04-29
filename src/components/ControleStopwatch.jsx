import React, {useEffect, useRef, useState} from "react";
import Button from "./Button";
import ResetStopwatch from "./ResetStopwatch";

function ControleStopwatch({setTime}) {

  const [isRunning, setIsRunning] = useState(false);

  const startCount = () => setIsRunning(true)
  const pauseCount = () => setIsRunning(false)

  const timer = useRef(null)

  useEffect(() => {
    if (isRunning) {
      timer.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 100);
    }
    return () => clearInterval(timer.current)
  }, [isRunning]);

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