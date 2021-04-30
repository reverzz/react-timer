import React from "react";
import Button from "./Button";
import ResetStopwatch from "./ResetStopwatch";

function ControlStopwatch({setTime, isRunning, setIsRunning}) {

  const startCount = () => setIsRunning(true);
  const pauseCount = () => setIsRunning(false);

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

export default ControlStopwatch;
