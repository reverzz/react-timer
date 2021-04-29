import React, {useEffect, useState} from "react";
import Button from "./Button";
import ResetStopwatch from "./ResetStopwatch";

function ControleStopwatch({setTime}) {

  const [isRunning, setIsRunning] = useState(false);

  const startCount = () => setIsRunning(true);
  const pauseCount = () => setIsRunning(false);

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